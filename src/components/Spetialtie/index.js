import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import backgroundPaper from '../../assets/spetials-background.jpg'
import './styles.css'
import api from '../../services/api.json'
import DoctorToday from '../AttendingToday-item'
import {ImArrowLeft} from 'react-icons/im'
import {AiFillHome} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

export default function Spetialtie(props){
    const {id} = useParams()

    const [name, file] = api.Spetialties[id]
    const [infoText, font, urlLink] = api.SpetialtiesDescription[id]
    const [spetialistsId, setSpetialistsId ]= useState([])

    const history = useHistory()

    useEffect(() => {
        var spetialistsId = []
        const doctors = api.Doctors
        var spetialistsId = []
        for(var i=0; i<doctors.length; i++){
            for(const doctorSpetialtie of doctors[i][1]){
                if(doctorSpetialtie == id){
                    spetialistsId.push(i)
                }
            }
        }
        setSpetialistsId(spetialistsId)
    },[])

    return (
        <div id='spetialtie'>
            <div className='link-box'>
                <Link onClick={() => history.goBack()}
                    className='back-link'
                    size='2em'
                >
                    <ImArrowLeft />
                </Link>
                <div id='space-box'></div>
            </div>
            
            <img id='espetials-background' src={backgroundPaper}></img>
            <div id='spetialtie-content'>
                <div id='spetialtie-info'>
                    <h2>{name}</h2>
                    <img
                        id='spetialtie-img'
                        src={require(`../../assets/spetialties/${file}`)}
                    ></img>
                    <p id='spetialtie-text'>{infoText}</p>
                    <span>Fonte: <a target='_blank' href={urlLink}>{font}</a></span>
                </div>
                <div id='spetialties-doctors'>
                    {spetialistsId.map(item => (
                        <DoctorToday doctorID={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}