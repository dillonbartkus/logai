import React from 'react'
import CurrentOrder from './CurrentOrder'

const Fulfilling = props => {

    const renderOrders = () => {
        if (props.orders)
         return props.orders.map( (order, id) => {
           return (
                <CurrentOrder order = {order} key = {id} />
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