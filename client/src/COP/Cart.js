import React, { useState } from 'react'

export default function Cart({ cart, setActiveNavItem }) {

    const [quantity, setQuantity] = useState()

    const selectQuantity = item => {
        let options = []
        for (let i = 1; i <= item.item_quantity; i ++) {
            options.push(<option key = {i}>{i}</option>)
        }
        return options
    }
    
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
            
            {cart.map( (item, id) => {
                
                return (
                    <div className="productlisting" key = {id}>
                    <img src = {item.picture} alt = {item.name} style = {{'height' : '10vh', 'width' : '5vw'}} />
                    <span>{item.name}</span>
                    <p>Price: $20</p>
                        <div style = {{'display' : 'flex', 'flexDirection' : 'column', 'alignItems' : 'center'}}>
                            Quantity
                            <select
                            defaultValue = {item.item_quantity}
                            style = {{'width' : '70%'}}
                            onChange = { e => {
                                let num = parseInt(e.target.value)
                                if(num >= 1){
                                    setQuantity(num)
                                }
                                else {
                                    setQuantity(quantity)
                                }
                                
                            }}
                            >
                            {selectQuantity(item)}
                            </select>
                        </div>
                    </div>
                )}
            )}

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