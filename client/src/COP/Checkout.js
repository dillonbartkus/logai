import React, { useState } from 'react'
import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'
import DeliveryForm from './DeliveryForm'
import ReviewForm from './ReviewForm'

export default function Checkout ({ cart, times, dates, setDates, orderWasPlaced, changeQuantity, subtotal, removeFromCart, handleTimeSelect, orderAddress, handlePaymentInfo, handleDeliveryAddress }) {

    const [shippingStatus, setShippingStatus] = useState('edit')
    const [paymentStatus, setPaymentStatus] = useState('upcoming')
    const [deliveryStatus, setDeliveryStatus] = useState('upcoming')
    const [reviewStatus, setReviewStatus] = useState('upcoming')
    const tax = Math.round(subtotal * (9 / 100))
    const shipping = subtotal / 4
    const grandTotal = subtotal + tax + shipping

    return(

        <div className="checkout">

            <h1 className = "bigheader">Order Request Details</h1>

            <div className = "checkoutinfo">

                <ShippingForm
                status = {shippingStatus}
                setStatus = {setShippingStatus}
                setPaymentStatus = {setPaymentStatus}
                setDeliveryStatus = {setDeliveryStatus}
                handleDeliveryAddress = {handleDeliveryAddress}
                orderAddress = {orderAddress}
                setReviewStatus = {setReviewStatus} />

                <PaymentForm
                status = {paymentStatus}
                setStatus = {setPaymentStatus}
                handlePaymentInfo = {handlePaymentInfo}
                setDeliveryStatus = {setDeliveryStatus} />

                <DeliveryForm
                status = {deliveryStatus}
                setStatus = {setDeliveryStatus}
                setReviewStatus = {setReviewStatus}
                times = {times}
                dates = {dates}
                setDates = {setDates}
                handleTimeSelect = {handleTimeSelect} />

                <ReviewForm
                status = {reviewStatus}
                setStatus = {setReviewStatus}
                orderWasPlaced = {orderWasPlaced}
                changeQuantity = {changeQuantity}
                removeFromCart = {removeFromCart}
                grandTotal = {grandTotal}
                tax = {tax}
                shipping = {shipping}
                subtotal = {subtotal}
                times = {times}
                dates = {dates}
                cart = {cart} />

            </div>
        
            <div className="checkoutsummary">

                <h1>Order Summary</h1>

                <p>Subtotal</p>
                <p style = {{'textAlign' : 'center'}}>${subtotal}</p>
                <p>Tax</p>
                <p style = {{'textAlign' : 'center'}}>${tax}</p>
                <p>Estimated Shipping &amp; Delivery</p>
                <p style = {{'textAlign' : 'center'}}>${shipping}</p>
                <p style = {{'fontWeight': 'bold', 'letterSpacing': '0.82px'}}>Estimated Grand Total</p>
                <p style = {{'fontWeight': 'bold', 'letterSpacing': '0.82px', 'textAlign' : 'center'}}>${grandTotal}</p>
            

            </div>

        </div>

    )
}