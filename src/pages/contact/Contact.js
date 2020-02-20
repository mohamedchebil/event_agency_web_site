import React from 'react'
import './contact.css'
import Maps from './maps'

const Contact = () =>{
    return (
        <div className='contact-container'>
            <div>
                <Maps/>
            </div>
            <div>
                <form className='from-container'>
                    Nom :<input type='text' placeholder='nom'/><br/>
                    Prénom :<input type='text' placeholder='prenom'/><br/>
                    Numero de télephone :<input type='text' placeholder='Num tel'/><br/>
                    Adresse :<input type='text' placeholder='Adresse'/><br/>
                    Type d'évenement :<input type='text' placeholder='type event'/><br/>
                    <input className='form-button' type='button' value='Envoyer'/>
                </form>
            </div>
        </div>
    );
}

export default Contact