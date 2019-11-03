import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SERVERURL from './config'
import Completed from './Completed'
import TrackInv from './TrackInv'
import Fulfilling from './Fulfilling'
import Incoming from './Incoming'

export default function WMS (props) {

const [display, setActiveNavItem] = useState('incoming')
const [inv, setInv] = useState()
const [fulfillingOrders, setFulfillingOrders] = useState()
const [completedOrders, setCompletedOrders] = useState()
const [incomingOrders, setIncomingOrders] = useState()

useEffect( () => {
    fetchInv()
    fetchOrders()
}, [] )

const fetchInv = async () => {
    let res = await axios.post(`${SERVERURL}/getinv/${props.userData.id}`)
    setInv(res.data.data);
}

const fetchOrders = async () => {
    let res = await axios.post(`${SERVERURL}/getorders/${props.userData.id}`)        
    setFulfillingOrders(res.data.data.filter( order => order.status === 'Fulfilling'))
    setCompletedOrders(res.data.data.filter( order => order.status === 'Completed' || order.status === 'Received'))
    setIncomingOrders(res.data.data.filter( order => order.status === 'Incoming'))
}
    
const receiveInventory = itemData => {
    itemData.forEach( async item => {
        let quantity = item.quantity + item.item_amount
        let id = item.id
        await axios.put(`${SERVERURL}/product/${id}`, { quantity: quantity } )
    })
    fetchInv()
}

const shipInventory = itemData => {
    itemData.forEach( async item => {
        let quantity = item.quantity - item.item_amount
        let id = item.id
        await axios.put(`${SERVERURL}/product/${id}`, { quantity: quantity } )
    })
    fetchInv()
}

const receiveOrder = async order => {
    await axios.put(`${SERVERURL}/order/${order.id}`, { status: 'Received' } )
    fetchOrders()
}

const shipOrder = async order => {
    await axios.put(`${SERVERURL}/order/${order.id}`, { status: 'Completed' } )
    fetchOrders()
}

return (

    <div className = 'wms'>

    <div className = "wmsbuttons">

        <button
        className = "dashbutton"
        onClick = { () => {
            setActiveNavItem('incoming')
        }}
        >
        Incoming Orders</button>

        <button
        className = "dashbutton"
        onClick = { () => {
            setActiveNavItem('trackinv')
        }}
        >
        Track Inventory</button>

        <button
        className = "dashbutton"
        onClick = { () => {
            setActiveNavItem('fulfilling')
        }}
        >
        Current Orders</button>

        <button
        className = "dashbutton"
        onClick = { () => {
            setActiveNavItem('completed')
        }}
        >
        Completed Orders</button>

        </div>


        {
            display === 'incoming' && incomingOrders &&
            <Incoming receiveInventory = {receiveInventory} receiveOrder = {receiveOrder} userData = {props.userData} inv = {inv} orders = {incomingOrders} />
        }

        {
            display === 'trackinv' &&
            <TrackInv userData = {props.userData} inv = {inv} />
        }
            
        {
            display === 'fulfilling' &&
            <Fulfilling shipInventory = {shipInventory} shipOrder = {shipOrder} userData = {props.userData} inv = {inv} orders = {fulfillingOrders} />
        }

        {
            display === 'completed' &&
            <Completed userData = {props.userData} inv = {inv} orders = {completedOrders} />
        }
            
      </div>

    )
  }
