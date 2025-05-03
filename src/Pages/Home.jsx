import { React } from 'react'
import '../styles/Home.css'
//imgs
import creditCard from '../assets/creditcard.png'
import delivery from '../assets/delivery.png'
import support from '../assets/support.png'
import tiempoEnvio from '../assets/tiempoEnvio.png'
import confort from '../assets/confort.png'
import secure from '../assets/secure.png'
//components
import Footer from '../components/Footer'
import SliderCategory from '../components/SliderCategory'
import SliderAnuncio from '../components/SliderAnuncio'
import Header from '../components/Header'


const Home = () => {

    return (
        <main>
            <Header/>
            <SliderAnuncio />
            <section className='Metodos-envios'>
                <div className='envios nunito'>
                    <img src={delivery} alt="" />
                    <h4>Envios</h4>
                    <span>Envios a nivel Nacional por ServiEntrega.</span>
                </div>
                <div className='envios nunito'>
                    <img src={tiempoEnvio} alt="Tiempo de Envio" />
                    <h4>Tiempo de Envio</h4>
                    <span>Los Envios pueden demorar entre 24h a 72h dependiendo de tu ubicación</span>
                </div>
                <div className='envios nunito'>
                    <img src={support} alt="Soporte" />
                    <h4>Soporte</h4>
                    <span>Soporte de Lun/Dom de 7:00am a 12:00pm.</span>
                </div>
                <div className='envios nunito'>
                    <img src={creditCard} alt="Metodos de Pago" />
                    <h4>Metodos de Pago</h4>
                    <span>Aceptamos todas las Targetas de credito y debito</span>
                </div>
            </section>
            <SliderCategory />
            <section className='Metodos-envios'>
                <div className='envios nunito'>
                    <img src={confort} alt="" />
                    <h4>Comodidad</h4>
                    <span>Compra desde cualquier lugar y en cualquier momento.</span>
                </div>
                <div className='envios nunito'>
                    <img src={secure} alt="Tiempo de Envio" />
                    <h4>Seguridad</h4>
                    <span>Procesos de pago seguros y protección de datos personales.</span>
                </div>
                <div className='envios nunito'>
                    <img src={support} alt="Tiempo de Envio" />
                    <h4>Contactanos</h4>
                    <span>Tienes dudas? Contactanos estaremos encantados de ayudarte.</span>
                </div>
            </section>
            <div className='container-ProductosNuevos dancing-script'>
                <h2>Productos Nuevos </h2>
                <div>

                </div>
            </div>
            <div className='container-ProductosPopulares dancing-script'>
                <h2>Lo mas Popular ✨</h2>
                <div>

                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home
