import React from 'react'
import './styles.css'
import wpp from '../../assets/wpp.png'
import insta from '../../assets/insta.png'
import { Link } from 'react-router-dom'

export default function Contact(){
    return (
        <div id='contact-page'>
            <div className='today-background'></div>
            <div id='header'>
                <h3>Entre em contato conosco</h3>
                <span>Ou marque sua consulta pelo WhatsApp</span>
            </div>
            <div id='contact-info'>
                <div id='watsapp' className='contact-item'>
                    <img src={wpp} alt='watsapp'></img>
                    <h3>(73) 99172-2127</h3>
                </div>
                
                <a
                    target='_blank'
                    href='https://www.instagram.com/vidasaudeclinica/?hl=pt-br'
                    id='instagram' className='contact-item'
                >
                    <h3>@vidasaudeclinica</h3>
                    <img id='img' src={insta}></img>
                </a>
                
            </div>
        </div>
    )
}