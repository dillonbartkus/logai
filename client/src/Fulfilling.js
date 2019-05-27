import React, { useState } from 'react'
import CurrentOrder from './CurrentOrder'
import { Toast } from 'reactstrap'

const Fulfilling = props => {

    const [toast, setToast] = useState(false)

    const renderOrders = () => {
        if (props.orders)
         return props.orders.map( (order, id) => {
           return (
                <CurrentOrder setToast = {setToast} shipInventory = {props.shipInventory} shipOrder = {props.shipOrder} order = {order} key = {id} />
            )
        })
    }    

    return (

        <div className = "fulfilling">
        <h4>Current Orders:</h4>
        <hr></hr>

        {
        toast &&
            <>
        <Toast
        onClick = {() => setToast(false)} >
                Your order has been confirmed!
        </Toast>
        </>
        }

        {renderOrders()}
        </div>

    )
}

export default Fulfilling