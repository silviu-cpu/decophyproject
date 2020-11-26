import React from 'react'
import '../../App.css'
import Contac from '../Contac'
import HeroSection from '../HeroSection'
import Ourstory from '../Ourstory'
//import Footer from '../Footer'
import Cards from '../Cards'
import Stats from '../stats'
import Footer from '../Footer'


function Home() {
    return (
         <> 

        
         <HeroSection />
         <Stats />
         <Cards />
         <Ourstory />
         <Contac />
         <Footer/>
         
         </>

    )
}

export default Home