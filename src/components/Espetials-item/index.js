import React from 'react'
import './styles.css'
import {useHistory} from 'react-router-dom'


export default function ItemEspetialtie(props){
    
    const history = useHistory([])

    var imgIcon = ''
    try{
        imgIcon = require(`../../assets/spetialties/${props.imgName}`)
    }catch{
        imgIcon = require('../../assets/icon-preview.png')
    }
    return (
        <div
            id='item-espetial-box'
            onClick={() => (history.push(`/spetialtie/${props.itemId}`)) }
        >
            <img id='item-image' src={imgIcon}></img>
            <h3 id='item-text'>{props.text}</h3>
        </div>
    )
}