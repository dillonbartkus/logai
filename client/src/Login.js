import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCred, setInvalidCred] = useState('')
  const [token, setToken] = useState('')

  const authorize = async e => {
    e.preventDefault()
    try {
    const res = await  axios.post(`/login`, {
      email: email,
      pw: password
    })
    console.log(res.data.data)
    setToken(res.data.token)
    props.logUserIn(res.data.data)
  }
    catch(err) {
      console.log(err.response)
      setInvalidCred(true)
    }
  }

    return(

        <div className = "login" >

                 <h1 className = "title">Login</h1>

                <form className = "logform">
                
                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder = "Email"
                        type = "text"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        >
                        </input>

                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder = "Password"
                        type = "password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                        >
                        </input>

                        {
                          invalidCred &&
                          <p style = {{'color': 'red'}}>Invalid Username / Password</p>
                        }


                        <button
                        className = "formbutton"
                        onClick = {authorize}
                        >
                        Login
                        </button>

                        <p>Forgot Password? <a href = "mailto:dillonbartkus@gmail.com">Reset</a></p>
                
                </form>

        </div>

    )
  }


export default Login;