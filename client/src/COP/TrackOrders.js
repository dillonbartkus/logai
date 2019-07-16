import React, { useState } from 'react'
import balloons from '../images/balloons.png'

export default function TrackOrders() {

    const [confirmed, setConfirmed] = useState(false)
    const [complete, setComplete] = useState(false)

    setTimeout( () => setConfirmed(true), 3000 )

    return(

        <div className="trackorders">
        
        <div className = "backtoorder">
            <img src = 'http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png' alt = 'a' style = {{'height' : '50px'}}/>
            <span
            style = {{'fontFamily': "Raleway SemiBold", 'color': '#000000', 'fontSize': '22px', 'letterSpacing': '1.01px', 'lineHeight': '26px'}}
            // onClick = { () => setActiveNavItem('create')}
            >Back to Track Orders</span>
        </div>

        <div className="ordertitle">
            <h1 className="bigheader">Purchase Order #15296</h1>
            <h2>Placed June 20, 2019 1:00 PM</h2>
        </div>

        <div className={`orderconfirmationbox ${confirmed}`}>

            {
                !confirmed &&
                <>
                <h2>Final shipping &amp; delivery cost will be confirmed within 24 hours.</h2>
                <h4>You have not yet been charged for this purchase.</h4>
                </>
            }

            {
                confirmed && !complete &&
                <>
                <div>
                    <h2>Shipping &amp; delivery cost finalized: $300.00</h2>
                    <h4>Please confirm to complete your purchase order.</h4>
                    <h4>(Your card will be charged.)</h4>
                </div>
                <button
                onClick = {() => setComplete(true) }
                className = "addtocart">Confirm purchase order</button>
                </>
            }

            {
                complete &&

                <>
                <img src = {balloons} alt = ''></img>

                <div>
                    <h2 style = {{'color' : 'black'}} className="orderheader">Your purchase order is confirmed!</h2>
                    <p>Purchase Order # 15296</p>
                    <p>Delivery Date &amp; Time: 6/30/19 5:00 PM </p>
                </div>
                </>
            }

        </div>

        <div className="orderinformation">
            <div>
                <h2 className="smallheader">Shipping Address</h2>
                <p>Maria Diaz</p>
                <p>123 Street</p>
                <p>New York, NY 1234</p>
            </div>

            <div className = "orderinfosummary">
                <h2 className="smallheader" style = {{'width' : '100%'}}>Order Summary</h2>
                <p>Subtotal</p>
                <p>$1200.00</p>
                <p>Tax</p>
                <p>$105.00</p>
                <p>Estimated Shipping &amp; Delivery</p>
                <p>$300.00</p>
                <p style = {{'fontWeight' : 900}}>Estimated Grand Total</p>
                <p style = {{'fontWeight' : 900}}>$1605.00</p>
            </div>

            <div className = "orderdeliverydate">
                <h2 className="smallheader">Delivery Date</h2>
                <p className="smallheader">6/30/19 - 5:00 PM</p>
            </div>
            
        </div>

        <div className="leavemessage">
            <h2>Leave Message?</h2>
            <select>
                <option>Choose Recipient</option>
            </select>
            <textarea placeholder = "Type a message here."></textarea>
            <button>Send</button>
        </div>


        </div>

    )
}