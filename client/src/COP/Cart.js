import React from 'react'
import CartProduct from './CartProduct'

export default function Cart({ cart, changeQuantity, removeFromCart, setActiveNavItem }) {
    
    return(

        <div className="cart">

            <div className="cartproducts">

            <div className = "backtoorder">
            <img src = 'http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png' alt = 'a' style = {{'height' : '50px'}}/>
            <span
            style = {{'fontFamily': "Raleway SemiBold", 'color': '#000000', 'fontSize': '22px', 'letterSpacing': '1.01px', 'lineHeight': '26px'}}
            onClick = { () => setActiveNavItem('create')}
            >Back to Create Order</span>
            </div>

            <h1 style = {{'fontFamily': "Raleway SemiBold", 'letterSpacing': '2.38px', 'fontSize': '5vw', 'lineHeight': '61px', 'textAlign' : 'left', 'marginLeft' : '3%'}}>
            Cart</h1>
            
            {cart.map( (item, id) => <CartProduct removeFromCart = {removeFromCart} changeQuantity = {changeQuantity} key = {id} item = {item} /> )}

            <h4 style = {{'fontSize': '1.5vw', 'fontWeight': 'bold', 'letterSpacing': '1.01px', 'lineHeight': '26px', 'textAlign': 'right'}}>Subtotal: $1200.00</h4>

            </div>

            <div className = "subtotal">

            <h4 style = {{'fontSize': '1.5vw', 'fontWeight': 'bold', 'letterSpacing': '1.01px', 'lineHeight': '26px'}}>Subtotal:</h4>

            <h4 style = {{'fontSize': '1.5vw', 'fontWeight': 'bold', 'letterSpacing': '1.01px', 'lineHeight': '26px'}}>$1200.00</h4>

            <button
            onClick = { () => setActiveNavItem('checkout')}
            style = {{'color' : 'black', 'borderRadius': '16px', 'fontSize': '1.4vw', 'height': '7vh', 'width': '80%'}}
            >Continue Order Request</button>

            </div>

        </div>

    )
}