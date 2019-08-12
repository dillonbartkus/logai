import React, { useState } from 'react'
import avatar from './images/avatar.png'
import { Redirect } from 'react-router-dom'

export default function DashHeader({ setActiveNavItem, dropdown, setDropdown }) {

    const [loggedOut, setLoggedOut] = useState(false)

    const dropdownStyle = (dropdown) ? {'height' : '20vh'} : {'height' : 0}
    const dropdownItemStyle = (dropdown) ? {'display' : 'block'} : {'display' : 'none'}

    return (

    <div className = "dashheader">
             
        <div
        className = "headerlogo"
        onClick = {() => setActiveNavItem('')}
        >
            <span>LOG.AI</span>

            <span>Inventory Management</span>

        </div>


        <span
        style = {{'fontSize' : '2vw'}}
        >ABOUT</span>

        <span
        style = {{'fontSize' : '2vw'}}
        >RESOURCES</span>

        <div>

            <span>(800) 888-8888</span>

            <div
            onClick = { e => {
                e.stopPropagation()
                setDropdown(!dropdown)
            }}
            className="headeruserpic">
                <img src = {avatar} alt=''/> User
            </div>

        </div>

            
        <div
        style = {dropdownStyle} 
        className = "headerdropdown">

            <span
            onClick = { e => {
                e.stopPropagation()
            }}
            style = {dropdownItemStyle}>Settings</span>
                        
            <span
            onClick = { e => {
                e.stopPropagation()
                setLoggedOut(true) 
            }}
            style = {dropdownItemStyle}>Logout</span>

        </div>

        {loggedOut
          ? <Redirect to={{
            pathname: '/'
          }} />
          : ''}

    </div>
    )
}
