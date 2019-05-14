import React from 'react'
import CompletedOrder from './CompletedOrder'

const Completed = props => {

    const renderOrders = () => {
        if (props.orders)
         return props.orders.map( (order, id) => {
           return (
               <CompletedOrder order = {order} key = {id} />
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