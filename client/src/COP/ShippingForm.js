import React from 'react'
import './form.css'

export default function ShippingForm ({ status, setStatus, setPaymentStatus, setDeliveryStatus, setReviewStatus }) {

    return(

        <div className = "shipping">

            <h1
            className = {`formtitle ${status}`}
            style = {{'textAlign' : 'left', 'width': '100%', 'marginTop': 0, 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.38px', 'lineHeight': '35px'}}>
            1. Shipping Address</h1>

            {
                status !== 'edit' &&

                <>
                <div style = {{'width': '50%'}}>
                <p>Maria Diaz</p>
                <p>123 Street</p>
                <p>New York, NY 12345</p>
                <p>mariadiaz@email.org</p>
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
                placeholder="Company Name"
                type="text"
                value="Maria Diaz"
                />

                <input style = {{'width': '90%'}} 
                placeholder="Street Address"
                type="text"
                value="123 Street"
                />
            
                <input style = {{'width': '40%'}} 
                placeholder="City"
                type="text"
                value="NY"
                />

                <select style = {{'width': '20%'}}> 
                  <option value="ny">State</option>
                  <option value="ny">New York</option>
                  <option value="california">California</option>
                  <option value="nj">New Jersey</option>
                </select>

               <input style = {{'width': '20%'}} 
                placeholder="zip code"
                type="text"
                value="12345"
                />

                <input style = {{'width': '90%'}} 
                placeholder="E-mail"
                type="text"
                value="mariadiaz@gmail.com"
                />

                </div>

            }

            {
                status !== 'done' &&

                <button
                onClick = {() => {
                    setStatus('done')
                    setPaymentStatus('active')
                }}
                className="checkoutbutton">Use this address</button>

            }

        </div>

    )
}