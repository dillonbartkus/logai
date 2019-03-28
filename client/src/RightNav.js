import React from 'react';

const RightNav = props => {

  let isRegister = (props.register) ? "regbuttonactive" : "regbutton"

    return(

        <div className = "rightnav" >

          {
            props.isLoggedIn &&
            <span
            onClick = { () => {props.showDashboard()} }
            >
            {props.company}
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

            <span className = {isRegister}
            onClick = { () => props.showRegister() }
            >
            Sign Up
            </span>

            </>
          }

        </div>

    )
  }


export default RightNav;