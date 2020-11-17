import React from 'react'
import imgTemp from '../../assets/foto.jpg'

import './styles.css'

import api from '../../services/api.json'
import { useHistory, Link } from 'react-router-dom'

export default function DoctorToday(props){
    const {Spetialties, Doctors} = api
    const {doctorID} = props

    var imgLink

    try{
        imgLink = require(`../../assets/doctors/${Doctors[doctorID][4]}`)
    }catch(err){
        imgLink = imgTemp
    }

    return (
        <Link className='link' to={`/doctor/${doctorID}`}>
        <div id='today-doctor-field'>
            <img src={imgLink} alt='Especialista' id='doctor-image'></img>
            <h3 id='doctor-name'>{Doctors[doctorID][0]}</h3>
            <div id='doctor-spetialties'>
                {Doctors[doctorID][1].map(item => (
                    
                    <Link to={`/spetialtie/${item}`} id='espetialtie-item'>
                        <img id='spetialtie-icon' src={require(`../../assets/spetialties/${Spetialties[item][1]}`)}></img>
                        <span id='spetialtie-text'>{Spetialties[item][0]}</span>
                    </Link>
                    
                ))}
            </div>
            <footer id='organ-text'>{Doctors[doctorID][2]}</footer>
        </div>
        </Link>
    )
}