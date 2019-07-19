import React from 'react'
import IncomingOrder from './IncomingOrder'

export default function Incoming({ showTransportInfo, showOrderDetails, orders }) {    

    return(

        <div className = "incomingorders">

            {
                orders &&
                orders.map( order => <IncomingOrder
                showOrderDetails = {showOrderDetails}
                showTransportInfo = {showTransportInfo}
                order = {order}
                key = {order.id} /> )

            }

        </div>
        
    )
}