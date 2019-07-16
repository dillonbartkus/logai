import React from 'react'

export default function WMSLanding({ setActiveNavItem }) {
    
    return(

        <>

        <h1 className="welcome">Welcome, Brian!</h1>

        <div
        onClick = { () => setActiveNavItem('manager')}
        className="portalbutton first">
            <div className="portalbg">
            <div className="incomingordernotification big">5</div>
            </div>
            <p>Order Manager</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('wms')}
        className="portalbutton second">
            <div className="portalbg"></div>
            <p>Warehouse Management System</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('ba')}
        className="portalbutton third">
            <div className="portalbg"></div>
            <p>Business Analytics</p>
        </div>

        </>

    )
}