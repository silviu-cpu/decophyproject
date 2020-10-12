import React, { useEffect } from 'react'
import './Ourstory.css'
import Aos from 'aos'
import "aos/dist/aos.css";


function Ourstory() {
    useEffect(() => {
        
        Aos.init({duration: 5000})
            
        
    }, [])
    return (
        <div className='story-container' id='story'>
            <h1  data-aos="fade-right" className='story-text'> Aceasta este povestea noastra </h1>
            <div data-aos="fade-up" className='logo-container'></div>
        </div>
    )
}




export default Ourstory