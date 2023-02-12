
import { Suspense } from "react";
import { Link, useSearchParams, useLoaderData,  Await } from "react-router-dom";
import { BlogFilter } from "../BlogFilter";

const Blogpage = () => {
  // const [posts, setPost] = useState([]);
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');
  
  const startsForm = latest ? 80 : 1;
  
  
  
  // const handleSubmit = e => {
  //   e.preventDefault();
    
  //   const form = e.target;
    
  //   const query = form.search.value;
    
  //   const isLater = form.latest.checked;
    
  //   const params = {};
    
  //   if (query.length) params.post = query;
  //   if (isLater) params.latest = true;
    
  //   setSearchParams(params)
    
    
  // }
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json('')
  //       .then(date => setPost(date)))
  // },[])
  


  return (
    <>
      <div>
        <h1>Blogers</h1>
        <BlogFilter postQuery={postQuery} latest ={latest} setSearchParams={setSearchParams} />
        {/* <form autocomplete='off' onSubmit={handleSubmit}>
          <input type='search' name='search' />
      
          <label style={{ padding: '0 1rem' }}>
            <input type='checkbox' name='latest'/> New only
          </label>
            <input type='submit' value='Search' />
        </form> */}
        <Link to='/posts/new' >Page Path</Link>
        
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={posts}>
            {
              (resolvedPost) => (
                <>        
                   {
                     resolvedPost.filter(
                     post => post.title.includes(postQuery) && post.id >= startsForm
                    ).map(post => (
                     <Link key={post.id} to={`/posts/${post.id}`}>
                       <li>{post.title }</li>
                     </Link>
                      ))
                   }
                </>
)
            }
          </Await>
        </Suspense>
{/*         
        {
          posts.filter(
            post => post.title.includes(postQuery) && post.id >= startsForm
          ).map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title }</li>
            </Link>
             ))
        } */}
    
    </div>
    </>
  )
}

async function getPost() {
   const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  return resp.json();
}

const blogLoader = async () => {
  // console.log(request, params);
  return  {
    posts: getPost()
  }
 
}

export { Blogpage, blogLoader  }