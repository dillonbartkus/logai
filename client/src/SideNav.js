import React from 'react'
import customer from './images/customer.png'

export default function SideNav({ activeNavItem, setActiveNavItem }) {

    // const isCartActive = (activeNavItem === 'cart') ? 'active' : ''
    // const isCreateActive = (activeNavItem === 'create') ? 'active' : ''
    // const isTrackActive = (activeNavItem === 'track') ? 'active' : ''
    // const isHistoryActive = (activeNavItem === 'history') ? 'active' : ''
    
    const ismanagerActive = (activeNavItem === 'manager') ? 'active' : ''
    const isWMSActive = (activeNavItem === 'wms') ? 'active' : ''
    const isBAActive = (activeNavItem === 'ba') ? 'active' : ''
    
    return(

        <div className="sidenav">

            {/* Customer Sidenav */}
            {/* <div
            onClick = { () => setActiveNavItem('cart')}
            className={`sidenavitem ${isCartActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>Cart</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('create')}
            className={`sidenavitem ${isCreateActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>Create Order</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('track')}
            className={`sidenavitem ${isTrackActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>Track Orders</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('history')}        
            className={`sidenavitem ${isHistoryActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>Order History</p>
            </div> */}

            {/* Warehouse Sidenav */}
            <div
            onClick = { () => setActiveNavItem('manager') }
            className={`sidenavitem ${ismanagerActive}`}>
                <div className="incomingordernotification small">5</div>
                <img src= {customer} alt = 'customer'/>
                <p>Order Manager</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('wms')}
            className={`sidenavitem ${isWMSActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>WMS</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('ba')}
            className={`sidenavitem ${isBAActive}`}>
                <img src= {customer} alt = 'customer'/>
                <p>Business Analytics</p>
            </div>

        </div>

    )
}