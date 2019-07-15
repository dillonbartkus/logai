import React, { useState } from 'react'
import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'
import DeliveryForm from './DeliveryForm'
import ReviewForm from './ReviewForm'

export default function Checkout ({ cart, time, date, setDate, orderWasPlaced, handleTimeSelect }) {

    const [shippingStatus, setShippingStatus] = useState('active')
    const [paymentStatus, setPaymentStatus] = useState('upcoming')
    const [deliveryStatus, setDeliveryStatus] = useState('upcoming')
    const [reviewStatus, setReviewStatus] = useState('upcoming')

    return(

        <div className="checkout">

            <h1 style = {{'width': '100%', 'fontFamily': "Raleway SemiBold", 'letterSpacing': '2.38px', 'fontSize': '4vw', 'lineHeight': '61px', 'textAlign' : 'left'}}>
            Order Request Details </h1>

            <div className = "checkoutinfo">

                <ShippingForm
                status = {shippingStatus}
                setStatus = {setShippingStatus}
                setPaymentStatus = {setPaymentStatus}
                setDeliveryStatus = {setDeliveryStatus}
                setReviewStatus = {setReviewStatus} />

                <PaymentForm
                status = {paymentStatus}
                setStatus = {setPaymentStatus}
                setDeliveryStatus = {setDeliveryStatus} />

                <DeliveryForm
                status = {deliveryStatus}
                setStatus = {setDeliveryStatus}
                setReviewStatus = {setReviewStatus}
                time = {time}
                date = {date}
                setDate = {setDate}
                handleTimeSelect = {handleTimeSelect} />

                <ReviewForm
                status = {reviewStatus}
                setStatus = {setReviewStatus}
                orderWasPlaced = {orderWasPlaced}
                cart = {cart} />

            </div>
        
            <div className="checkoutsummary">

                <h1 style = {{'width': '100%', 'marginTop': 0, 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.38px', 'lineHeight': '35px'}}>
                Order Summary</h1>

                <p>Subtotal</p>
                <p style = {{'textAlign' : 'center'}}>$1200</p>
                <p>Tax</p>
                <p style = {{'textAlign' : 'center'}}>--</p>
                <p>Estimated Shipping &amp; Delivery</p>
                <p style = {{'textAlign' : 'center'}}>--</p>
                <p style = {{'fontWeight': 'bold'}}>Grand Total</p>
                <p style = {{'fontWeight': 'bold', 'textAlign' : 'center'}}>--</p>
            

            </div>

        </div>

    )
}