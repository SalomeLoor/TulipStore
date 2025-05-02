import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmitLogin}>
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

        <button type='submit'>Iniciar Sesion</button>
       
        <div className='redes sociales'>
          <button type='button'>Google</button>
          <button type='button'>Facebook</button>
        </div>

        <div className='tienes una cuenta'>
          <p>¿No tienes una cuenta?</p>
          <Link to="/registrarse">Registrate</Link>
        </div>
        <div className='Olvidaste tu contraseña'>
          <p>¿Olvidaste tu contraseña?</p> <button type='button'>Recuperar</button>
        </div>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  )
}

export default Login
