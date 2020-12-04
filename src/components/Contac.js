import React, { useEffect } from 'react'
import './Contac.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import emailjs from 'emailjs-com'

function Contac() {
    useEffect(() => {
        
        Aos.init({duration: 3000})
            
        
    }, [])
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ied0kgy', e.target, 'user_EelcXR1O2dtBCcKFTmS2V')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      }

    
    /*adrianconstantin@decophy.com*/
    
    return (
        <div className='contact-container' id='contact'>
            <div data-aos="fade-right" className='contact-text'>
                <h1>Let's talk bussines</h1>
            </div> 
            <div data-aos="fade-right" className="form">
                <form onSubmit={sendEmail} className="form-container">
                
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