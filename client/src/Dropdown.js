import React from 'react';

const Dropmenu = props => {

    return (
        <div className = {`dropmenu ${props.dropdown}`}>

        <span
        className = "dropnav"
        onClick = {props.showServices}
        >Services</span>
            
        <span
        className = "dropnav"
        onClick = {props.showAbout}
        >About</span>

        {
        localStorage.logtoken &&

            <span className = 'dropnav'
            onClick = { e => props.showDashboard() }
            >
            Profile
            </span>
        }

        {
        !localStorage.logtoken &&

            <span className = "dropnav"
            onClick = { e => props.showLogin(e) }
            >
            Login
            </span>
        }

        {
        !localStorage.logtoken &&
            <span className = "dropnav blue"
            onClick = { () => props.showRegister() }
            >
            <span>Register</span>
            </span>
        }

        </div>
    )
}

export default Dropmenu