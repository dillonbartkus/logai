import React from 'react'

export default function COPLanding({ setActiveNavItem }) {
    
    return(

        <>

        <h1 className="welcome">Welcome, Maria!</h1>

        <div
        onClick = { () => setActiveNavItem('create')}
        className="portalbutton first">
            <div className="portalbg"></div>
            <p>Create Order</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('track')}
        className="portalbutton second">
            <div className="portalbg"></div>
            <p>Track Orders</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('history')}
        className="portalbutton third">
            <div className="portalbg"></div>
            <p>Order History</p>
        </div>

        </>

    )
}