import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const ProductsSection = () => {
    const [product, setProduct] = useState([])
    async function getProducts() {
        const data = await fetch("http://localhost:5000/tags")
        const res = await data.json()
        console.log(res)
        setProduct(res)
    }
    useEffect(() => {
        getProducts()
    }, [])
    console.log(product);
    return (
        <>
            <section id='Products'>
                <div className="ProductArea">
                    {product && product.map((item) => (
                        <div className="CardProduct">
                            <Card key={item._id} id={item._id} image={item.image} text={item.text} title={item.title} product={item} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductsSection
