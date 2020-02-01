import React, { Component } from 'react'
import ItemCard from './ItemCard'

import "../ItemLists.css"

export default class ItemContainer extends Component {

    state = {
        moda: [
        {
            name: "Abrigo",
            img:"https://images-na.ssl-images-amazon.com/images/I/51iCidIJptL._UX679_.jpg"
        },
        {
            name: "Zapatos",
            img:"https://www.pilotscenter.com/1779-large_default/zapatos-para-piloto-oleg-antonov.jpg"
        },
        {
            name: "Sudadera", 
            img:"https://images-na.ssl-images-amazon.com/images/I/61EnHXjthsL._UX385_.jpg"
        }],
        joyeria: [
            {
                name: "Anillo",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33Xz7aOottLZwefMOa_Dw0FTN86Ypx8mMnzGmQwAWOtwXgnHt&s"
            },
            {
                name: "Pendientes",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNThRIW6zGKZBM4uoHVk6zmzSk7iR-3_G1VQs6OcSeiFJ0DP82dQ&s"
            },
            {
                name: "Collar", 
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwHnClK_ljUvmyZigu0AofB--qqnIXzbYY9dRkqqblgaqynG4&s"
            }],
    }


    render() {
        return (
            <div className="items-container-div">
                <h2>Moda de comercio justo</h2>
                <div className="items-container-sub-div">
                {
                    this.state.moda.map(item => {
                        return <ItemCard text={item.name} img={item.img}></ItemCard>
                    })
                }
                </div>
                <h2>Joyería de comercio justo</h2>
                <div className="items-container-sub-div">
                {
                    this.state.joyeria.map(item => {
                        return <ItemCard text={item.name} img={item.img}></ItemCard>
                    })
                }
                </div>
            </div>
        )
    }
}
