import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Landing_text from '../landing_components.jsx/landing_text'
import Landing_img from '../landing_components.jsx/landing_img'


export default function Landing() {
  return (
    <div style={{height: 'calc(100vh - 0px)', backgroundImage:"url(wp.jpg)", backgroundSize:"cover"}} className='d-flex'>
        <div className='row'>

        

        <span className='col-sm-3 d-none d-md-block h-100'></span>

            <span className='col-sm-3 d-none d-sm-block d-flex justify-content-center align-items-md-center align-items-sd-top'>
                <Landing_text />
            </span>

            <span className=' col-sm-6 d-flex justify-content-end align-items-end '>
              <span style={{bottom: "0px"}} className='p-sm-5 p-1 d-flex justify-content-center justify-content-sm-end'><Landing_img/></span>
            </span> 
            
            <span className='col-sm-3 d-block d-sm-none d-flex justify-content-center align-items-md-center align-items-sd-top'>
                <Landing_text />
            </span>

            <span className='col-sm-1 d-block d-md-none d-flex justify-content-center align-items-center'>
                <a href="#Lebenslauf">
                  <img src="arrow.jpg" alt="" width="60" height="60" style={{mixBlendMode: "darken"}} />
                </a>
            </span>

            <span className='col-sm-2 d-none d-md-block'></span>
        </div>
    </div>
  )
}
