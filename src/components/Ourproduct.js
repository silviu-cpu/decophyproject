import React, { useEffect } from 'react'
import './Ourproduct.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function Ourproduct() {
    useEffect(() => {
        
        Aos.init({
            duration:5000
        })
            
        
    }, [])
    return (
        <div className='product-container' id='product'>
            <div data-aos="fade-right" className='product-text'>
                <h1> Aceasta este produsul </h1>
            </div>

            <div data-aos="fade-left" className="img-accordion">
                <div className="img img1">
                    <p>First Photo</p>
                </div>
                <div className="img img2">
                    <p>Second Photo</p>
                </div>
                <div className="img img3">
                    <p>Third Photo</p>
                </div>
                <div className="img img4">
                    <p>Fourth Photo</p>
                </div>
                <div className="img img5">
                    <p>Fifth Photo</p>
                </div> 
            </div>
        </div>
    )
}




export default Ourproduct