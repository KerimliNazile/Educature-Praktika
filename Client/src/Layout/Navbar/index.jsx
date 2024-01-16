import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import './index.scss'
const Navbar = () => {
  return (
    <>
      <div className="NavbarArea">
        <div className="ImgNavbar">
            <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
        </div>
        <div className="MainNav">
            <ul className='NavUl'>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                <li>About</li>
                <li>Courses</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><NavLink to={"/add"}>Add Page</NavLink></li>
                <li><NavLink to={"/wishlist"}><FaHeart /></NavLink></li>
                <li><NavLink to={"/basket"}><FaBasketShopping /></NavLink></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
