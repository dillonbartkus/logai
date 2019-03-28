import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCred, setInvalidCred] = useState('')

  const authorize = e => {
    e.preventDefault()
    axios.get(`http://localhost:3001/users`)
    .then(res => {
      const users = res.data.data
      users.forEach(user => {
        let id = user.id
        let company = user.company
        if (email === user.email && password === user.pw) {
          props.logUserIn(id, company)
        }
        else {
          setInvalidCred(true)
        }
      })
    })
    .catch(err => {
      console.log(err.message)
    })
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