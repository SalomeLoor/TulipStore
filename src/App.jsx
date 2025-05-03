
import './App.css'
import { Routes, Route } from 'react-router-dom';
//componentes
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import UserPerfil from './Pages/UserPerfil';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
//provider de autenticacion
import RedirectIfAuthenticated from './providers/RedirectIfAuthenticated';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route
          path="/registrarse"
          element={
            <RedirectIfAuthenticated>
              <Registro />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
       
        <Route path="/user" element={<UserPerfil />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
