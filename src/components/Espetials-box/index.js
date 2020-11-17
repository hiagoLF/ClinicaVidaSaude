import React from 'react'
import backgroundPaper from '../../assets/spetials-background.jpg'
import './styles.css'
import ItemEspetialtie from '../Espetials-item'

const SpecialtiesApi = require('../../services/api.json').Spetialties

export default function Specialties(){
    return (
        <div id='espetials-box'>
            <img id='espetials-background' src={backgroundPaper}></img>
            <h2 id='top-text-espetials'>Nossas especialidades</h2>
            <div id='spetialties-items'>
                {SpecialtiesApi.map((item, index) => (
                    <ItemEspetialtie text={item[0]} imgName={item[1]} itemId={index}/>
                ))}
            </div>
        </div>

    )
}