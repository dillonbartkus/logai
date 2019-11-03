import React, { useState } from 'react'
import axios from 'axios'
import SERVERURL from '../config'

export default function MessageBox({ order }) {
    
    const [instructions, setInstructions] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const handleChange = e => {
        setInstructions(e.target.value)
    }

    const submitInstructions= async () => {
        await axios.put(`${SERVERURL}/addinstructions/${order.id}`, {
            instructions
        })
    }

    return(

            <div className="leavemessage">

                {
                    !submitted &&
                    <>
                        <h2>Delivery Instructions:</h2>
                        <textarea placeholder = "Type a message here." value = {instructions} onChange = { e => handleChange(e) }
                        ></textarea>
                        <button className = "addtocart" onClick = { () => {
                            submitInstructions()
                            setSubmitted(true)
                        }}
                        >Send</button>
                </>
                }

                {
                    submitted &&
                    <h3>Thank you! The warehouse has received your instructions.</h3>
                }

            </div>

    )
}