import React, { useState } from 'react'
import Today from './Today'
import Incoming from './Incoming'
import Active from './Active'
import Completed from './Completed'

export default function Manager(){

    const [activeTab, setActiveTab] = useState('today')

    const isTodayActive = (activeTab === 'today') ? 'active' : ''
    const isIncomingActive = (activeTab === 'incoming') ? 'active' : ''
    const isActiveActive = (activeTab === 'active') ? 'active' : ''
    const isCompletedActive = (activeTab === 'completed') ? 'active' : ''

    return(

        <div className="manager">

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
                        <div className="incomingordernotification incoming">5</div>
                        </div>
                    <div
                    onClick = { () => setActiveTab('active')}
                    className = {`ordersboxtab ${isActiveActive}`}>Active Orders (5)</div>
                    <div
                    style = {{'borderRight' : 'none'}}
                    onClick = { () => setActiveTab('completed')}
                    className = {`ordersboxtab ${isCompletedActive}`}>Completed Orders</div>
                </div>

                {
                    activeTab === 'today' &&
                    <Today />
                }

                {
                    activeTab === 'incoming' &&
                    <Incoming />
                }

                {
                    activeTab === 'active' &&
                    <Active />
                }

                {
                    activeTab === 'completed' &&
                    <Completed />
                }

            </div>

        </div>
        
    )
}