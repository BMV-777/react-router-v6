import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const CreetPost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>CreetPost</h1>
      <button onClick={() => signout(()=> navigate('/',{replace: true}))}>Log out</button>
    </div>
)
}

export { CreetPost };