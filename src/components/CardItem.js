import React from 'react'
import { Link } from 'react-router-dom'
function CardItem(props) {
    return (
        <>
            <li className="cards__items product-container" id="product">
                <Link className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                        <img src={props.src} alt="Papion" className="cards__item__img"/>
                    </figure>
                </Link>
            </li>
            
        </>
    )
}

export default CardItem
