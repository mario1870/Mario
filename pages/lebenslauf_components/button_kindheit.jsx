import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"



export default function Button_kindheit(props) {
  return (
    <div>        
        <div className='d-flex flex-column jusify-content-center align-items-center'>
            <img className='rounded-circle' src={props.bild} width="150px"/>
            <h1 className='text-light'>{props.titel}</h1>
            <p className='text-light'>▷ 2018: Ferienjob bei Bauermeister Naturstoffe<br/>▷ 2021: drei Ferienjobs bei Daimler AG<br/></p>
        </div>
    </div>
  )
}
