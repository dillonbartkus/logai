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

                {
                    order.status === 'active' &&
                    <>
                    <h1>Pick</h1>
                    <h1 style = {{'fontWeight' : 500, 'width' : '100%'}}>Customer Purchase Order #{order.id}</h1>
                    <h2 style = {{'width' : '100%'}}>Transportation: <span style = {{'fontWeight' : 500}}>{order.trucking_company}</span> </h2>
                    <h2 style = {{'width' : '48%'}}>Pickup Date: <span style = {{'fontWeight' : 500}}>{order.date_placed}</span> </h2>
                    <h2 style = {{'width' : '48%'}}>Delivery Date: <span style = {{'fontWeight' : 500}}>{order.actual_date}</span> </h2>
                    </>
                }

                {
                    order.status !== 'active' &&
                    <>
                    <h1>{order.status === 'receiving' ? 'Receive' : 'Put Away'}</h1>
                    <h1 style = {{'fontWeight' : 500, 'width' : '100%'}}>Incoming Shipment Purchase Order #{order.id}</h1>
                    <h2 style = {{'width' : '100%'}}>Supplier: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>{order.supplier}</span> </h2>
                    <h2 style = {{'width' : '100%'}}>Date Delivered: <span style = {{'fontWeight' : 500, 'marginTop' : 0}}>{order.actual_date}</span> </h2>
                    </>
                }
                
            </div>

        </div>

    )
}