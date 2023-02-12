import {Outlet ,Link } from "react-router-dom"

const About = () => {
  return (
    <>
    <div>
      <h1>About</h1>
        <p>This is a demo website about React-router-dom library   7777</p>
        <ul>
          <li>
            <Link to='contacts'>Our contacts</Link>
          </li>
          <li>
            <Link to='team'>Add team</Link>
          </li>
        </ul>
        
        <Outlet/>
      </div>
      
      </>
  )
}

export { About }