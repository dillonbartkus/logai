import React, { useState} from 'react';
import axios from 'axios';

const Register = props => {

    const [companyName, setCompanyName] = useState(null)
    const [companyType, setCompanyType] = useState(null)
    const [pw, setPw] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [nPC, setNPC] = useState(null)
    const [confirmPW, setConfirmPW] = useState(null)


    const submitForm = e => {
        checkPW(e)
        axios.post(`http://localhost:3001/join`,  {
            company: companyName,
            pw: pw,
            email: email,
            phone: phone,
            npc: nPC,
            comptype: companyType
        }).then(res => {
            console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

    const checkPW = e => {
        if (pw !== confirmPW) {
            e.preventDefault()
        } else {
            props.showWelcomePage()
        }
    }

    return(

        <div className = "register" >

        <h1>Register</h1>

            <form className = "regform">

                Tell us who you are.
                
                <input type = "radio" name = "choice" value = "shipper"
                onChange = {e => setCompanyType(e.target.value)}
                ></input>
                <label>Shipper</label>

                <input type = "radio" name = "choice" value = "warehouse"
                onChange = {e => setCompanyType(e.target.value)}
                ></input><label>Warehouse</label>

                <input type = "radio" name = "choice" value = "carrier"
                onChange = {e => setCompanyType(e.target.value)}
                ></input><label>Carrier</label>

                <input type = "radio" name = "choice" value = "customer"
                onChange = {e => setCompanyType(e.target.value)}
                ></input><label>Customer</label>

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