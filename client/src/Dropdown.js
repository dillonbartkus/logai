import React from 'react'

export default function Dropmenu (props) {

    return (
        <div className = {`dropmenu ${props.dropdown}`}>

            <div>

                <span
                className = "dropnav"
                onClick = {props.showServices}
                >Services</span>
                    
                <span
                className = "dropnav"
                onClick = {props.showAbout}
                >About</span>

                <span className = "dropnav"
                onClick = { e => props.showLogin(e) }
                >
                Login
                </span>

                <span className = "dropnav blue"
                onClick = { () => props.showRegister() }
                >
                <span>Get a Demo</span>
                </span>

            </div>

        </div>
    )
}