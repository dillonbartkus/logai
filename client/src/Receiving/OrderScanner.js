import React, { useState, useEffect } from 'react'
import back from '../images/back.png'
import ScanItem from './ScanItem'
import ScanLocation from './ScanLocation'
import axios from 'axios'

export default function OrderScanner({ order, check, orderInv, setActiveNavItem, number, pieces, receivedOrder, completeOrder, fetchOrderInv }) {

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
        if(order.status === 'active') {
            let count = 0
            let picked = orderInv.filter( item => item.picked)
            picked.forEach( item => count += item.picked )
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

    const isCompleted = async item => {
        await axios.put(`/orderitemiscompleted`, {
            item_id : item.id,
            order_id: order.id
        })
        fetchOrderInv(order)
        setScanningLocation(false)
    }

    return(

        <div className = "orderscanner">

            <div className = "backtoorder" style = {{'width' : '75%'}}
            onClick = { () => setActiveNavItem('details')} >
                <img src = {back} alt = 'back' />
                <h4>Back</h4>
            </div>

            <div className = "reportissue"
            onClick = { () => alert('reported!') }>
            Report an issue</div>

            <div className = "receieveoverview">
                <div className = "jobnumber" style = {{'margin' : '0 3%'}}>{number}</div>

                <h1> {order.status === 'active' && 'Pick' }
                {order.status === 'receiving' && 'Receive' }
                {order.status === 'received' && 'Put Away' }
                {order.status === 'count' && 'Count' } </h1>

                {order.status !== 'count' && <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}> {order.status === 'active' ? 'Customer' : 'Incoming Shipment'} Purchase Order #{order.id}</h1> }
                {order.status === 'count' && <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}> Cycle Count #{order.id}</h1> }
            </div>

            <h1 className = "progresstext"> {progress} / {pieces} </h1>
            <progress
            value = {progress}
            max = {pieces}
            >
            </progress>

            {
                scanningLocation &&
                <ScanItem check = {check} isCompleted = {isCompleted} scanningLocation = {scanningLocation} item = {currentItem} progress = {progress} setProgress = {setProgress} order = {order} pieces = {pieces} receivedOrder = {receivedOrder} />
            }

            {
                // Receive products only
                order.status === 'receiving' && !scanningLocation &&
                <ScanItem nextItem = {nextItem} item = {currentItem} progress = {progress} setProgress = {setProgress} pieces = {pieces} order = {order} receivedOrder = {receivedOrder} />
            }

            {
                order.status !== 'receiving' && !scanningLocation &&
                orderInv.map( (item, id) => <ScanLocation scanItemLocation = {scanItemLocation} item = {item} order = {order} key = {id} /> )
            }

            {
                order.status !== 'receiving' && progress === pieces && !scanningLocation &&
                <button
                className = "beginreceiving"
                onClick = { () => completeOrder(order) }>
                {order.status === 'active' && 'Mark picking complete'}
                {order.status === 'received' && 'Mark put-away complete'}
                {order.status === 'count' && 'Mark cycle count complete'}
                </button>
            }

        </div>

    )
}