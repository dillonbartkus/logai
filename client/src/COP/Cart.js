import React from 'react'
import CartProduct from './CartProduct'
import back from '../images/back.png'

export default function Cart({ cart, changeQuantity, removeFromCart, subtotal, setActiveNavItem }) {
    
    return(

        <div className="cart">

            <div className="cartproducts">

            <div className = "backtoorder"
            onClick = { () => setActiveNavItem('create')}
            >
            <img src = {back} alt = 'back' style = {{'height' : '5vh'}} />
            <span>Back to Create Order</span>
            </div>

            <h1 className = "bigheader" style = {{'textAlign' : 'left'}}>Cart</h1>
            
            {cart.map( (item, id) => <CartProduct removeFromCart = {removeFromCart} changeQuantity = {changeQuantity} key = {id} item = {item} /> )}

            {
                subtotal > 0 &&
                <h4>Subtotal: ${subtotal}</h4>
            }

            </div>

            <div className = "subtotal">

            <h4>Subtotal:</h4>

            <h4>${subtotal}</h4>

            <button
            onClick = { () => setActiveNavItem('checkout')}
            className = "addtocart"
            style = {{ 'height': '7vh', 'width': '80%'}}
            >Continue Order Request</button>

            </div>

        </div>

    )
}