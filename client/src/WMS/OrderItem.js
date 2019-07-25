import React from 'react'

export default function OrderItem({ item }) {

    return(

        <div className = "orderitem">
            <div className = "imgandname">
                <img src = {item.picture} alt = {item.name} style = {{'height': '5vh', 'width' : '3vw'}}/>
                <p>{item.name}</p>
                </div>
            <div>$20</div>
            <div>{item.item_quantity}</div>
            <div>{item.quantity}</div>
            <div>{item.weight}</div>
        </div>
    )
}