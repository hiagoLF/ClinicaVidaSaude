import React from "react"
import api from '../../../services/api.json'
import imgTemp from '../../../assets/foto.jpg'
import './styles.css'
import { useHistory } from "react-router-dom"

export default function LineCalendar(props){

    const {dayId} = props

    //Escala do dia
    const todaySchedule = api.Schedule[dayId]
    const dayOfWeek = api.Days[dayId]
    const {Doctors, Spetialties} = api

    const history = useHistory()

    var imgUrl

    return (
    <div id='line-calendar'>
        <h3 id='line-title'>{dayOfWeek}</h3>
        {todaySchedule.length === 0 ? (
            (<h3>Fechado</h3>)
        ) : (
            <div id='line'>
            {todaySchedule.map((item, index) => (
                <div id='item' onClick={() => history.push(`./doctor/${item}`)}>
                    <img id='item-img' src={require(`../../../assets/doctors/${Doctors[item][4]}`)} alt={Doctors[item][0]}></img>
                    <p id='item-name'>{Doctors[item][0]}</p>
                    <div id='spetialties'>
                        {Doctors[item][1].map((item) => (
                            <img id='image-spetialtie' src={require(`../../../assets/spetialties/${Spetialties[item][1]}`)} alt='sp'></img>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        )}

    </div>
    )
}