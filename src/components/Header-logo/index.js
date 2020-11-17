import React from 'react'
import imglogo from '../../assets/header-logo.png'
import './styles.css'
import watsappLogo from '../../assets/wpp.png'

export default function Header(){

    return(
        <div className='header-container'>
            <img id='img-logo' src={imglogo}></img>
        </div>
    )
}