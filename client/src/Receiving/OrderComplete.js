import React from 'react'
import balloons from '../images/balloons.png'

export default function OrderComplete({ order, showOrder, setActiveNavItem, number, fetchOrders }) {

    return(

        <div className = "receivingordercomplete">

        <div className = "congrats">

            <img src = {balloons} alt = '' />

            <div>

                <h1 className = "hugeheader">Great job, {order.employee}! </h1>

                {order.status === 'received' &&
                <h1>Receiving is finished!</h1> }

                {order.status === 'put away' &&
                <h1>Put-away is finished!</h1> }

                {order.status === 'picked' &&
                <h1>Picking is finished!</h1> }

                {order.status === 'counted' &&
                <h1>Cycle count is finished!</h1> }

            </div>

        </div>

        <div className = "orderupdate">

            <ul>
                <li>The Warehouse Management System has been updated</li>
                <li>Your manager has been notified of your success!</li>
                { order.status === 'received' &&
                <li>A new job has been added: Put Away Incoming Shipment Purchase Order {order.id}#</li> }
                { order.status !== 'received' &&
                <li>This job has been cleared from your queue</li> }
            </ul>

        </div>

        {
            order.status === 'received' &&
            <>
                <button className = "beginreceiving" style = {{'width' : '60%'}}
                onClick = { () => {
                    fetchOrders()
                    showOrder(order, number) 
                }}
                >Put away now</button>

                <button className = "putawaylater"
                onClick = { () => {
                    fetchOrders()
                    setActiveNavItem('') 
                }}>
                Put away later</button>
            </>
        }

        {
            order.status !== 'received' &&
            <button className = "beginreceiving" style = {{'width' : '60%'}}
            onClick = { () => {
                fetchOrders()
                setActiveNavItem('') 
            }}>
            Return home</button>
        }



        </div>

    )
}