import {  Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


import { Homepage } from './Pages/Homepage.jsx';
import { About } from './Pages/About.jsx';
import { blogLoader, Blogpage } from './Pages/Blogpage.jsx';
import { Notfoundpage } from './Pages/Notfoundpage.jsx';
import { postLoader, SingleParam } from './Pages/SingleParam';
import { Editpost, updatePostAction } from './Pages/Editpost.jsx';
import { LoginPage } from './Pages/Loginpage.jsx';

 import { Layout } from './Loaut';
import { createPostAction, CreatePost } from './Pages/Creetpost.jsx';

import { RequireAuth } from './hoc/RequireAuth.jsx';
import { AuthProvider } from './hoc/AutuProvader.jsx';
import { ErrorPage } from './Pages/Errorpage.jsx';


const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={ <Layout/>}  > 
          <Route index element={<Homepage />} />
          <Route path='/about/*' element={<About />} >
            <Route path='contacts' element={<p>Our contacts</p>} ></Route>
            <Route path='team' element={<p>Add team</p>} ></Route>
          </Route>
          <Route path='/about-us' element={<Navigate to='/about' replace/>} />
          <Route path='/posts' element={<Blogpage />} loader={blogLoader} errorElement={<ErrorPage /> } />
          <Route path='/posts/:id' element={<SingleParam />} loader={postLoader} />
          <Route path='/posts/:id/edit' element={<Editpost />} loader={postLoader} action={updatePostAction} />
          <Route path='/posts/new' element={
            <RequireAuth>
              <CreatePost/>
            </RequireAuth>
          }  action={createPostAction} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route> 
))


function App() {
  return (
    <AuthProvider>
  <RouterProvider router={router}/>      
  </AuthProvider>
  );

   
}

export default App;


// function App() {
//   return (
//     <AuthProvider>
      {/* <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>  */}
      {/* <Routes> */}
      {/* <Route path='/' element={ <Layout/>}> 
          <Route index element={<Homepage />} />
          <Route path='/about/*' element={<About />} >
            <Route path='contacts' element={<p>Our contacts</p>} ></Route>
            <Route path='team' element={<p>Add team</p>} ></Route>
          </Route>
          <Route path='/about-us' element={<Navigate to='/about' replace/>} />
          <Route path='/posts' element={<Blogpage />} />
          <Route path='/posts/:id' element={<SingleParam />} />
          <Route path='/posts/:id/edit' element={<Editpost />} />
          <Route path='/posts/new' element={
            <RequireAuth>
              <CreetPost/>
            </RequireAuth>
          } />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>  */}
      {/* </Routes> */}
      
    {/* </AuthProvider>
  );
} */}