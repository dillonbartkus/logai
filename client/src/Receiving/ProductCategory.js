import React, { useState } from 'react'
import down from '../images/down.png'
import up from '../images/up.png'

export default function ProductCategory({ category, items }) {

    const [dropdown, setDropdown] = useState(false)

    const arrow = (dropdown) ? up : down
    
    return(

        <>

        <div
        className = {`productcategory ${dropdown}`}
        onClick = { () => setDropdown(!dropdown)} >
            <div></div>
            <span>{category}</span>
            <img src = {arrow} alt = '' />
        </div>

        {
            dropdown &&
            <div className = {`expandedcategory ${dropdown}`}>

                {items.map( item => <div className = "categorydetails" key = {item.id}>
                    <h1> {item.sku} </h1>
                    <h1> {item.name} </h1>
                    <h1> Case of 24 Units </h1>
                </div> )}

            </div>
        }

        </>
        
    )
}