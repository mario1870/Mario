import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Progressbar from '../skills_component/progressbar'


export default function Skills() {
  return (
    <div style={{height: "100vh",  backgroundImage:"url(wp_code.png)", backgroundSize:"cover", backgroundPosition:"center"}} className='w-100'>
        <div className='row w-100 h-100'>
            

            <div className='col-sm-5 d-flex flex-column justify-content-center px-5'>
              <span>
                <Progressbar skill={"HTML5"} anzahl={95} color={"success"}/>
                <Progressbar skill={"CSS3"} anzahl={95} color={"info"}/>
                <Progressbar skill={"Javascript"} anzahl={85} color={"danger"}/>
                <Progressbar skill={"ReactJS"} anzahl={85} color={"warning"}/>
                </span>
            </div>

            <div className='col-sm-2'></div>

            <div className='col-sm-5 d-flex flex-column justify-content-center px-5'>
                <Progressbar skill={"NextJS"} anzahl={80} color={"success"}/>
                <Progressbar skill={"Python3"} anzahl={90} color={"info"}/>
                <Progressbar skill={"Numpy"} anzahl={70} color={"danger"}/>
                <Progressbar skill={"Tensorflow"} anzahl={60} color={"warning"}/>
            </div>
        </div>
    </div>
  )
}
