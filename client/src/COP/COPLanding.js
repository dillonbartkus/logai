import React from 'react'

export default function COPLanding({ setActiveNavItem }) {
    
    return(

        <>

        <h1 className="bigheader" style = {{'width' : '100%', 'padding' : '3%'}}>Welcome, Maria!</h1>

        <div
        onClick = { () => setActiveNavItem('create')}
        className="portalbutton first">
            <div className="portalbg" id = "copportalone"></div>
            <p>Create Order</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('track')}
        className="portalbutton second">
            <div className="portalbg" id = "copportaltwo"></div>
            <p>Track Orders</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('history')}
        className="portalbutton third">
            <div className="portalbg" id = "copportalthree"></div>
            <p>Order History</p>
        </div>

        </>

    )
}