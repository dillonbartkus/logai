import React from 'react'

export default function TodayJob({ order, number, showOrder }) {

    const text = (order.status === 'active') ? 'Receive' : 'Put Away'

    return(

        <div
        onClick = { () => showOrder(order, number ) }
        className = "todayjob">

            <div className = "jobnumber">{number}</div>

            <div className = "jobdetails">

                {
                    order.employee === 'steve' &&
                    <div className = "assignedtome">Assigned to you</div>
                }

                <h1>{text}</h1>
                <h1 style = {{'fontWeight' : 500}}>Incoming Shipment Purchase Order #{order.id}</h1>
                <h2>Supplier: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>Beer Supplier</span> </h2>
                <h2>Date Delivered: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>{order.date_placed}</span> </h2>
                
            </div>

        </div>

    )
}