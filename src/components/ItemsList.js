import React from 'react'
import "../ItemLists.css"

export default function ItemsList(props) {
    return (
        <div>
            <div>
                <img className="item-image" src={props.img}/>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

