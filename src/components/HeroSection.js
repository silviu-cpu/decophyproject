 import React from 'react'
 import '../App.css'
 import { Button } from './Button'
 import './HeroSection.css'


 function HeroSection() {
     return (
         
         <div className='hero-container' id='hero'>
             <h1 class="animate__animated animate__backInLeft">HOME DECOR</h1>
             <p class="animate__animated animate__backInLeft">Best home features for your home</p>
           <div className="hero-btns animate__animated animate__backInLeft">
               <Button 
               className='btns' 
               buttonStyle='btn--primary' 
               buttonSize='btn--large'>
                   TALK WITH US <i class="fab fa-facebook-messenger " style={{fontSize: "24px"}}></i>
                </Button>

                <Button 
               className='btns' 
               buttonStyle='btn--primary' 
               buttonSize='btn--large'>
                   BUY ON  <i class="fab fa-amazon" style={{fontSize: "24px"}}></i> <i class="fas fa-shopping-cart" style={{fontSize: "24px"}}></i>
                </Button>
           </div> 
         </div>
     )
 }
 
 export default HeroSection
 