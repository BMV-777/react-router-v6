import { Suspense } from "react";
import {Link,useNavigate, useLoaderData, Await, useAsyncValue } from "react-router-dom";
// import { useState, useEffect } from "react";


const Post = (id) => {
  const post = useAsyncValue();
  return(
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <Link to= {`/posts/${id}/edit`}>Edit this post</Link> */}
  </>
  )
}

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <div>
      <h2>Comments</h2>
      {comments.map(comments => (
        <>
          <h3>{comments.email}</h3>
          <h4>{comments.name}</h4>
           <p>{comments.body }</p>
        </>
))}
    </div>
)
}


const SingleParam = () => {
  const {post, id, comments} = useLoaderData();
  //  const { id } = useParams();
  // const [post, setPost] = useState(null);
  const navigate = useNavigate();
  
  const goBack =() => navigate(-1);
  
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(response => response.json('')
  //       .then(date => setPost(date)))
  // },[id])
  
  return (
    <div>
      <button onClick={goBack}>goBack</button>
       
      <Suspense fallback={<h1>Post is Loading...</h1>}>
        <Await resolve={post}>
          <Post/>
        </Await>
      </Suspense>
       <Suspense fallback={<h1>Comments is Loading...</h1>}>
        <Await resolve={comments}>
          <Comments/>
        </Await>
      </Suspense>
      <Link key={post.id} to={`/posts/${post.id}/edit`}>Edit this post</Link>
       
    
    
  
    </div>
)
}

async function getPostId(id) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const post = await resp.json();
    return  resp.json();
}
async function getPostComment(id) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  // const post = await resp.json();
  return  resp.json();
}

const postLoader = async ({ params }) => {
  const id = params.id

  return {post: await getPostId(id),id, comments: getPostComment(id) }
}

export { SingleParam, postLoader };