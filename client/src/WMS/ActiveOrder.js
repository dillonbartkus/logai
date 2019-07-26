import React from 'react'

export default function ActiveOrder({ order, showOrderDetails }){

    console.log(order)


    return(

        <div className = "incomingorder">

            <div className="incomingorderbox-top">

                <h2>Order# {order.id}</h2>

                <div>

                    <h2>Client:</h2> <h2 style = {{'fontWeight' : 400, 'marginLeft' : '2%'}}>{order.company}</h2>

                </div>


            </div>

            <div className = "incomingorderbox-bottom">

                <h2>Delivery: {JSON.parse(order.preferred_dates).first}</h2>

                <h2 className = "link"
                onClick = { () => showOrderDetails(order) }
                >(View details)</h2>

            </div>

            
        </div>


    )
}