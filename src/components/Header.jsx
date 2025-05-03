import React from 'react'
import { Link } from 'react-router-dom'
//css
import '../styles/Header.css'
//imgs
import user from '../assets/user.png'
import carrito from '../assets/bag.png'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <header>
            <div className='Containaer-frase'>
                <p className='frase-bienvenida pompiere'>
                    Aquí no hay reglas, solo cosas lindas que te hacen sentir especial y mágica. Bienvenida a Tulipán Store 🌷
                </p>
            </div>
            <div className='Logo'>
                <img id='Imglogo' src={logo} alt="Logo" />
                <nav className='NavBar'>
                    <img src={carrito} alt="Carrito" />
                    <Link to="/registrarse">
                        <img src={user} alt="USER" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
