import React, { useEffect, useState } from 'react'
import './styles.css'
import api from '../../services/api.json'
import Carousel from 'react-elastic-carousel';
import DoctorInfo from '../Doctor-infos'

import DoctorToday from '../AttendingToday-item'

export default function TodayBox(){
    //Data Normal
    const day = new Date().getDay()

    //Data simulada
    /* const day = 5 */

    const todayDoctors = api.Schedule[day]
    const [typeScreen, setTypeScreen] = useState('')
    const [typeHeader, setTypeHeader] = useState('')
    const [typeDisplay, setTypeDisplay] = useState('')

    useEffect(() => {
        if(day === 0 || day === 6){
            setTypeScreen('nothing')
        }
        if(todayDoctors.length === 2){
            setTypeScreen('two')
        }
        if(todayDoctors.length === 1){
            setTypeScreen('one')
        }
        if(todayDoctors.length === 7){
            setTypeScreen('seven')
            setTypeHeader('small')
            setTypeDisplay('column')
        }
    }, [])
    
        return (
            <div className={`Today-main ${window.outerWidth <= 761 && typeScreen}`}>
                <div className={`today-header ${typeHeader}`} >
                    {day < 1 || day > 5 ? (
                        <h1>Não atendemos hoje</h1>
                    ): (
                        <h1>Atendendo hoje</h1>
                    )}
                    
                    <h2>{api.Days[day]}</h2>
                </div>
                <div className={`today-field ${typeDisplay}`}>
                    {todayDoctors.length <= 4 || window.outerWidth <= 761
                    ? ( todayDoctors.map((item) => (
                            <DoctorToday
                                doctorID={item}
                            />
                        )))
                    : ( <Carousel
                            itemsToShow={3}
                            showArrows={window.innerWidth <= 425 ? false : true}
                        >
                            {todayDoctors.map((item) => (
                                <DoctorToday
                                    doctorID={item}
                                />
                            ))}
                        </Carousel>
                        )
                    }
                    
                </div>
            </div>
        )

    
}