import React from 'react'
import Order from './Order'

export default function TrackOrders({ orders, showOrder }) {

    return(

        <div className="trackorders">

            <h1 className = "bigheader">Track Orders</h1>

            <div className = "trackordersbox">

                {
                    orders.length < 1 &&
                    <h2 style = {{'margin' : 'auto'}}>No orders to show!</h2>
                }
        
                {
                    orders &&
                    orders.filter( order => order.status !== 'receiving' && order.status !== 'received' && order.status !== 'put away')
                    .map( order => <Order
                    showOrder = {showOrder}
                    order = {order}
                    key = {order.id} /> )

                }

            </div>

        </div>

    )
}