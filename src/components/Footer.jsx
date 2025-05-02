import React from 'react'
import '../styles/Footer.css'

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
        <footer>
            <div className="footer-container">
              <div className="footer-section about">
                    <h2 className="fascinate-inline-regular">Sobre Nosotros</h2>
                    <p className="federo-regular">Somos una empresa comprometida con la excelencia y la innovación, brindando soluciones de alta calidad a nuestros clientes.</p>
                </div>
                <div className="footer-section links">
                    <h2 className="fascinate-inline-regular">Enlaces Rápidos</h2>
                    <ul className="federo-regular">
                        <li><a href="./home.html">Home</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                    </ul>
                </div>
               <div className="footer-section contact">
                    <h2 className="fascinate-inline-regular">Contacto</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Dirección: Av. San Lorenzo, Calceta-Manabí-Ecuador</p>
                    <p><i className="fas fa-phone"></i> Celular: +593 988861494</p>
                    <p><i className="fas fa-envelope"></i> Email: solutions.tulipan.ec@gmail.com</p>
                </div>
                <div className="footer-section social">
                    <h2 className="fascinate-inline-regular">Síguenos</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/18N9LBSLsi/" target="_blank"><img src={facebook} alt="Facebook" /></a>
                        <a href="#" target="_blank"><img src={instagram} alt="Instagram" /> </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="federo-regular">&copy; Tulipán Store | Todos los derechos reservados.</p>
                <p className="federo-regular">Desarrollado con ❤️ por TulipCode</p>
            </div>
            <div>
                <p>Terminos y Condiciones</p>
                <p>Politica de Privacidad</p>
            </div>
        </footer>
  )
}

export default Footer
