import React from 'react'

export default function PaymentForm ({status, setStatus, setDeliveryStatus}) {


    return(

        <div className = "payment">

            <h1
            className = {`formtitle ${status}`}
            style = {{'marginTop': 0, 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.38px', 'lineHeight': '35px'}}>
            2. Payment Information</h1>

            {
                status !== 'edit' && status !== 'upcoming' &&

                <>
                <div style = {{'width': '50%'}}>
                <p>Visa ****1234</p>
                <p>Exp 06/2023</p>
                </div>
                <span
                onClick = {() => {
                    setStatus('edit')
                    setDeliveryStatus('upcoming')
                }}
                style = {{'width' : '50%'}} className="editbutton">Edit</span>
                </>
                
            }

            {
                status === 'edit' &&

                <div className="form">

                <input style = {{'width' : '40%'}}
                placeholder="Cardholder"
                type="text"
                />

                <input style = {{'width' : '40%'}}
                placeholder="Card Number"
                type="text"
                />

                <select
                style = {{'width': '20%'}}
                >
                  <option>Exp Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                </select>

                <select
                style = {{'width': '20%'}}
                >
                  <option>Exp Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2020">2022</option>
                </select>

               <input style = {{'width' : '25%'}}
                placeholder="CVV"
                type="text"
                />

                </div>

            }

            {
                status !== 'done' && status !== 'upcoming' &&

                <button
                onClick = {() => {
                    setStatus('done')
                    setDeliveryStatus('active')
                }}
                className="checkoutbutton">Use this address</button>

            }

        </div>
        
    )
}