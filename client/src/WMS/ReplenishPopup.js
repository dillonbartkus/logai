import React, { useState } from 'react'

export default function ReplenishPopup({ item, setPopup, request }) {

    const [newQuantity, setNewQuantity] = useState(item.on_hand)
    
    return(

        <div className = "replenishpopup">

            <div
            onClick = { () => setPopup(false) }
            className = "closepopup"></div>

            <h2>Replenish Order</h2>

            <h4>Product Type</h4>
            <span>{item.type}</span>
            <h4>Product Name</h4>
            <span>{item.name}</span>
            <h4>SKU #</h4>
            <span>{item.sku}</span>
            <h4>Quantity</h4>
            <span><input
            onChange = { e => setNewQuantity(e.target.value) }
            value = {newQuantity}></input>Units</span>
            <h4>Supplier Information</h4>
            <span>{item.supplier}</span>
            <h4>Supplier Email</h4>
            <span>admin@fortress.com</span>

            <button
            onClick = { () => {
                setPopup(false)
                request(item, newQuantity)
            }}
            className = "addtocart"
            style = {{'height' : '10%', 'width' : '50%', 'margin' : 'auto'}}
            >Email new order</button>

        </div>

    )
}