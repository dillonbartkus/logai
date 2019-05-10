import React from 'react'
import Order from './Order'

const Fulfilling = props => {

    const renderOrders = () => {
        if (props.orders)
         return props.orders.map( (order, id) => {
           return (
                <Order order = {order} key = {id} />
            )
        })
    }    

    return (

        <div className = "fulfilling">
        <h4>Current Orders:</h4>
        <hr></hr>
        {renderOrders()}
        </div>

    )
}

export default Fulfilling