import React from 'react'
import CartProduct from './CartProduct'

export default function ReviewForm ({ status, orderWasPlaced, changeQuantity, removeFromCart, cart }) {

    return(

        <div className = "review">

            <h1
            className = {`formtitle ${status}`}
            style = {{'marginTop': 0, 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.38px', 'lineHeight': '35px'}}>
            4. Review Order</h1>

            {
                status === 'active' &&

                <div className = "cartproducts"
                style = {{'width' : '100%'}}
                >

                {cart.map( (item, id) => <CartProduct removeFromCart = {removeFromCart} changeQuantity = {changeQuantity} key = {id} item = {item} /> )}

                <h2 style = {{'width': '100%', 'marginTop': '1%', 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.01px', 'lineHeight': '26px', 'textAlign': 'right'}}>
                Estimated Grand Total: $1605.00</h2>

                </div>
            }

            {
                status !== 'upcoming' &&

                <>

                <button
                onClick = { () => orderWasPlaced() }
                className="checkoutbutton">Place Order Request</button>

                <p style = {{'textAlign': 'left', 'marginLeft': '45%'}}> <b>Note:</b> Cost of shipping &amp; delivery will be finalized within 24 hours. You will not be charged until you have confirmed this cost and finalized your order. </p>

                </>

            }

        </div>
        
    )
}