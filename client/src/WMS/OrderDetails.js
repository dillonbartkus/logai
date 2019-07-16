import React, { useState, useEffect } from 'react'
import OrderItem from './OrderItem'
import back from '../images/back.png'
import axios from 'axios'

export default function OrderDetails({ setActiveNavItem }) {

    const [orderItems, setOrderItems] = useState()

    useEffect( () => {
        fetchOrderItems()
    }, [] )

    const fetchOrderItems = async () => {
        let res = await axios.post(`/cart/1`)
        setOrderItems(res.data.data)
    }

    return(

        <div className = "orderdetails">

            <div className = "backtoorder">
            <img src = {back} alt = 'back'/>
            <span
            style = {{'fontFamily': "Raleway SemiBold", 'color': '#000000', 'fontSize': '22px', 'letterSpacing': '1.01px', 'lineHeight': '26px'}}
            onClick = { () => setActiveNavItem('manager')}
            >Back to Order Manager Main</span>
            </div>

            <h2 className = "smallheader">Order # 15296</h2>

            <h2 className = "smallheader">Shipping Address</h2>

            <p>Maria Diaz</p>
            <p>123 Street</p>
            <p>New York, NY 12345</p>

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

            <h2 className = "smallheader">Preferred Delivery Date: 6/30/19 </h2>

            <h2 className = "smallheader">Preferred Delivery Time: 5:00 PM </h2>

            <button className = "transportbutton">Add transportation information</button>

            <h4>Note: The customer will be sent a notification once transportation information has been added.</h4>

        </div>
    )
}