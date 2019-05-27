import React, { useState } from 'react'
import IncomingOrder from './IncomingOrder'
import { Toast } from 'reactstrap'


const Incoming = props => {

    const [toast, setToast] = useState(false)


    const renderOrders = () => {
        if (props.orders)
        return props.orders.map( (order, id) => {
           return (
               <IncomingOrder setToast = {setToast} receiveOrder = {props.receiveOrder} receiveInventory = {props.receiveInventory} order = {order} key = {id} />
           )
       })
   }

    return (

        <div className = "incoming">
        <h4>Incoming Orders: </h4>
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

export default Incoming