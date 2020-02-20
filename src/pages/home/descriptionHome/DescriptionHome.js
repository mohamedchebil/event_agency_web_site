import React from 'react'
import './descriptionHome.css'
import tba from '../../../assets/gallery/home/tba.jpg'


const DescriptionHome = () => {
    return (
        <div className='description-container'> 
            <div className='description-text'>
                Depuis 2006, Kim Events, une agence événementielle avant-gardiste Tunisienne, a développée une réputation auprès des entreprises, forte de ses nombreuses années d’expérience a su se démarquer par la qualité de ses prestations.
                Plus qu’une simple boite événementielle, Kim Events est une source d’idées originales et de prestations de qualité, où notre amour et admiration des nouvelles technologies se manifeste à des actions captivantes et des expériences marquantes et à forte résonance. 
            </div>
            <div className='description-photo-container'>
                <img className='description-photo' src={tba} alt='event tba'/>
            </div>
        </div>
    );
}

export default DescriptionHome