import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//css
import '../styles/Login.css'
//imgs
import facebook from '../assets/button-facebook.png'
import google from '../assets/button-google.png'
import logo from '../assets/logo.png'

//conexion al backend
import supabase from '../SupaBase/supabase.config';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(""); // Para mostrar mensajes al usuario

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Limpia mensajes anteriores
    if (!email || !password) {
      alert('Por favor rellena todos los campos');
      return;
    }
    console.log("Correo enviado:", email, password)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      //maneja el error cuando un usario no esta registrado y quiere loguearse
      if (error) {
        console.log("Error detallado:", error);
        if (error.message.includes("Invalid login credentials")) {
          setMessage("El usuario no está registrado o las credenciales son incorrectas.");
        } else {
          setMessage(error.message || "Error al iniciar sesión.");
        }
        return;
      }
      alert('Inicio de sesión exitoso');

    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setMessage('Hubo un error al iniciar sesión. Inténtalo de nuevo.');
    }
  }

  return (
    <div className='Form-Login'>
      <Link to="/" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link>
      <div className='img-registro-login'>
        <img src={logo} alt="logo" />
        <p className='pompiere frase-escritura'>
          <span className='typewriter-text'>
            Olvida las reglas si te gusta usalo, y se tu misma
          </span>
        </p>

      </div>
      <form onSubmit={handleSubmitLogin}>
        <h2 className='dancing-script'>Bienvenida de nuevo</h2>
        <h4 className='nunito'> Inicia Sesión para una mejor experiencia🌷</h4>
        <div className='input-group'>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <label>Correo:</label>
        </div>

        <div className='input-group'>
          <input
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <label>Contraseña:</label>
        </div>

        <button className='Btn nunito' type='submit'>Iniciar Sesion</button>

        <div className='redes-registro'>
          <div className='linea linea2 nunito'>
            <h3>O inicia sesión con:</h3>
          </div>
          <div className='redes'>
            <button type="button"><img src={google} alt="Google" /></button>
            <button type="button"><img src={facebook} alt="Facebook" /></button>
          </div>
        </div>
        <div className='sesion nunito'>
          <div className='tienes-una-cuenta  '>
            <p>¿Olvidaste tu contraseña?</p> <Link to='*'>Recuperar</Link>
          </div>
          <div className='tienes-una-cuenta  '>
            <p>¿No tienes una cuenta?</p><Link to="/registrarse">Registrate</Link>
          </div>
        </div>

      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  )
}

export default Login
