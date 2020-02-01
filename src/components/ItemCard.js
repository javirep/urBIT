import React from 'react'

export default function ItemCard(props) {
    return (
        <div className="item-card-div">
            <img className="item-image" src={props.img}/>
            <h3>{props.text}</h3>
        </div>
    )
}
