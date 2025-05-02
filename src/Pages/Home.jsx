import { React } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
//imgs
import user from '../assets/user.png'
import carrito from '../assets/bag.png'
import logo from '../assets/logo.png'
import creditCard from '../assets/creditcard.png'
import delivery from '../assets/delivery.png'
import support from '../assets/support.png'
import tiempoEnvio from '../assets/tiempoEnvio.png'

//components
import Footer from '../components/Footer'
import SliderCategory from '../components/SliderCategory'
import AcordionFAQs from '../components/AcordionFAQs'
import SliderAnuncio from '../components/SliderAnuncio'


const Home = () => {

    return (
        <main>
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
            <SliderAnuncio />
            <section className='Metodos-envios'>
                <div className='envios nunito'>
                    <img src={delivery} alt="" />
                    <span>Envios a nivel Nacional por ServiEntrega.</span>
                </div>
                <div className='envios nunito'>
                    <img src={tiempoEnvio} alt="Tiempo de Envio" />
                    <span>Los Envios pueden demorar entre 24h a 72h dependiendo de tu ubicación</span>
                </div>
                <div className='envios nunito'>
                    <img src={support} alt="Soporte" />
                    <span>Soporte de Lun/Dom de 7:00am a 12:00pm.</span>
                </div>
                <div className='envios nunito'>
                    <img src={creditCard} alt="Metodos de Pago" />
                    <span>Aceptamos todas las Targetas de credito y debito</span>
                </div>
            </section>
            <SliderCategory />
            {/*<AcordionFAQs /> */}
            <div className='container-ProductosNuevos dancing-script'>
                <h2>Lo mas Popular ✨</h2>
                <div>

                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home
