import React from 'react'
//css
import '../styles/Footer.css'
//imgs
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section logo-social">
          <div className="about nunito">
            <img src={logo} alt="Logo" />
            <p>Tulipán Store es un espacio donde cada prenda y accesorio hecho a mano refleja amor, estilo y magia. Pensadas para hacerte sentir especial y magica. Bienvenida a tu nuevo lugar favorito 🌷
            </p>
          </div>
          <div className="social-icons">
              <a href="#" target="blank"><img src={facebook} alt="Facebook" /></a>
              <a href="#" target="blank"><img src={instagram} alt="Instagram" /></a>
            </div>
        </div>

        <div className="footer-section links">
          <h2 className="dancing-script">Enlaces Rápidos</h2>
          <ul className="nunito">
            <li><a href="/">Home</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>

        <div className="footer-section contact nunito">
          <h2 className="dancing-script">Contacto</h2>
          <p> Calceta - Manabí - Ecuador</p>
          <p> +593 988861494</p>
          <p> solutions.tulipan.ec@gmail.com</p>
          <button className='btn-ver-mas nunito'>ver más..</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="federo-regular">&copy;2025 Tulipán Store | Todos los derechos reservados. | Desarrollado con ❤️ por   <a href="https://salomeloor.netlify.app" target="blank" >TulipCode.</a></p>
      </div>

    </footer>

  )
}

export default Footer
