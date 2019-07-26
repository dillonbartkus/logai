import React, { useState, useEffect } from 'react'
import balloons from '../images/balloons.png'
import MessageBox from './MessageBox'
import axios from 'axios'

export default function OrderDetails({ setActiveNavItem, orderId, fetch }) {

    const [order, setOrder] = useState()

    useEffect( () => {
        fetchOrder()
    }, [])    

    const fetchOrder = async () => {
        const res = await axios.post(`/getcustomerorder/${orderId}`)
        setOrder(res.data.data[0])
    }

    const confirmOrder = async () => {
        await axios.put(`/confirmcustomermorder/${orderId}`)
        fetchOrder()
        fetch()
    }

    const hasTransportInfo = (order && order.truck_driver && order.trucking_company && order.actual_date && order.actual_time) ? true : false
    const confirmedByCustomer = (order && order.customer_confirmed_transport) ? true : false
    const grandTotal = (order && parseFloat(order.subtotal) + parseFloat(order.tax) + parseFloat(order.shipping))
    
    return(

        <>
        { order &&

        <div className = "orderdetails">

            <div className = "backtoorder"
            onClick = { () => setActiveNavItem('track')} >
                <img src = 'http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png' alt = 'a' style = {{'height' : '50px'}}/>
                <span>Back to Track Orders</span>
            </div>

            <div className="ordertitle">
                <h1 className="bigheader">Purchase Order #{orderId}</h1>
                <h2>Placed {order.date_placed}</h2>
            </div>

            <div className={`orderconfirmationbox ${hasTransportInfo}`}>

            {
                !hasTransportInfo &&
                <>
                <h2 style = {{'height' : '33%', 'marginTop' : '3%'}}>Final shipping &amp; delivery cost will be confirmed within 24 hours.</h2>
                <h4 style = {{'height' : '33%'}}>You have not yet been charged for this purchase.</h4>
                </>
            }

            {
                hasTransportInfo && !confirmedByCustomer &&
                <>
                <div>
                    <h3 className = "smallheader">Shipping &amp; delivery finalized!</h3>
                    <h2>Delivery Date &amp; Time: {order.actual_date} {order.actual_time}</h2>
                    <h2>Shipping and Delivery Cost: $300.00 </h2>
                    <p style = {{'fontSize': '18px'}}>Please confirm to complete your purchase order. (Your card will be charged.)</p>
                </div>
                <button
                onClick = { () => confirmOrder() }
                className = "addtocart">Confirm purchase order</button>
                </>
            }

            {
                confirmedByCustomer &&

                <div className = "ordercomplete">

                    <img src = {balloons} alt = ''></img>
                    <div>
                        <h2 className="smallheader" style = {{'color' : '#000', 'fontWeight' : 900}}>Your purchase order is confirmed!</h2>
                        <p>Purchase Order # {order.id}</p>
                        <p>Delivery Date &amp; Time: 6/30/19 5:00 PM </p>
                        <p>Shipping &amp; Delivery Cost: $300.00 </p>
                    </div>

                </div>
            }

        </div>

        <div className="orderinformation">
            <div>
                <h2 className="smallheader">Shipping Address</h2>
                <p>{ JSON.parse(order.delivery_address).name }</p>
                <p>{ JSON.parse(order.delivery_address).streetnamenumber}</p>
                <p>{ JSON.parse(order.delivery_address).city} {JSON.parse(order.delivery_address).state} {JSON.parse(order.delivery_address).zip} </p>
            </div>

            <div className = "orderinfosummary">
                <h2 className="smallheader" style = {{'width' : '100%'}}>Order Summary</h2>
                <p>Subtotal</p>
                <p>${order.subtotal}</p>
                <p>Tax</p>
                <p>${order.tax}</p>
                <p>Shipping &amp; Delivery</p>
                <p>${order.shipping}</p>
                <p style = {{'fontWeight' : 900}}>Grand Total</p>
                <p style = {{'fontWeight' : 900}}>${ grandTotal }</p>
            </div>

            {
                order.actual_date && order.actual_time &&

                <div className = "orderdeliverydate">
                    <h2 className="smallheader">Delivery Date &amp; Time</h2>
                    <p>{order.actual_date}</p>  <p>{order.actual_time}</p>
                </div>
            }

            {
                !order.actual_date && !order.actual_time &&

                <div className = "orderdeliverydate">
                    <h2 className="smallheader">Delivery Date &amp; Time Preferences:</h2>
                    <div style = {{'width': '100%'}}>
                        <p>#1. {JSON.parse(order.preferred_dates).first}:</p> {JSON.parse(order.preferred_times).first.map( time => <p key = {time}>{time}</p> )}
                    </div>
                    <div style = {{'width': '100%'}}>
                        <p>#2. {JSON.parse(order.preferred_dates).second}:</p>  {JSON.parse(order.preferred_times).second.map( time => <p key = {time}>{time}</p> )}
                    </div>
                    <div style = {{'width': '100%'}}>
                        <p>#3. {JSON.parse(order.preferred_dates).third}:</p>  {JSON.parse(order.preferred_times).third.map( time => <p key = {time}>{time}</p> )}
                    </div>
                </div>
            }
            
        </div>

        {
            !hasTransportInfo &&

            <MessageBox order = {order} />
        }

        </div>

        }
        </>
    )
}