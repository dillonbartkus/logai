import React, { useState } from 'react'
import axios from 'axios'
import SERVERURL from './config'
import uppergear from './images/uppergear.png'
import lowergear from './images/lowergear.png'

export default function Login ({ logUserIn }) {

  const textInput = React.createRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCred, setInvalidCred] = useState('')

  const authorize = async e => {
    e.preventDefault()
    textInput.current.blur()
    try {
      // headers: {
      //   authorization: `Bearer ${this.state.token}`
      // }
    const res = await axios.post(`${SERVERURL}/login`, {
      email: email,
      pw: password
    })
    logUserIn(res.data.data, res.data.token)
  }
    catch(err) {
      console.log(err.message)
      setInvalidCred(true)
    }
  }

  const shouldEnter = e => {
    let keyCode = e.charCode;
    if(keyCode === 13) {
      authorize(e)
      }
  }

  return(

    <div className = "login" >

    <img className = "uppergear" src = {uppergear} alt = '' />

    <img className = "lowergear" src = {lowergear} alt = '' />

      <div>

        <h1>Sign In</h1>

        <label>Email Address</label>
        <input
        onChange = {e => setEmail(e.target.value)}
        className = {invalidCred ? 'invalidCred' : '' }
        ref = {textInput}
        value = {email}
        placeholder = "dillon@gmail.com"
        type = "text"
        ></input>

        <div className = "forgotdiv">
        <label>Password</label>
        <p className = "forgotpw">Forgot password?</p>
        </div>
        <input
        onChange = {e => setPassword(e.target.value)}
        onKeyPress={ e => shouldEnter(e) }
        className = {invalidCred ? 'invalidCred' : '' }
        ref = {textInput}
        value = {password}
        placeholder = "Enter your password"
        type = "password"
        ></input>

        {
          invalidCred &&
          <p style = {{'color': 'red'}}>Invalid Username / Password</p>
        }

        <div className = "buttonholder">
          <button
          onClick = {authorize}
          className = "loginbutton">Sign In</button>
        </div>

      </div>

    </div>

  )
}