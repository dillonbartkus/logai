import React from 'react'

export default function IncomingOrder({ order, showOrderDetails, showTransportInfo }) {

    return (

        <div className = "incomingorder">

            <div className="incomingorderbox-top">

                <h2>Order# {order.id}</h2>

                <h2>Client: {order.company}</h2>

            </div>

            <div className = "incomingorderbox-bottom">

                <h2>Delivery: {JSON.parse(order.preferred_dates).first}</h2>

                <button
                onClick = { () => showTransportInfo(order, order.company) }
                className = "transportbutton">Add transportation information</button>

                <h2
                onClick = { () => showOrderDetails(order, order.company) }
                className = "link">(View details)</h2>

            </div>

        </div>

    )
}