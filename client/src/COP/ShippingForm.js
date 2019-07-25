import React from 'react'
import './form.css'

export default function ShippingForm ({ status, setStatus, setPaymentStatus, setDeliveryStatus, setReviewStatus, orderAddress, handleDeliveryAddress }) {

    const comma = orderAddress.city ? ',' : null

    return(

        <div className = "shipping">

            <h1
            className = {`formtitle ${status}`} >
            1. Shipping Address</h1>

            {
                status !== 'edit' &&

                <>
                <div style = {{'width': '50%'}}>
                <p>{orderAddress.name}</p>
                <p>{orderAddress.streetnamenumber}</p>
                <p>{orderAddress.city}{comma} {orderAddress.state} {orderAddress.zip}</p>
                <p></p>
                </div>
                <span
                onClick = {() => {
                    setStatus('edit')
                    setPaymentStatus('upcoming')
                    setDeliveryStatus('upcoming')
                    setReviewStatus('upcoming')
                }}
                style = {{'width' : '50%'}} className="editbutton">Edit</span>
                </>
                
            }

            {
                status === 'edit' &&

                <div className="form">

                <input style = {{'width': '90%'}} 
                onChange = { e => handleDeliveryAddress(e) }
                placeholder="Company Name"
                name="name"
                type="text"
                value={orderAddress.name}
                />

                <input style = {{'width': '90%'}}
                onChange = { e => handleDeliveryAddress(e) }
                placeholder="Street Address"
                name="streetnamenumber"
                type="text"
                value={orderAddress.streetnamenumber}
                />
            
                <input style = {{'width': '40%'}}
                onChange = { e => handleDeliveryAddress(e) }
                placeholder="City"
                name="city"
                type="text"
                value={orderAddress.city}
                />

                <select style = {{'width': '20%'}}
                onChange = { e => handleDeliveryAddress(e) }
                name = "state" >
                  <option>State</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="NJ">New Jersey</option>
                </select>

                <input style = {{'width': '20%'}}
                onChange = { e => handleDeliveryAddress(e) }
                placeholder="Zip Code"
                name="zip"
                type="text"
                value={orderAddress.zip}
                />

                <input style = {{'width': '90%'}}
                placeholder="E-mail"
                type="text"
                />

                </div>

            }

            {
                status !== 'done' &&

                <button
                style = {{'width' : '45%'}}
                onClick = {() => {
                    setStatus('done')
                    setPaymentStatus('edit')
                }}
                className="checkoutbutton">Use this address</button>

            }

        </div>

    )
}