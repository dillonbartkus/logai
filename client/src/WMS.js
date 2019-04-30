import React, { useState } from 'react'
import AddInv from './AddInv'
import TrackInv from './TrackInv'
import TrackOrders from './TrackOrders'

const WMS = props => {

    const [addInv, setAddInv] = useState(false)
    const [trackInv, setTrackInv] = useState(false)
    const [trackOrders, setTrackOrders] = useState(false)
    

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
            Add Inventory</button>

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
                <TrackInv userData = {props.userData}/>
            }

            {
                addInv &&
                <AddInv userData = {props.userData}/>
            }
            
            {
                trackOrders &&
                <TrackOrders userData = {props.userData}/>
            }
            
      </div>

    )
  }

export default WMS;
