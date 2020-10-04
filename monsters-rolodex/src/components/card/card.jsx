import React from 'react'

import './card.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set5`}></img>
        <h1> {props.monster.name} </h1>
        <p>{props.monster.email}</p>
    </div>
)