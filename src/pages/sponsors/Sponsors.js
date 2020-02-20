import React from 'react'
import './sponsors.css'
import sponsors from '../../assets/gallery/sponsors/sponsors.jpg'

const Sponsors = () =>{
    return (
        <img className='sponsors-image' src={sponsors} alt='nos partenairs'/>
    )
}

export default Sponsors