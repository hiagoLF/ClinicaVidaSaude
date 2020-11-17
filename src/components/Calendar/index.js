import React from 'react'
import './styles.css'
import api from '../../services/api.json'
import LineCalendar from './LineCalendar'

export default function Calendar(){

    const {Days} = api

    return (
        <div id='calendar-container'>
            <h1 id='header'>Agenda Semanal</h1>
            <div className='content'>
                {Days.map((item, index) => {
                    if(index === 0 || index === 6){
                        return (
                            null
                        )
                    }else{
                        return (
                            <LineCalendar dayId={index}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}