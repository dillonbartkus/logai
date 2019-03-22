import React, { useState} from 'react';
import axios from 'axios';

const Register = props => {

    const [companyName, setCompanyName] = useState('')
    const [companyType, setCompanyType] = useState('')
    const [pw, setPw] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nPC, setNPC] = useState('')
    const [confirmPW, setConfirmPW] = useState('')
    const [invalidCred, setInvalidCred] = useState(false)

    const checkForm = e => {
        if (!companyName || !companyType || !pw || !email || !phone || !nPC || !confirmPW) {
            e.preventDefault()
            setInvalidCred(true)
        } else {
            checkPW(e)
        }
    }

    const submitForm = () => {
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
            submitForm()
            props.showWelcomePage()
        }
    }

    const shipperCheck = (companyType === 'shipper') ? true : false
    const warehouseCheck = (companyType === 'warehouse') ? true : false
    const carrierCheck = (companyType === 'carrier') ? true : false
    const customerCheck = (companyType === 'customer') ? true : false

    return(

        <div className = "register" >

        <h1>Tell us who you are.</h1>

            <form className = "regform">

                <div className = "radio">

                <div className = "radiobutton"
                onClick = { () => {
                setCompanyType('shipper')
                }}
                >
                <label>Shipper</label>
                <div></div>
                <input checked = {shipperCheck} type = "radio" name = "choice" value = "shipper"
                onChange = {e => setCompanyType(e.target.value)}
                ></input>
                </div>

                <div className = "radiobutton"
                 onClick = { () => {
                    setCompanyType('warehouse')
                    }}
                >
                <label>Warehouse</label>
                <div></div>
                <input checked = {warehouseCheck} type = "radio" name = "choice" value = "warehouse"
                onChange = {e => setCompanyType(e.target.value)}
                ></input>
                </div>

                <div className = "radiobutton"
                 onClick = { () => {
                    setCompanyType('carrier')
                    }}
                >
                <label>Carrier</label>
                <div></div>
                <input checked = {carrierCheck} type = "radio" name = "choice" value = "carrier"
                onChange = {e => setCompanyType(e.target.value)}
                ></input>
                </div>

                <div className = "radiobutton"
                 onClick = { () => {
                    setCompanyType('customer')
                    }}
                >
                <label>Customer</label>
                <div></div>
                <input checked = {customerCheck} type = "radio" name = "choice" value = "customer"
                onChange = {e => setCompanyType(e.target.value)}
                ></input>
                </div>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Field is required.</p>
                }

                </div>
                

                <label>Company Name</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="text"
                value = {companyName}
                onChange = {e => setCompanyName(e.target.value)}
                >
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Field is required.</p>
                }

                <label>Name of Point of Contact</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="text"
                value = {nPC}
                onChange = {e => setNPC(e.target.value)}
                >
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Field is required.</p>
                }

                <label>Email</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="email"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                >
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Field is required.</p>
                }

                <label>Phone</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="tel"
                value = {phone}
                onChange = {e => setPhone(e.target.value)}
                >
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Field is required.</p>
                }

                <label>Password</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="password"
                value = {pw}
                onChange = {e => setPw(e.target.value)}
                >            
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Passwords must match.</p>
                }

                <label>Confirm Password</label>
                <input
                className = {invalidCred ? 'invalidCred' : '' }
                type="password"
                value = {confirmPW}
                onChange = {e => setConfirmPW(e.target.value)}
                >
                </input>
                {
                    invalidCred &&
                    <p style = {{'color': 'red'}}>Passwords must match.</p>
                }

                <button
                className = "formbutton"
                onClick = {e => checkForm(e)}
                >
                Register
                </button>

              
            </form>

        </div>

    )
  
}

export default Register;