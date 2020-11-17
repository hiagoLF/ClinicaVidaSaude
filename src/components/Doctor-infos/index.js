import React from 'react'
import './styles.css'
import api from '../../services/api.json'
import imgTemp from '../../assets/foto.jpg'
import ItemEspetialtie from '../Espetials-item'
import {ImArrowLeft} from 'react-icons/im'
import { useHistory, useParams } from 'react-router-dom'

export default function DoctorInfo(){

    const {id} = useParams()
    console.log(api.Doctors[id])
    const [name, spetialties, council, curriculum, imageFile] = api.Doctors[id]
    const {Spetialties} = api
    const history = useHistory()

    return (
        <div id='doctor-info-box'>
            <div className='background'></div>
            <div id='back-button' onClick={() => history.goBack()}>
                <ImArrowLeft className='back-link'/>
            </div>
            <div id='doctor-info-main'>
                <img
                    id='image'
                    src={require(`../../assets/doctors/${imageFile}`)}
                    alt={name}
                ></img>
                <div id='presenting'>
                    <h1 id='name'>{name}</h1>
                    <p id='curriculum'>{curriculum}</p>
                    <div id='spetialties'>
                        {spetialties.map((item) => (
                            <ItemEspetialtie
                                imgName={Spetialties[item][1]}
                                text={Spetialties[item][0]}
                                itemId={item}
                            />
                            ))}
                    </div>
                </div>
            </div>
            <span id='council'>{council}</span>
        </div>
    )
}