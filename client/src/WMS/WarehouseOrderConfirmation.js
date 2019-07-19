import React from 'react'
import balloons from '../images/balloons.png'

export default function WarehouseOrderConfirmation({ setActiveTab, setOrderPlaced, order }) {

    return(

        <div className = "orderplaced">
    
        <img src = {balloons} alt = ''></img>
    
        <div>
            <h2 className="orderheader">Order confirmed!</h2>
            <p>Transportation information has been sent to {order.company}.</p>
            <p>Order # {order.id} will now appear under Active Orders. </p>
        </div>
    
        <button 
        onClick = { () => {
            setActiveTab('active')
            setOrderPlaced(false)
        }}
        className="addtocart">View active orders</button>
    
        </div>

    )

}