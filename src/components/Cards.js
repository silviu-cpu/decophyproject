import React , { useEffect }  from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import poza1 from '../images/poza1.jpg'
import poza2 from '../images/poza2.jpg'
import poza3 from '../images/poza3.jpg'
import poza4 from '../images/poza4.jpg'
import poza5 from '../images/poza5.jpg'
import poza6 from '../images/poza6.jpg'
import poza7 from '../images/poza7.jpg'
import poza8 from '../images/poza8.jpg'
import poza9 from '../images/poza9.jpg'
import poza10 from '../images/poza10.jpg'
//import poza11 from '../images/poza11.jpg'

function Cards() {
    useEffect(() => {
        
        Aos.init({duration: 3000})
            
        
    }, [])

    return (
        
        <div className="cards">
            <div data-aos="fade-right" className='product-text'>
                <h1> Decorative Dog Door Stopper </h1>
                <br></br>
                <br></br>
            </div>
            <div className="cards__container" id="jobs">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza1}
                        />
                        <CardItem 
                        src= {poza2}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza3}
                        />
                        <CardItem 
                        src= {poza4}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza5}
                        />
                        <CardItem 
                        src= {poza6}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza7}
                        />
                        <CardItem 
                        src= {poza8}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {poza9}
                        />
                        <CardItem 
                        src= {poza10}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards