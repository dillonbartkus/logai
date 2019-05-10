import React from 'react'
import Order from './Order'

const Incoming = props => {

    const renderOrders = () => {
        if (props.orders)
        return props.orders.map( (order, id) => {
           return (
               <Order order = {order} key = {id} />
           )
       })
   }

    return (

        <div className = "incoming">
        <h4>Incoming Orders: </h4>
        <hr></hr>
        {renderOrders()}

        </div>

    )
}

export default Incoming