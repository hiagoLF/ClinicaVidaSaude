import React from 'react'
import './styles.css'
import {FaHandHoldingHeart} from 'react-icons/fa'

export default function Footer(){
    return (
        <div id='footer-container'>
            <h3 id='head'>
                <p>Feito com <FaHandHoldingHeart /> por</p>
                &nbsp;
                <strong>Hiago FullStack Programmer</strong>
            </h3>
            <div className='contact'>
                <h3 id='insta'>
                    Instagram: <a target='_blank' href='https://www.instagram.com/hiagoleaof/'>@hiagoleaof</a>
                </h3>
                <h3 id='git'>
                    GitHub: <a target='_blank' href='https://github.com/hiagoLF'>hiagoLF</a>
                </h3>
            </div>
        </div>
    )
}