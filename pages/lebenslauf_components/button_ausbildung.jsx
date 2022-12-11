import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"



export default function Button_ausbildung(props) {
  return (
    <div>        
        <div className='d-flex flex-column jusify-content-center align-items-center'>
            <img className='rounded-circle' src={props.bild} width="150px"/>
            <h1 className='text-light'>{props.titel}</h1>
            <p className='text-light'>▷ Seit September 2021-heute:<br/>Ausbildung zum Industrikaufmann bei Trigema</p>
        </div>
    </div>
  )
}
