import React from 'react'

export default function CartProduct({ item, changeQuantity, removeFromCart }) {

    const selectQuantity = item => {
        let options = []
        for (let i = 1; i <= item.on_hand; i ++) {
            options.push(<option key = {i}>{i}</option>)
        }
        return options
    }    

    return(

        <div className="productlisting">

            <img src = {item.picture} alt = {item.name} />
            <div className = "nameandsku">
                <span>{item.name}</span>
                <p>Product ID: {item.sku}</p>
                <p>Units per case: 24</p>
            </div>
            <div className = "pricepercase">
                <p>Price per case:</p>
                <p>${item.price}</p>
            </div>
            <div className = "quantityselector">
                <p>Quantity</p>
                <select
                defaultValue = {item.item_quantity}
                onChange = { e => {
                    changeQuantity(item, e.target.value)
                }}
                >
                {selectQuantity(item)}
                </select>

            </div>
            <div
            onClick = {() => removeFromCart(item)}
            className="remove">
                Remove?
                <br/>
                <p>X</p>
            </div>
        </div>

    )
}