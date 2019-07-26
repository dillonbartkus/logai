import React, { useState } from 'react'

export default function Product({ item, addToCart }) {    

    const [quantity, setQuantity] = useState(1)
    const [recentlyAddedItem, setRecentlyAddedItem] = useState(false)

    console.log(recentlyAddedItem)
    
    const buttonText = (recentlyAddedItem) ? 'Added!' : 'Add to cart'

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
            onChange = { e => setQuantity(parseInt(e.target.value)) }
            >
            {selectQuantity(item)}
            </select>
            </div>
            <button
            onClick = { () => {
                addToCart(item, quantity) 
                setRecentlyAddedItem(true)
                setTimeout( () => setRecentlyAddedItem(false), 1500 )
            }}
            className={`addtocart ${recentlyAddedItem}`}>{buttonText}</button>

        </div>

    )
}