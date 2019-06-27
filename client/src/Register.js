import React, { useState} from 'react'
import axios from 'axios'
import config from './config'

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

    const submitForm = async () => {
        try {
        await axios.post(`${config.SERVERURL}/register`,  {
            company: companyName,
            pw: pw,
            email: email,
            phone: phone,
            npc: nPC,
            comptype: companyType
        })
    }
    catch (err) {
        console.log(err.message)
    }
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

        <h1 className = "title">Tell us who you are.</h1>

            <form className = "regform">

                <div className = "radio">

                        <div className = "radiobutton"
                        onClick = { () => {
                        setCompanyType('shipper')
                        }}
                        >
                        <label>Shipper</label>
                        <div className = "shipper"></div>
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
                        <div className = "warehouse"></div>
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
                        <div className = "carrier"></div>
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
                        <div className = "customer"></div>
                        <input checked = {customerCheck} type = "radio" name = "choice" value = "customer"
                        onChange = {e => setCompanyType(e.target.value)}
                        ></input>
                        </div>

                </div>

                {
                    companyType &&

                <div className="reginputs">
                
                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder="Company Name"
                        type="text"
                        value = {companyName}
                        onChange = {e => setCompanyName(e.target.value)}
                        >
                        </input>
                        {
                            invalidCred &&
                            <p style = {{'color': 'red'}}>Field is required.</p>
                        }

                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder="Name of Point of Contact"
                        type="text"
                        value = {nPC}
                        onChange = {e => setNPC(e.target.value)}
                        >
                        </input>
                        {
                            invalidCred &&
                            <p style = {{'color': 'red'}}>Field is required.</p>
                        }

                        <input
                        className = {invalidCred ? 'invalidCred' : 'short' }
                        placeholder="Email"
                        type="email"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                        >
                        </input>
                        {
                            invalidCred &&
                            <p style = {{'color': 'red'}}>Field is required.</p>
                        }

                        <input
                        placeholder="Phone"
                        className = {invalidCred ? 'invalidCred' : 'short' }
                        type="tel"
                        value = {phone}
                        onChange = {e => setPhone(e.target.value)}
                        >
                        </input>
                        {
                            invalidCred &&
                            <p style = {{'color': 'red'}}>Field is required.</p>
                        }

                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder="Password"
                        type="password"
                        value = {pw}
                        onChange = {e => setPw(e.target.value)}
                        >            
                        </input>
                        {
                            invalidCred &&
                            <p style = {{'color': 'red'}}>Passwords must match.</p>
                        }

                        <input
                        className = {invalidCred ? 'invalidCred' : '' }
                        placeholder="Confirm Password"
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

                    
                    </div>

                    }

            </form>

        </div>

    )
  
}

export default Register;