import React from 'react'

export default function TodayJob({ order, number, showOrder }) {

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

                <h2>Receive</h2>
                <h2 style = {{'fontWeight' : 500}}>Incoming Shipment Purchase Order #{order.id}</h2>
                <h3>Supplier: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>Beer Supplier</span> </h3>
                <h3>Date Delivered: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>{order.date_placed}</span> </h3>
                
            </div>

        </div>

    )
}