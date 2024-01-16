import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
    const [detail, setDeatil] = useState()
    const { id } = useParams()
    const fetchDeatils = async () => {
        const resp = await axios(`http://localhost:5000/tags/${id}`)
        setDeatil(resp.data)
        
    }
    useEffect(() => {
        fetchDeatils()
    }, [])
    return (
        <>
            <div className="DetailArea">
                {detail ? <>
                    <div className="DeatilCard">
                        <i className={detail.image}></i>
                        <h1>{detail.text}</h1>
                        <p>{detail.title}</p>
                    </div>
                </> : ''}
            </div>

        </>
    )
}

export default Detail
