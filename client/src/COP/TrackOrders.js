import React from 'react'
import Order from './Order'

export default function TrackOrders({ orders, showOrder }) {

    return(

        <div className="trackorders">

            <h1 className = "bigheader">Track Orders</h1>

            <div className = "trackordersbox">
        
            {
                orders &&
                orders.filter( order => order.status === 'incoming' || order.status === 'active')
                .map( order => <Order
                showOrder = {showOrder}
                order = {order}
                key = {order.id} /> )

            }

            </div>

        </div>

    )
}