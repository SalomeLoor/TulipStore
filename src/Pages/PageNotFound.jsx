import React from 'react'
import ImgError from '../assets/fantasma.png'
import '../styles/PageNotFound.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
      <section className='page-not-found'>
       <img id='fantasma' src={ImgError} alt="Fantasma" />
       <div className='text'> 
       <h1 className='rubik-wet-paint-regular'>404</h1>
       <p className='dancing-script'>Oops! Page Not Found</p>
       <p className='nunito'>It seems like we donut find what you searched.The page you were
        looking for doesn´t exist, isn´t available or was loading incorrectly.
       </p>
       <Link to="/">
       <button id='btn' className='btn nunito'>Back </button>
       </Link>
       </div>
      </section>
  )
}

export default PageNotFound

