import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddInv from './AddInv'
import TrackInv from './TrackInv'
import TrackOrders from './TrackOrders'

const WMS = props => {

    const [trackInv, setTrackInv] = useState(true)
    const [addInv, setAddInv] = useState(false)
    const [trackOrders, setTrackOrders] = useState(false)
    const [inv, setInv] = useState(null)
    const [orders, setOrders] = useState(null)

    useEffect( () => {
        fetchInv()
        fetchOrders()
    }, [])

    const fetchInv = async () => {
        let res = await axios.post(`/getinv/${props.userData.id}`)
        setInv(res.data.data);
    }

    const fetchOrders = async () => {
        let res = await axios.post(`/getorders/${props.userData.id}`)
        setOrders(res.data.data);
      }

    return (

      <div className = 'wms'>

      <div className = "wmsbuttons">

            <button
            className = "dashbutton"
            onClick = { () => {
                setAddInv(false)
                setTrackInv(true)
                setTrackOrders(false)
            }}
            >
            Track Inventory</button>

            <button
            className = "dashbutton"
            onClick = { () => {
                setAddInv(true)
                setTrackInv(false)
                setTrackOrders(false)
            }}
            >
            Edit Inventory</button>

            <button
            className = "dashbutton"
            onClick = { () => {
                setAddInv(false)
                setTrackInv(false)
                setTrackOrders(true)
            }}
            >
            Track Orders</button>

            </div>


            {
                trackInv &&
                <TrackInv userData = {props.userData} inv = {inv} />
            }

            {
                addInv &&
                <AddInv userData = {props.userData} inv = {inv} />
            }
            
            {
                trackOrders &&
                <TrackOrders userData = {props.userData} inv = {inv} orders = {orders} />
            }
            
      </div>

    )
  }

export default WMS;
