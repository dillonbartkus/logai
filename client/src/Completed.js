import React from 'react'
import Order from './Order'

const Completed = props => {

    const renderOrders = () => {
        if (props.orders)
         return props.orders.map( (order, id) => {
           return (
               <Order order = {order} key = {id} />
           )
       })
   }   

    return (

        <div className = "completed">
        <h4>Completed Orders:</h4>
        <hr></hr>
        {renderOrders()}
        </div>

    )
}

export default Completed