import React, { useState } from 'react'
import avatar from './images/avatar.png'

export default function DashHeader({ setActiveNavItem }) {

    const [dropdown, setDropwdown] = useState(false)

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
            onClick = {() => setDropwdown(!dropdown) }
            className="headeruserpic">
                <img src = {avatar} alt=''/> User
            </div>

        </div>

            
        <div
        style = {dropdownStyle} 
        className = "headerdropdown">
            <span style = {dropdownItemStyle}>Settings</span>
            <span style = {dropdownItemStyle}>Other thing</span>
            <span style = {dropdownItemStyle}>Another thing</span>
        </div>

    </div>
    )
}
