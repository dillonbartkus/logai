import React from 'react'
import customer from './images/customer.png'

export default function SideNav({ activeNavItem, setActiveNavItem }) {

    const isCreateActive = (activeNavItem === 'create') ? 'active' : ''
    const isTrackActive = (activeNavItem === 'track') ? 'active' : ''
    const isHistoryActive = (activeNavItem === 'history') ? 'active' : ''
    
    return(

        <div className="sidenav">

            <div className="sidenavitem">
                <img src= {customer} alt = 'customer'/>
                <p>Messages</p>
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
            </div>

        </div>

    )
}