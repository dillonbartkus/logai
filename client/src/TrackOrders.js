import React, { useState, useEffect } from 'react'
import Completed from './Completed'
import Fulfilling from './Fulfilling'
import Incoming from './Incoming'

const TrackOrders = props => {

    const [display, setDisplay] = useState('incoming')
    const [fulfillingOrders, setFulfillingOrders] = useState()
    const [completedOrders, setCompletedOrders] = useState()
    const [incomingOrders, setIncomingOrders] = useState()

    useEffect( () => {
        filterOrders()
    }, [] )

    const filterOrders = () => {
        if (props.orders) 
        setFulfillingOrders(props.orders.filter( order => order.status === 'Completed' ))
        setCompletedOrders(props.orders.filter( order => !order.status === ' Fulfilling' ))
        setIncomingOrders(props.orders.filter( order => order.status === 'Incoming'))
    }
    
    return (

        <div className = 'trackorders'>

            <button
            onClick = { () => {
                if (display === 'unfulfilled')
                    setDisplay('fulfilled')
                if (display === 'fulfilled')
                    setDisplay('incoming')
                if (display === 'incoming')
                    setDisplay('unfulfilled')
            }}
            >
            Change Page
            </button>

            {
                display === 'unfulfilled' &&

                <Incoming orders = {incomingOrders} inv = {props.inv} />
            }

            {
                display === 'fulfilled' &&

                <Fulfilling orders = {fulfillingOrders} />
            }

            {
                display === 'incoming' &&

                <Completed orders = {completedOrders} />
            }

        </div>
    )
}

export default TrackOrders