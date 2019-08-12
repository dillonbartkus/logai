import React from 'react'
import balloons from '../images/balloons.png'

export default function ReplenishOrderConfirm({ item }) {

    return(

        <div className = "replenishconfirm">

            <img src = {balloons} alt = 'balloons' />

            <div>
                <h1>Great job!</h1>
                <h2>Your replenishment order has been emailed to the supplier: {item.supplier}.</h2>
            </div>

            <button className = "addtocart">View/Track replenishment</button>

        </div>
    )
}