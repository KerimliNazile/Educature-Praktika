import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoBasketSharp } from "react-icons/io5";
import './index.scss'
import { useContext } from 'react';
import { WishlistContext } from '../../../context/WishlistContext';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../context/BasketContext';

const Card = ({ image, text, title, product,id }) => {
    const { addWish } = useContext(WishlistContext)
    const{addBasket}=useContext(BasketContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardMain">
                    <i className={image}></i>
                </div>
                <div className="CardText">
                    <h1>{text}</h1>
                    <p>{title}</p>

                </div>
                <div className="CardIcon">
                    <div onClick={() => addWish(product)}><FaHeart /></div>
                    <div><Link to={`/${id}`}><FaEye /></Link></div>
                   <div onClick={()=>addBasket(product)}> <IoBasketSharp /></div>
                </div>
            </div>
        </>
    )
}

export default Card
