import React, { useState } from 'react';

const RightNav = props => {

  const [user, setUser] = useState('')

  console.log(props)

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