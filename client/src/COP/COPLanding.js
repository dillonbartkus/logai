import React from 'react'

export default function COPLanding({ setActiveNavItem }) {
    
    return(

        <>

        <h1 className="welcome">Welcome, User!</h1>

        <div
        onClick = { () => setActiveNavItem('create')}
        className="portalbutton one">
            <div className="portalbg"></div>
            <p>Create Order</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('track')}
        className="portalbutton two">
            <div className="portalbg"></div>
            <p>Track Orders</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('history')}
        className="portalbutton three">
            <div className="portalbg"></div>
            <p>Order History</p>
        </div>

        </>

    )
}