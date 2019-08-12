import React, { useState, useEffect } from 'react'
import Completed from './Completed'
import Fulfilling from './Fulfilling'
import Incoming from './Incoming'

const TrackOrders = props => {

    const [display, setActiveNavItem] = useState('incoming')
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
                    setActiveNavItem('fulfilled')
                if (display === 'fulfilled')
                    setActiveNavItem('incoming')
                if (display === 'incoming')
                    setActiveNavItem('unfulfilled')
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