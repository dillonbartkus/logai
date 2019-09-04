import React from 'react'
import trackgrey from './images/trackordersidebargrey.png'
import trackwhite from './images/trackordersidebarwhite.png'
import historygrey from './images/orderhistorysidebargrey.png'
import historywhite from './images/orderhistorysidebarwhite.png'
import wmswhite from './images/wmssidebarwhite.png'
import wmsgrey from './images/wmssidebargrey.png'
import bagrey from './images/basidebargrey.png'
import bawhite from './images/basidebarwhite.png'
import clipboardgrey from './images/clipboardsidebargrey.png'
import clipboardwhite from './images/clipboardsidebarwhite.png'
import people from './images/people.svg'
import peoplewhite from './images/peoplewhite.svg'

export default function SideNav({ activeNavItem, setActiveNavItem, incomingLength, customerLength, user, jobs }) {

    const isCreateActive = (activeNavItem === 'create') ? 'active' : ''
    const isTrackActive = (activeNavItem === 'track') ? 'active' : ''
    const isHistoryActive = (activeNavItem === 'history') ? 'active' : ''
    const isManagerActive = (activeNavItem === 'manager') ? 'active' : ''
    const isWMSActive = (activeNavItem === 'wms') ? 'active' : ''
    const isBAActive = (activeNavItem === 'ba') ? 'active' : ''
    const isAssignActive = (activeNavItem === 'assign') ? 'active' : ''    
    
    if(user.type === 'customer') return(

        <div className="sidenav">

            <div
            onClick = { () => setActiveNavItem('create')}
            className={`sidenavitem ${isCreateActive}`}>
                <img src = {(isCreateActive) ? clipboardgrey : clipboardwhite } style = {{'width' : '33%'}} alt = ''/>
                <p>Create Order</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('track')}
            className={`sidenavitem ${isTrackActive}`}>
                {
                    customerLength > 0 &&
                    <div className="incomingordernotification small">{customerLength}</div>
                }
                <img src = {(isTrackActive) ? trackgrey : trackwhite } alt = ''/>
                <p>Track Orders</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('history')}        
            className={`sidenavitem ${isHistoryActive}`}>
                <img src = {(isHistoryActive) ? historygrey : historywhite } alt = ''/>
                <p>Order History</p>
            </div>

        </div>

    )

    if(user.type === 'warehouse') return(

        <div className = "sidenav">

                        <div
            onClick = { () => setActiveNavItem('manager') }
            className={`sidenavitem ${isManagerActive}`}>
                {
                    incomingLength > 0 &&
                    <div className="incomingordernotification small">{incomingLength}</div>
                }
                <img src = {(isManagerActive) ? clipboardgrey : clipboardwhite } style = {{'width' : '33%'}} alt = ''/>
                <p>Order Manager</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('wms')}
            className={`sidenavitem ${isWMSActive}`}>
                <img src = {(isWMSActive) ? wmsgrey : wmswhite } alt = ''/>
                <p>WMS</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('ba')}
            className={`sidenavitem ${isBAActive}`}>
                <img src = {(isBAActive) ? bagrey : bawhite } alt = ''/>
                <p>Business Analytics</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('assign')}
            className={`sidenavitem ${isAssignActive}`}>
                {
                    jobs && jobs.length > 0 &&
                    <div className="incomingordernotification small">{jobs.length}</div>
                }
                <img src = {(isAssignActive) ? people : peoplewhite } alt = ''/>
                <p>Job Assignment</p>
            </div>

        </div>

    )
}

