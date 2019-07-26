import React from 'react'
import CartProduct from './CartProduct'

export default function ReviewForm ({ status, orderWasPlaced, changeQuantity, removeFromCart, cart, times, dates, tax, shipping, subtotal, grandTotal }) {
    
    let totalWeight = 0
    cart.forEach( item => {
        totalWeight += (item.weight * item.item_quantity)
    })

    return(

        <div className = "review">

            <h1
            className = {`formtitle ${status}`}>
            4. Review Order</h1>

            {
                status === 'active' &&

                <div className = "cartproducts"
                style = {{'width' : '100%'}}
                >

                {cart.map( (item, id) => <CartProduct removeFromCart = {removeFromCart} changeQuantity = {changeQuantity} key = {id} item = {item} /> )}

                <h2>Estimated Grand Total:   ${grandTotal}</h2>

                </div>
            }

            {
                status !== 'upcoming' &&

                <>

                <button
                style = {{'width' : '40%', 'marginRight' : '10%', 'marginTop' : 0}}
                onClick = { () => orderWasPlaced(cart, times, dates, tax, shipping, subtotal, totalWeight) }
                className="checkoutbutton">Place Order Request</button>

                <p style = {{'textAlign': 'left', 'marginLeft': '45%'}}> <b>Note:</b> Cost of shipping &amp; delivery will be finalized within 24 hours. You will not be charged until you have confirmed this cost and finalized your order. </p>

                </>

            }

        </div>
        
    )
}