import React from 'react'
import ProductsSection from '../../Components/HomeComp/Products'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomeComp/Header'
import Faculty from '../../Components/HomeComp/FacultySection'
import Slider from '../../Components/HomeComp/Slider'
import Blue from '../../Components/HomeComp/BlueSction'

const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Home </title>
            </Helmet>
            <Header />

            <ProductsSection />
            <Faculty />
            <Slider />
            <Blue/>
        </div>
    )
}

export default Home
