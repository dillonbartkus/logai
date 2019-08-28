import React, { useState } from 'react'

export default function Header( props ) {  

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
          Log.Ai</span>

      </div>

      <div className="other">

          <span
          className = {isServices}
          onClick = {props.showServices}
          >Solutions</span>
                
          <span
          className = {isAbout}
          onClick = {props.showAbout}
          >About</span>

          {
            props.token &&
            <span className = {isLogin}
            onClick = { e => props.showDashboard() }
            >
            Profile
            </span>
          }

          {
            !props.token &&

            <span className = {isLogin}
            onClick = { e => props.showLogin(e) }
            >
            Login
            </span>
          }

          {
            !props.token &&

            <span className = {isRegister}
            onClick = { () => props.showRegister() }
            >
            <span>Sign Up</span>
            </span>
          }
          
      </div>

      </div>

    )
  }