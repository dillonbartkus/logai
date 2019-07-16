import React from 'react'
import balloons from '../images/balloons.png'

export default function WarehouseOrderConfirmation() {

    return(

        <div className = "orderplaced">
                    
        <img src = {balloons} alt = ''></img>
    
        <div>
            <h2 className="orderheader">Order confirmed!</h2>
            <p>Transportation information has been sent to Maria Diaz.</p>
            <p>Order #15296 will now appear under Active Orders. </p>
        </div>
    
        <button 
        onClick = { () => {
            // setActiveNavItem('track')
        }}
        className="addtocart">View active orders</button>
    
        </div>

    )

}