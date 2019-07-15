import React, { useState } from 'react'

export default function Product({ item, addToCart }) {

    const [quantity, setQuantity] = useState(1)
    const [recentlyAddedItem, setRecentlyAddedItem] = useState(false)

    const buttonText = (recentlyAddedItem) ? 'Added!' : 'Add to cart'

    const selectQuantity = item => {
        let options = []
        for (let i = 1; i <= item.quantity; i ++) {
            options.push(<option key = {i}>{i}</option>)
        }
        return options
    }

    return(

        <div className="productlisting">

        <img src = {item.picture} alt = {item.name} style = {{'height' : '10vh', 'width' : '8%'}} />
        <span style = {{'width' : '10%'}}>{item.name}</span>
        <p style = {{'width' : '10%'}}>Unit Price: $20</p>
        <p style = {{'width' : '10%'}}>Units in Stock: {item.quantity}</p>
        <div style = {{'display' : 'flex', 'flexDirection' : 'column', 'alignItems' : 'center'}}>
            Quantity
            <select
            style = {{'width' : '70%'}}
            onChange = { e => setQuantity(parseInt(e.target.value)) }
            >
            {selectQuantity(item)}
            </select>
        </div>
        <button
        style = {{'width' : '20%'}}
        onClick = { () => {
            addToCart(item, quantity) 
            setRecentlyAddedItem(true)
        }}
        className={`addtocart ${recentlyAddedItem}`}>{buttonText}</button>
        </div>

    )
}