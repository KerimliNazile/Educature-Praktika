import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import './index.scss'
const Blue = () => {
    return (
        <>
            <section id='Blue'>
                <div className="BlueArea">
                    <div className="TextBlue">
                        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                    <div className="BlueIcon">
                        <FaTwitter />
                        <FaInstagram />
                        
                        <FaBehance />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blue
