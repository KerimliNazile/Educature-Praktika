import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {

    const { wish, deleteWish } = useContext(WishlistContext)
    return (
        <>
            <h1>Wishlist</h1>
            {wish && wish.map(x =>
                <ul>
                    <li><i className={x.image}></i></li>
                    <li>{x.text}</li>
                    <li>{x.title}</li>
                    <li><button onClick={()=> deleteWish(x)}>Delete</button></li>
                </ul>
            )}
        </>
    )
}

export default Wishlist
