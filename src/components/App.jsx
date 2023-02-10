import { Routes, Route, Navigate } from 'react-router-dom';


import { Homepage } from './Pages/Homepage.jsx';
import { About } from './Pages/About.jsx';
import { Blogpage } from './Pages/Blogpage.jsx';
import { Notfoundpage } from './Pages/Notfoundpage.jsx';
import { SingleParam } from './Pages/SingleParam';
import { Editpost } from './Pages/Editpost.jsx';
import { LoginPage } from './Pages/Loginpage.jsx';

 import { Layout } from './Loaut';
import { CreetPost } from './Pages/Creetpost.jsx';

import { RequireAuth } from './hoc/RequireAuth.jsx';
import { AuthProvider } from './hoc/AutuProvader.jsx';





function App() {
  return (
    <AuthProvider>
       {/* <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>  */}
      <Routes>
         <Route path='/' element={ <Layout/>}> 
          <Route index element={<Homepage />} />
          <Route path='/about' element={<About />} />
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
        </Route> 
      </Routes>
      
  </AuthProvider>
  );

   
}

export default App;
