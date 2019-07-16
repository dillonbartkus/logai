import React from 'react'

export default function Incoming({ setActiveNavItem }) {

    return(

        <div className = "incoming">

            <h1
            onClick = { () => setActiveNavItem('orderdetails') }
            >Order Details</h1>

        </div>
        
    )
}