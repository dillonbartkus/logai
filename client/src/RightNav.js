import React from 'react';

const RightNav = props => {

    return(

        <div className = "rightnav" >

          {
            props.isLoggedIn &&
            <span
            onClick = { () => {props.showDashboard()} }
            >
            User
            </span>
          }

          {
            props.isLoggedIn ||

            <>

            <span
            onClick = { e => props.showLogin(e) }
            >
            Login
            </span>

            <span className = "regbutton"
            onClick = { () => props.showRegister() }
            >
            Register
            </span>

            </>
          }

        </div>

    )
  }


export default RightNav;