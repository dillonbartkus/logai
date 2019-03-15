import React, { useState} from 'react';
import axios from 'axios';

const Register = props => {

    const [companyName, setCompanyName] = useState('')
    const [nPC, setNPC] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pw, setPw] = useState('')
    const [confirmPW, setConfirmPW] = useState('')


    const submitForm = e => {
        checkPW(e)
    }

    const checkPW = e => {
        if (pw !== confirmPW) {
            e.preventDefault()
        } else {
            props.showNewMember()
        }
    }

    return(

        <div className = "register" >

        <h1>Register</h1>

            <form className = "regform">

                Tell use who you are.
                
                <input type = "radio"></input><label>Shipper</label>
                <input type = "radio"></input><label>Warehouse</label>
                <input type = "radio"></input><label>Carrier</label>
                <input type = "radio"></input><label>Customer</label>

                <label>Company Name</label>
                <input
                type="text"
                value = {companyName}
                onChange = {e => setCompanyName(e.target.value)}
                >
                </input>

                <label>Name of Point of Contact</label>
                <input
                type="text"
                value = {nPC}
                onChange = {e => setNPC(e.target.value)}
                >
                </input>

                <label>Email</label>
                <input
                type="email"
                placeholder="Dunder Mifflin"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                >
                </input>

                <label>Phone</label>
                <input
                type="tel"
                value = {phone}
                onChange = {e => setPhone(e.target.value)}
                >
                </input>

                <label>Password</label>
                <input
                type="password"
                value = {pw}
                onChange = {e => setPw(e.target.value)}
                >            
                </input>

                <label>Confirm Password</label>
                <input
                type="password"
                value = {confirmPW}
                onChange = {e => setConfirmPW(e.target.value)}
                >
                </input>

                <button
                onClick = {e => submitForm(e)}
                >
                Register
                </button>

              
            </form>

        </div>

    )
  
}

export default Register;