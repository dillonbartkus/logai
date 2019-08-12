import React, { useState } from 'react'
import avatar from './images/avatar.png'
import { Redirect } from 'react-router-dom'

export default function MobileDashHeader({ dropdown, setDropdown, setActiveNavItem }) {

    const [loggedOut, setLoggedOut] = useState(false)

    const dropdownStyle = (dropdown) ? {'height' : '20vh', 'top' : '100px'} : {'height' : 0, 'top' : '100px'}
    const dropdownItemStyle = (dropdown) ? {'display' : 'block', 'fontSize' : '28px'} : {'display' : 'none'}

    return(

        <div className = "mobiledashheader">

            <div className = "mobilehamburger">
            </div>

            <div
            className = "mobileheaderlogo"
            onClick = {() => setActiveNavItem('')}
            >
                <span>LOG.AI</span>

                <span>inventory management</span>

            </div>

            <div
            onClick = { e => {
                e.stopPropagation()
                setDropdown(!dropdown)
            }}
            className="mobileheaderuserpic">
                <img src = {avatar} alt='user'/>
            </div>

            <div
            style = {dropdownStyle} 
            className = "headerdropdown">
            
            <span
            onClick = { e => {
                e.stopPropagation()
                setLoggedOut(true) 
            }}
            style = {dropdownItemStyle}>Logout</span>

            <span
            onClick = { e => {
                e.stopPropagation()
                console.log('dasda')
            }}
            style = {dropdownItemStyle}>Settings</span>

            </div>

            {loggedOut
                ? <Redirect to={{
                pathname: '/'
                }} />
                : ''}

        </div>
    )
}