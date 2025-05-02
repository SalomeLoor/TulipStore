
import './App.css'
import {BrowserRouter as Router  , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import UserPerfil from './Pages/UserPerfil';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';

function App() {
  
  return (
    <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrarse"  element={ <Registro/> } />
        <Route path="/user" element={<UserPerfil/>}  />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
