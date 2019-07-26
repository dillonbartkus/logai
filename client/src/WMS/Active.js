import React from 'react'
import ActiveOrder from './ActiveOrder'

export default function Active({ orders, showOrderDetails }) {

    return(

        <div className = "active">

        {
            // orders &&
            orders.map( order => <ActiveOrder
            order = {order}
            showOrderDetails = {showOrderDetails}
            key = {order.id} /> )

        }

        </div>
        
    )
}