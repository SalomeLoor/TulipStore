import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//css
import '../styles/TerminosYCondiciones.css'

const TerminosYCondiciones = () => {
    const [IsChecked, setChecked] = useState(false);
    const [IsChecked2, setChecked2] = useState(false);
    return (
      <>
        <div className="TerminosYCondiciones nunito">
        <div className="Checkbox-container">
          <input
            type="checkbox"
            id="checkbox"
            checked={IsChecked}
            onChange={(e) => setChecked(e.target.checked)}
            required 
          />
          <span
            className="Terminos-link"
            onClick={() => {
              // abrir modal o navegar a ruta
              console.log("abrir modal o ir a /terminos");
            }}
          >
            Términos y condiciones
          </span>
        </div>
        <div className="Checkbox-container">
          <input
            type="checkbox"
            id="checkbox2"
            checked={IsChecked2}
            onChange={(e) => setChecked2(e.target.checked)}
            required
          />
          <span
            className="Terminos-link"
            onClick={() => {
              // abrir modal o navegar a ruta
              console.log("abrir modal o ir a /politicas");
            }}
          >
            Políticas de privacidad
          </span>
        </div>
        </div>
      </>
    )
}

export default TerminosYCondiciones
