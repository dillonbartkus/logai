import React, {Component} from 'react';

class Register extends Component {

render() {

    return(

        <div className = "register" >

        <h1>Register</h1>

            <form className = "regform">

                <label>Company Name</label>
                <input>
                </input>

                <label>Name of Point of Contact</label>
                <input>
                </input>

                <label>Email</label>
                <input>
                </input>

                <label>Phone</label>
                <input>
                </input>

                <label>Password</label>
                <input>            
                </input>

                <label>Confirm Password</label>
                <input>
                </input>

                <button>
                Register
                </button>

              
            </form>

        </div>

    )
  }
}

export default Register;