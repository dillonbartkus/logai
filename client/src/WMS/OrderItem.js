import React from 'react'

export default function OrderItem({ item }) {

    return(

        <div className = "orderitem">
            <div className = "imgandname">
                <img src = {item.picture} alt = {item.name}/>
                <p>{item.name}</p>
                </div>
            <div>${item.price}</div>
            <div>{item.item_quantity}</div>
            <div>{item.on_hand}</div>
            <div>{item.weight}</div>
        </div>
    )
}