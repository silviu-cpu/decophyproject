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
            <h1  data-aos="fade-right" className='story-text'>Our Little "Tail" - The Decorative Door Stop Dog</h1>
            <p data-aos="fade-right" className='p-text'>One day I was bringing groceries into my home. Back and forth, back and forth. Getting super irritated, having to open the door EVERY TIME.  So, I started using a water bottle as a door prop. While it did the job, something was off. It was quite UGLY! 

All of a sudden my dog, Marley, came running in. Her little tail was wagging, SO excited to see me.  All dog-lovers know the feeling. 

It was then, that an idea hit me. My doggo is what makes my home feel warm & cozy. </p>
<p data-aos="fade-right" className='p-text'> Perhaps I could craft a cute door stopper that looks like her! 

But it wasn't that easy! 

The first one we made was rubber. This door stopper wedge was functional, by Marley thought it was a chew toy. She bit it too much, so we switched to cast iron. 

But this door wedge stop was too heavy duty and caused floor damage. So we had to make it a bit smaller and more compact. </p>

<p data-aos="fade-right" className='p-text'>The next version didn't damage floors or carpet. But this door weight was a bit too light and slipped around a lot. 

Finally we added rubber to the bottom of the door stop wedge. This was the winner! Marley didn't chew it, it wasn't too heavy, and it kept the door open!

Now, I can bring groceries inside with ease. And let fresh air flow through my home. But most importantly, Marley can roam around from room to room. She loves being able to get anywhere in the house, whenever she wants! 

</p>
<p data-aos="fade-right" className='p-text'>All of my guests give compliments about the dog statues. My kids play with them like toys. And I often give them as gifts! 

Our brown dog door stopper decorative will bring warm energy to your home too! </p>
            <div data-aos="fade-up" className='logo-container'></div>
        </div>
    )
}




export default Ourstory