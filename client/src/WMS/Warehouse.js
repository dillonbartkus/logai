import React, { useState } from 'react'
import './WMS.css'
import WMSLanding from './WMSLanding'
import Manager from './Manager'
import BA from './BA'
import WMS from './WMS'
import OrderDetails from './OrderDetails'
import TransportationInfo from './TransportInfo'
import axios from 'axios'

export default function Warehouse({ activeNavItem, setActiveNavItem, orders, user, fetchOrders, incomingLength, activeLength }){

    const [toggleTransportPopup, setToggleTransportPopup] = useState(false)
    const [currentOrder, setCurrentOrder] = useState()
    const [orderPlaced, setOrderPlaced] = useState(false)

    const updateTransportInfo = async (company, driver, date, time, id) => {
        await axios.put(`/updatetransportinfo/${id}`, {
            trucking_company: company,
            truck_driver: driver,
            actual_date: date,
            actual_time: time
        })
        await axios.put(`/updateorderstatus/${id}`, {
            status: 'active'
        })
        setOrderPlaced(true)
        fetchOrders()
    }    

    const showTransportInfo = order => {
        setCurrentOrder(order)
        setToggleTransportPopup(true)
    }

    const showOrderDetails = order => {
        setCurrentOrder(order)
        setActiveNavItem('orderdetails')
    }

    return(

        <div className="cop">

        {
            !activeNavItem &&
            <WMSLanding incomingLength = {incomingLength} setActiveNavItem = {setActiveNavItem} />
        }

        { 
            activeNavItem === 'manager' &&
            <Manager setActiveNavItem = {setActiveNavItem}
            incomingLength = {incomingLength}
            activeLength = {activeLength}
            orders = {orders}
            orderPlaced = {orderPlaced}
            setOrderPlaced = {setOrderPlaced}
            currentOrder = {currentOrder}
            showOrderDetails = {showOrderDetails}
            showTransportInfo = {showTransportInfo} />
        }

        {
            activeNavItem === 'wms' &&
            <WMS showOrder = {showOrderDetails}
            user = {user} />
        }

        {
            activeNavItem === 'ba' &&
            <BA setActiveNavItem = {setActiveNavItem} />
        }

        {
            activeNavItem === 'orderdetails' &&
            <OrderDetails setActiveNavItem = {setActiveNavItem}
            order = {currentOrder}
            showTransportInfo = {showTransportInfo}
            popup = {setToggleTransportPopup} />
        }

        {
            toggleTransportPopup &&
            <TransportationInfo updateTransportInfo = {updateTransportInfo}
            order = {currentOrder}
            setActiveNavItem = {setActiveNavItem}
            popup = {setToggleTransportPopup} />
        }

        </div>

    )
}