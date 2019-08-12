import React, { useState } from 'react'
import Today from './Today'
import Incoming from './Incoming'
import Active from './Active'
import Completed from './Completed'
import OrderConfirmation from './WarehouseOrderConfirmation'

export default function Manager({showTransportInfo, showOrderDetails, orders, orderPlaced, incomingLength, activeLength, setOrderPlaced, currentOrder }){

    const [activeTab, setActiveTab] = useState('today')
    const isTodayActive = (activeTab === 'today') ? 'active' : ''
    const isIncomingActive = (activeTab === 'incoming') ? 'active' : ''
    const isActiveActive = (activeTab === 'active') ? 'active' : ''
    const isCompletedActive = (activeTab === 'completed') ? 'active' : ''    

    return(

        <div className="manager">

        {
            orderPlaced &&
            <OrderConfirmation order = {currentOrder} setOrderPlaced = {setOrderPlaced} setActiveTab = {setActiveTab} />
        }

            <h1 className="bigheader">Order Manager</h1>

            <div className = "ordersbox">

                <div className = "ordersboxtabs">
                    <div
                    onClick = { () => setActiveTab('today')}
                    className ={`ordersboxtab ${isTodayActive}`}>Today's Pickups</div>
                    <div
                    onClick = { () => setActiveTab('incoming')}
                    className = {`ordersboxtab ${isIncomingActive}`}>
                        Incoming Orders
                        {
                            incomingLength > 0 &&
                            <div className="incomingordernotification incoming">{incomingLength}</div>
                        }
                        </div>
                    <div
                    onClick = { () => setActiveTab('active')}
                    className = {`ordersboxtab ${isActiveActive}`}>Active Orders <p>({activeLength})</p></div>
                    <div
                    style = {{'borderRight' : 'none'}}
                    onClick = { () => setActiveTab('completed')}
                    className = {`ordersboxtab ${isCompletedActive}`}>Completed Orders</div>
                </div>

                {
                    activeTab === 'today' &&
                    <Today
                    showOrderDetails = {showOrderDetails}
                    orders = {orders} />
                }

                {
                    activeTab === 'incoming' &&
                    <Incoming
                    orders = {orders.filter( order => order.status === 'incoming' )}
                    showTransportInfo = {showTransportInfo}
                    showOrderDetails = {showOrderDetails}
                    setActiveTab = {setActiveTab} />
                }

                {
                    activeTab === 'active' &&
                    <Active
                    orders = {orders.filter( order => order.status !== 'incoming' && order.status !== 'completed' )}
                    showOrderDetails = {showOrderDetails} />
                }

                {
                    activeTab === 'completed' &&
                    <Completed 
                    orders = {orders.filter( order => order.status === 'completed' )} />
                }

            </div>

        </div>
        
    )
}