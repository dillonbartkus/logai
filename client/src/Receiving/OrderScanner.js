import React, { useState, useEffect } from 'react'
import back from '../images/back.png'
import ScanItem from './ScanItem'
import ScanLocation from './ScanLocation'
import axios from 'axios'

export default function OrderScanner({ order, orderInv, setDisplay, number, pieces, receivedOrder, putAwayOrder, fetchOrderInv }) {

    const [progress, setProgress] = useState(0)
    const [currentItem, setCurrentItem] = useState()
    const [scanningLocation, setScanningLocation] = useState(false)
    let [counter, setCounter] = useState(0)

    useEffect( () => {
        setCurrentItem(orderInv[counter])
        if(order.status === 'received') {
            let count = 0
            let putAway = orderInv.filter( item => item.put_away)
            putAway.forEach( item => count += item.amount_ordered )
            setProgress(count)
        }
    }, [])

    const nextItem = () => {
        setCounter(counter += 1)
        setCurrentItem(orderInv[counter])
    }

    const scanItemLocation = item => {
        setCurrentItem(item)
        setScanningLocation(true)
    }

    const isPutAway = async item => {
        await axios.put(`/orderitemisputaway`, {
            item_id : item.id,
            order_id: order.id
        })
        fetchOrderInv(order)
        setScanningLocation(false)
    }

    return(

        <div className = "orderscanner">

            <div className = "backtoorder" style = {{'width' : '75%'}}
            onClick = { () => setDisplay('details')} >
                <img src = {back} alt = 'back' />
                <span>Back</span>
            </div>

            <div className = "reportissue"
            onClick = { () => alert('reported!') }>
            Report an issue</div>

            <div className = "receieveoverview">
                <div className = "jobnumber" style = {{'margin' : '0 3%'}}>{number}</div>
                <h1>{order.status === 'active' ? 'Receive' : 'Put Away' }</h1>
                <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>Incoming Shipment Purchase Order #{order.id}</h1>
            </div>

            <h1 className = "progresstext"> {progress} / {pieces} </h1>
            <progress
            value = {progress}
            max = {pieces}
            >
            </progress>

            {
                scanningLocation &&
                <ScanItem isPutAway = {isPutAway} scanningLocation = {scanningLocation} item = {currentItem} progress = {progress} setProgress = {setProgress} pieces = {pieces} receivedOrder = {receivedOrder} />
            }

            {
                order.status === 'active' && !scanningLocation &&
                <ScanItem nextItem = {nextItem} item = {currentItem} progress = {progress} setProgress = {setProgress} pieces = {pieces} order = {order} receivedOrder = {receivedOrder} />
            }

            {
                order.status === 'received' && !scanningLocation &&
                orderInv.map( (item, id) => <ScanLocation scanItemLocation = {scanItemLocation} item = {item} key = {id} /> )
            }

            {
                order.status === 'received' && progress === pieces && !scanningLocation &&
                <button
                className = "beginreceiving"
                onClick = { () => putAwayOrder(order) }
                >Mark put-away complete</button>
            }

        </div>

    )
}