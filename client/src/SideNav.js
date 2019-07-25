// import React from 'react'
// import clipboardgrey from './images/clipboardsidebargrey.png'
// import clipboardwhite from './images/clipboardsidebarwhite.png'
// import trackgrey from './images/trackordersidebargrey.png'
// import trackwhite from './images/trackordersidebarwhite.png'
// import historygrey from './images/orderhistorysidebargrey.png'
// import historywhite from './images/orderhistorysidebarwhite.png'

// export default function SideNav({ activeNavItem, setActiveNavItem }) {

//     const isCreateActive = (activeNavItem === 'create') ? 'active' : ''
//     const isTrackActive = (activeNavItem === 'track') ? 'active' : ''
//     const isHistoryActive = (activeNavItem === 'history') ? 'active' : ''
    
//     return(

//         <div className="sidenav">

//             <div
//             onClick = { () => setActiveNavItem('create')}
//             className={`sidenavitem ${isCreateActive}`}>
//                 <img src = {(isCreateActive) ? clipboardgrey : clipboardwhite } style = {{'width' : '33%'}} alt = 'clipboard'/>
//                 <p>Create Order</p>
//             </div>

//             <div
//             onClick = { () => setActiveNavItem('track')}
//             className={`sidenavitem ${isTrackActive}`}>
//                 <img src = {(isTrackActive) ? trackgrey : trackwhite } alt = 'clipboard'/>
//                 <p>Track Orders</p>
//             </div>

//             <div
//             onClick = { () => setActiveNavItem('history')}        
//             className={`sidenavitem ${isHistoryActive}`}>
//                 <img src = {(isHistoryActive) ? historygrey : historywhite } alt = 'clipboard'/>
//                 <p>Order History</p>
//             </div>

//         </div>

//     )
// }

import React from 'react'
import wmswhite from './images/wmssidebarwhite.png'
import wmsgrey from './images/wmssidebargrey.png'
import bagrey from './images/basidebargrey.png'
import bawhite from './images/basidebarwhite.png'
import clipboardgrey from './images/clipboardsidebargrey.png'
import clipboardwhite from './images/clipboardsidebarwhite.png'

export default function SideNav({ activeNavItem, setActiveNavItem, incomingLength }){

    const isManagerActive = (activeNavItem === 'manager') ? 'active' : ''
    const isWMSActive = (activeNavItem === 'wms') ? 'active' : ''
    const isBAActive = (activeNavItem === 'ba') ? 'active' : ''

    return(

        <div className = "sidenav">

                        <div
            onClick = { () => setActiveNavItem('manager') }
            className={`sidenavitem ${isManagerActive}`}>
                {
                    incomingLength > 0 &&
                    <div className="incomingordernotification small">{incomingLength}</div>
                }
                <img src = {(isManagerActive) ? clipboardgrey : clipboardwhite } style = {{'width' : '33%'}} alt = 'clipboard'/>
                <p>Order Manager</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('wms')}
            className={`sidenavitem ${isWMSActive}`}>
                <img src = {(isWMSActive) ? wmsgrey : wmswhite } alt = 'clipboard'/>
                <p>WMS</p>
            </div>

            <div
            onClick = { () => setActiveNavItem('ba')}
            className={`sidenavitem ${isBAActive}`}>
                <img src = {(isBAActive) ? bagrey : bawhite } alt = 'clipboard'/>
                <p>Business Analytics</p>
            </div>

        </div>

    )
}

