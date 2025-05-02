import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//css
import '../styles/Registro.css'
//imgs
import facebook from '../assets/button-facebook.png'
import google from '../assets/button-google.png'
import logo from '../assets/logo.png'

//conexion al backend
import supabase from '../SupaBase/supabase.config';
import TerminosYCondiciones from '../components/TerminosYCondiciones';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    if (!email || !password) {
      alert('Por favor rellena todos los campos');
      return;
    }
    console.log("Correo enviado:", email, password)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }
      console.log("Usuario registrado:", data);
      alert("Revisa tu correo para completar el inicio de sesión.");

      // Obtener ID del usuario registrado
      const userId = data?.user?.id;
      if (!userId) {
        throw new Error("No se pudo obtener el ID del usuario.");
      }
    } catch (err) {
      console.error("Error al registrarase:", err.message);
      alert("Hubo un error al enviar el correo. Inténtalo de nuevo.");
    }

  }

  return (
    <div className='Form-Registro'>
      <Link to="/" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
      </Link>
       
      <div className='img-registro'>
        <img src={logo} alt="osito" />
        <p className='pompiere frase-escritura'>
          <span className='typewriter-text'>
          Olvida las reglas si te gusta usalo, y se tu misma
          </span> 
          </p>
      </div>
      <form onSubmit={handleSubmitRegister}>
        <h2 className='dancing-script'>Bienvenida</h2>
        <h4 className='nunito'> Registrate para una mejor experiencia🌷</h4>
        <div className='input-group nunito'>
          <input type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <label>Correo:</label>
        </div>

        <div className='input-group nunito'>
          <input type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <label>Contraseña:</label>
        </div>

        <button type="submit" className='Btn nunito'>Continuar</button>

        <div className='redes-registro'>
          <div className='linea nunito'>
            <h3>O registrate con:</h3>
          </div>
          <div className='redes'>
            <button type="button"><img src={google} alt="Google" /></button>
            <button type="button"><img src={facebook} alt="Facebook" /></button>
          </div>
        </div>
        <div className='tienes-una-cuenta nunito'>
          <p>Ya tienes una cuenta?</p><Link to="/login">Iniciar Sesion</Link>
        </div>
        
        <TerminosYCondiciones />
        
      </form>
    </div>
  )
}

export default Registro
