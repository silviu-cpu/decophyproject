import React, { useEffect } from 'react'
import './Contac.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function Contac() {
    useEffect(() => {
        
        Aos.init({duration: 3000})
            
        
    }, [])
    function sendEmail(e){

    }
    /*adrianconstantin@decophy.com*/
    
    return (
        <div className='contact-container' id='contact'>
            <div data-aos="fade-right" className='contact-text'>
                <h1>Let's talk bussines</h1>
                <hr className="lines"></hr>
            </div> 
            <div data-aos="fade-right" className="form">
                <form onSubmit={{sendEmail}} className="form-container">
                
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" className="form-control"  name="subject"/>
               
                    <label for="name">Name</label>
                    <input type="text" id="name" className="form-control"  name="name"/>
                
                
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"  name="email"/>
                
               
                    <label for="message">Message</label>
                    <textarea type="text" className="form-control" id="message" cols="20" rows="8"  name="message"></textarea>
                
                
                    <input class="h-shakeFix" type="submit" value="Send Message" id="sendBtn"></input>
                
                </form>
            </div>
        </div>
    )
}




export default Contac