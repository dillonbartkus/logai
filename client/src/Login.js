import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {

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
    const res = await axios.post(`/login`, {
      email: email,
      pw: password
    })
    props.logUserIn(res.data.data, res.data.token)
  }
    catch(err) {
      console.log(err.message)
      setInvalidCred(true)
    }
  }

    return(

        <div className = "login" >

                 <h1 className = "title">Login</h1>

                <form className = "logform">
                
                        <input
                        ref = {textInput}
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder = "Email"
                        type = "text"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        >
                        </input>

                        <input
                        ref = {textInput}
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