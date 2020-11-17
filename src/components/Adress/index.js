import React from 'react'
import './styles.css'
import facade from '../../assets/fachada.jpg'

export default function Adress(){
    return (
        <div id='adress-page'>
            <div className='today-background'></div>
            <h3 id='top-text'>Estamos perto de você</h3>
            <div id='content'>
                <img
                    src={facade}
                    id='picture'>
                </img>
                <div id='map'>
                <iframe
                    id='map-box'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.6658411115982!2d-39.275865165081626!3d-14.791877454836722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa5ef3245a69%3A0xd13764bafbcd7a96!2sCl%C3%ADnica%20Medica%20Vida!5e0!3m2!1spt-BR!2sbr!4v1603392321756!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{border:0}} 
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
                </iframe>
                </div>
            </div>
        </div>
    )
}