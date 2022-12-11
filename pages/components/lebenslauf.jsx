import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from '../lebenslauf_components/button_schule'
import Button_schule from '../lebenslauf_components/button_schule'
import Button_kindheit from '../lebenslauf_components/button_kindheit'
import Button_hobbys from '../lebenslauf_components/button_hobbys'
import Button_ausbildung from '../lebenslauf_components/button_ausbildung'



export default function Lebenslauf() {
  return (
    <div style={{height: "100vh",  backgroundImage:"url(gray.jpg)", backgroundSize:"cover", backgroundPosition:"center"}} className='w-100 d-flex'>
      
      <div className='row w-100 d-flex'>
        <span className='col-6 col-sm-3 d-flex justify-content-center align-items-center'><Button_schule bild="schule.png" titel="Schule" /></span>
        <span className='col-6 col-sm-3 d-flex justify-content-center align-items-top align-items-sm-center'><Button_ausbildung bild="buro.jpg" titel="Ausbildung" text="#"/></span>
        <span className='col-6 col-sm-3 d-flex justify-content-center align-items-center'><Button_kindheit bild="drache.jpg" style={{zIndex: "2"}} titel="Sonstige Erfahrungen" /></span>
        <span className='col-6 col-sm-3 d-flex justify-content-center align-items-top align-items-sm-center'><Button_hobbys bild="uni.jpg" titel="Hobbies" text="#"/></span>
      </div>

    </div>
  )
}
