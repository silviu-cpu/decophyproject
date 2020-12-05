 import React from 'react'
 import '../App.css'
 import { Button } from './Button'
 import './HeroSection.css'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import { faFacebook, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons"

 function HeroSection() {
     return (
         
         <div className='hero-container' id='hero'>
             <h1 class="animate__animated animate__backInLeft">HOME DECOR</h1>
             <p class="animate__animated animate__backInLeft">Best home features for your home</p>
             <div class="socialcontainer animate__animated animate__backInLeft">
                <a href="https://www.facebook.com/decophy/"rel="noreferrer" target="_blank" class="animate__animated animate__backInLeft social  facebook" > <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://www.instagram.com/decophy_/"rel="noreferrer" target="_blank" class="animate__animated animate__backInLeft social insta" > <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://www.pinterest.com/decophy_/"rel="noreferrer" target="_blank" class="animate__animated animate__backInLeft social pinterest" > <FontAwesomeIcon icon={faPinterest} size="2x" /></a>
             </div>
           <div className="hero-btns animate__animated animate__backInLeft">
               <Button 
               className='btns' 
               buttonStyle='btn--primary' 
               buttonSize='btn--large'
               onClick={() => window.open("https://m.me/decophy", "_blank")}
               >
                   TALK WITH US <i class="fab fa-facebook-messenger " style={{fontSize: "24px"}}></i>
                </Button>

                <Button 
               className='btns btn-mobile' 
               buttonStyle='btn--primary' 
               buttonSize='btn--large'
               onClick={() => window.open("http://pixelfy.me/5pS4vM", "_blank")}
               >
                   BUY ON  <i class="fab fa-amazon" style={{fontSize: "24px"}}></i> <i class="fas fa-shopping-cart" style={{fontSize: "24px"}}></i>
                </Button>
           </div> 
         </div>
     )
 }
 
 export default HeroSection
 