import React from 'react'
import '../styles/AcordionFAQs.css'
import {FAQ} from '../js/FAQs.js';
const AcordionFAQs = () => {
  return (
    <div className='Acordion'>
    <h2 className='fascinate-inline-regular'>Preguntas Frecuentes</h2>
     <div className='Seccion-Acordion'>
      <div className='Details-Summary'>
      {
      FAQ.map((item,index)=>(
        <details key={index}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))
      }
      </div>
     </div>
    </div>
  )
}
export default AcordionFAQs
