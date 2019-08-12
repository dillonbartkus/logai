import React from 'react'

export default function WMSLanding({ setActiveNavItem, incomingLength }) {
    
    return(

        <>

        <h1 className="bigheader" style = {{'width' : '100%', 'padding' : '3%'}}>Welcome, Steve!</h1>

        <div
        onClick = { () => setActiveNavItem('manager')}
        className="portalbutton first">
            <div className="portalbg" id = "wmsportalone">
                {
                    incomingLength > 0 &&
                    <div className="incomingordernotification big">{incomingLength}</div>
                }
            </div>
            <p>Order Manager</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('wms')}
        className="portalbutton second">
            <div className="portalbg" id = "wmsportaltwo"></div>
            <p>Warehouse Management System</p>
        </div>

        <div
        onClick = { () => setActiveNavItem('ba')}
        className="portalbutton third">
            <div className="portalbg" id = "wmsportalthree"></div>
            <p>Business Analytics</p>
        </div>

        </>

    )
}