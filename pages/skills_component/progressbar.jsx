import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ProgressBar from 'react-bootstrap/ProgressBar';



export default function Progressbar(props) {
  return (
    <div className='py-2'>
        <span className='text-light'>{props.skill}:</span>
        <ProgressBar now={props.anzahl} label={`${props.anzahl}%`} variant={props.color} animated={false}/>        
    </div>



  )
}
