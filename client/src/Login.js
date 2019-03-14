import React from 'react';

const Login = props => {

    return(

        <div className = "login" >

                 <h1>Login</h1>

                <form className = "logform">
                
                        <label>Username</label>
                        <input>
                        </input>

                        <label>Password</label>
                        <input>
                        </input>

                        <button
                        onClick = {props.logUserIn}
                        >
                        Login
                        </button>
                
                </form>

        </div>

    )
  }


export default Login;