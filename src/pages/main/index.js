import React from 'react'
import Header from '../../components/Header-logo'
import './styles.css'
import Specialties from '../../components/Espetials-box'
import TodayBox from '../../components/AttendingToday-box'
import Calendar from '../../components/Calendar'
import Contact from '../../components/Contact'
import Adress from '../../components/Adress'

export default function Main(){
    return (
        <div className='main-box'>
            <Specialties />
            <TodayBox />
            <Calendar />
            <Contact />
            <Adress />
        </div>
    )
}