import React, { useState } from 'react';

const Header = props => {

  const [scroll, setScroll] = useState('big')

  let isAbout = (props.about) ? 'navactive' : ''
  let isServices = (props.services) ? 'navactive' : ''
  let isMain = (props.main) ? 'navactive' : ''
  let isRegister = (props.register) ? 'regbuttonactive' : 'regbutton'
  let isLogin = (props.login) ? 'navactive' : ''

  setInterval( () => {
    const scroll = window.scrollY
    if (scroll > 75) {
    setScroll('small')
    }
    if (scroll < 75) {
      setScroll('big')
    }
  }, 100)

    return (

      <div className = {`header ${scroll}`}>

      <div className="logo">

          <span
          className = {isMain}
          onClick = {props.showMain}
          >
          Log.AI</span>

      </div>

      <div className="other">

          <span
          className = {isServices}
          onClick = {props.showServices}
          >Services</span>
                
          <span
          className = {isAbout}
          onClick = {props.showAbout}
          >About</span>

          <span className = {isLogin}
          onClick = { e => props.showLogin(e) }
          >
          Login
          </span>

          <span className = {isRegister}
          onClick = { () => props.showRegister() }
          >
          <span>Sign Up</span>
          </span>
          
      </div>

      </div>

    )
  }

export default Header;
