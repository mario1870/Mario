import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"



export default function Button_schule(props) {
  return (
    <div>        
        <div className='d-flex flex-column jusify-content-center align-items-center'>
            <img className='rounded-circle' src={props.bild} width="150px"/>
            <h1 className='text-light'>{props.titel}</h1>
            <p className='text-light'>▷ 2008-2012: Grundschule Stetten u.H.<br/>▷ 2012-2020: Gymnasium Gammertingen<br/>▷ 2020: Abitur absolviert"</p>
        </div>
    </div>
  )
}
