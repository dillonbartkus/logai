import React, { useState, useEffect } from 'react'
import OrderItem from './OrderItem'
import back from '../images/back.png'
import axios from 'axios'

export default function OrderDetails({ setActiveNavItem, showTransportInfo, order }) {

    const [orderItems, setOrderItems] = useState()    

    useEffect( () => {
        fetchOrderItems()
    }, [] )

    const fetchOrderItems = async () => {
        let res = await axios.post(`/cart/1`)
        setOrderItems(res.data.data)
    }
    
    const isTransportInfo = () => {
        if (order.trucking_company && order.truck_driver && order.actual_date && order.actual_time) {
            return(
                <div className = "ordertransportinfo">

                <h2 className = "smallheader">Transportation Information</h2>

                <div>Trucking Company</div>
                <p>{order.trucking_company}</p>

                <div>Driver</div>
                <p>{order.truck_driver}</p>

                <div>Delivery Date</div>
                <p>{order.actual_date}</p>

                <div>Delivery Time</div>
                <p>{order.actual_time}</p>

                </div>
            )
        }
        else return(
            <>
            <h2 className = "smallheader">Preferred Delivery Date: {(JSON.parse(order.preferred_dates).first)} </h2>

            <h2 className = "smallheader">Preferred Delivery Times: {(JSON.parse(order.preferred_times).first)[0]}, {(JSON.parse(order.preferred_times).first)[1]} </h2>

            <button
            onClick = { () => showTransportInfo(order, order.company) }
            className = "transportbutton" style = {{'height' : '3.5%', 'width' : '33%'}}>Add transportation information</button>

            <h4>Note: The customer will be sent a notification once transportation information has been added.</h4>
            </>
        )
    }

    return(

        <div className = "orderdetails">

            <div className = "backtoorder">
            <img src = {back} alt = 'back'/>
            <span
            onClick = { () => setActiveNavItem('manager')}
            >Back to Order Manager Main</span>
            </div>

            <h2 className = "smallheader">Order # {order.id}</h2>

            <h2 className = "smallheader">Shipping Address</h2>

            <p>{JSON.parse(order.delivery_address).name}</p>
            <p>{JSON.parse(order.delivery_address).streetnamenumber}</p>
            <p>{JSON.parse(order.delivery_address).city}, {JSON.parse(order.delivery_address).state} {JSON.parse(order.delivery_address).zip}</p>
            
            <h2 className = "smallheader">Order Details</h2>

            <div className = "orderitemstitles">
                <div>Item</div>
                <div>Price per Case</div>
                <div>Quantity</div>
                <div>Quantity In-House</div>
                <div>Weight (Lbs)</div>
            </div>

            <div className = "orderitems">

                {
                orderItems &&
        
                orderItems.map( item => <OrderItem item = {item} key = {item.id} />)
                }

            </div>

            <div className = "orderpricinginfo">

                <div>Subtotal:</div>
                <p>$1200.00</p>
                <div>Tax:</div>
                <p>$105.00</p>
                <div>Estimated Shipping &amp; Delivery:</div>
                <p>$300.00</p>
                <span>Grand Total:</span>
                <span>$1605.00</span>
                <span>Total Weight: 270 Lbs</span>

            </div>

            {isTransportInfo()}

        </div>
    )
}