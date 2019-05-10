import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Completed from './Completed'
import TrackInv from './TrackInv'
import Fulfilling from './Fulfilling'
import Incoming from './Incoming'

const WMS = props => {

    const [display, setDisplay] = useState('incoming')
    const [inv, setInv] = useState(null)
    const [fulfillingOrders, setFulfillingOrders] = useState()
    const [completedOrders, setCompletedOrders] = useState()
    const [incomingOrders, setIncomingOrders] = useState()

    useEffect( () => {
        fetchInv()
        fetchOrders()
    }, [] )

    const fetchInv = async () => {
        let res = await axios.post(`/getinv/${props.userData.id}`)
        setInv(res.data.data);
    }

    const fetchOrders = async () => {
        let res = await axios.post(`/getorders/${props.userData.id}`)        
        setFulfillingOrders(res.data.data.filter( order => order.status === 'Fulfilling'))
        setCompletedOrders(res.data.data.filter( order => order.status === 'Completed'))
        setIncomingOrders(res.data.data.filter( order => order.status === 'Incoming'))
      }      

    return (

      <div className = 'wms'>

      <div className = "wmsbuttons">

            <button
            className = "dashbutton"
            onClick = { () => {
                setDisplay('incoming')
            }}
            >
            Incoming Orders</button>

            <button
            className = "dashbutton"
            onClick = { () => {
                setDisplay('trackinv')
            }}
            >
            Track Inventory</button>

            <button
            className = "dashbutton"
            onClick = { () => {
                setDisplay('fulfilling')
            }}
            >
            Current Orders</button>

            <button
            className = "dashbutton"
            onClick = { () => {
                setDisplay('completed')
            }}
            >
            Completed Orders</button>

            </div>


            {
                display === 'incoming' && incomingOrders &&
                <Incoming userData = {props.userData} inv = {inv} orders = {incomingOrders} />
            }

            {
                display === 'trackinv' &&
                <TrackInv userData = {props.userData} inv = {inv} />
            }
            
            {
                display === 'fulfilling' &&
                <Fulfilling userData = {props.userData} inv = {inv} orders = {fulfillingOrders} />
            }

            {
                display === 'completed' &&
                <Completed userData = {props.userData} inv = {inv} orders = {completedOrders} />
            }
            
      </div>

    )
  }

export default WMS;
