import { useParams,Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const SingleParam = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  
  const goBack =() => navigate(-1);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json('')
        .then(date => setPost(date)))
  },[id])
  
  return (
    <div>
      <button onClick={goBack}>goBack</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          
          <Link to={`/posts/${id}/edit`} >Edit Post</Link>
        </>
        
)}     
    </div>
)
}

export { SingleParam };