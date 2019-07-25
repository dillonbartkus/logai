import React from 'react'

export default function Order({ order, showOrder }) {    

    return (

        <div className = "customerorder">

            <div className="customerorderbox-top">

                <h4>Purchase Order # {order.id}</h4>

                {
                    order.actual_date && order.actual_time &&

                    <h4>Delivery Date &amp; Time: {order.actual_date} {order.actual_time} </h4>
                }

            </div>

            <div className = "customerorderbox-bottom">

                <div>
                <span>Grand Total:</span> $1605.00

                {
                    !order.truck_driver && !order.trucking_company && !order.actual_date && !order.actual_time &&
                    <p style = {{'fontStyle' : 'italic'}}>Final shipping &amp; delivery details pending</p>
                }
                
                {
                    !order.customer_confirmed_transport && order.truck_driver && order.trucking_company && order.actual_date && order.actual_time &&
                    <p style = {{'fontStyle' : 'italic'}}>Shipping &amp; delivery details finalized!</p>
                }

                </div>

                {
                    !order.customer_confirmed_transport && order.truck_driver && order.trucking_company && order.actual_date && order.actual_time &&

                    <button className = "transportbutton"
                    onClick = { () => showOrder(order) }
                    >Confirm details now</button>
                }

                {
                    !order.truck_driver && !order.trucking_company && !order.actual_date && !order.actual_time &&

                    <button className = "addtocart"
                    onClick = { () => showOrder(order) }
                    >View / Track order</button>
                }

                {
                    order.customer_confirmed_transport &&

                    <button className = "addtocart"
                    onClick = { () => showOrder(order) }
                    >View / Track order</button>
                }

            </div>

        </div>

    )
}