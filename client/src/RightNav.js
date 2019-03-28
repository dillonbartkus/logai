import React from 'react';

const RightNav = props => {

  let isRegister = (props.register) ? 'regbuttonactive' : 'regbutton'
  let isLogin = (props.login) ? 'navactive' : ''

    return(

        <div className = "rightnav" >

            <span className = {isLogin}
            onClick = { e => props.showLogin(e) }
            >
            Login
            </span>

            <span className = {isRegister}
            onClick = { () => props.showRegister() }
            >
            Sign Up
            </span>

        </div>

    )
  }


export default RightNav;