import React, { useState, useEffect } from 'react'
import './receiving.css'
import MobileDashHeader from './MobileDashHeader'
import OrderDetails from './OrderDetails'
import TodayJobs from './TodayJobs'
import OrderScanner from './OrderScanner'
import OrderComplete from './OrderComplete'
import avatar from '../images/avatar.png'
import axios from 'axios'
import Quagga from './Quagga'

export default function Receiving() {

    const [display, setDisplay] = useState('')
    const [orders, setOrders] = useState()
    const [currentOrder, setCurrentOrder] = useState()
    const [currentOrderNumber, setCurrentOrderNumber] = useState()
    const [currentOrderInv, setCurrentOrderInv] = useState()
    const [currentPieces, setCurrentPieces] = useState()
    const [error, setError] = useState()    
    
    useEffect( () => {
        fetchOrders()        
    }, [])

    const fetchOrders = async () => {
        try {
            const res = await axios.post(`/getwarehouseorders/2`)
            setOrders(res.data.data.filter( order => order.status === 'active' || order.status === 'received'))
        }
        catch {
            setError('Something went wrong. Please reload the page.')
        }
    }    

    const fetchOrderInv = async order => {
        let res = await axios.post(`/getorderinv/${order.id}`)
        setCurrentOrderInv(res.data.data)        
    }

    const showOrder = (order, number) => {
        setCurrentOrder(order)
        setCurrentOrderNumber(number)
        setDisplay('details')
    }

    const receivedOrder = async order => {
        await axios.put(`updateorderstatus/${order.id}`, {
            status: 'received'
        })
        const res = await axios.post(`getorderbyid/${order.id}`)
        setCurrentOrder(res.data.data[0])
        setDisplay('complete')        
    }

    const putAwayOrder = async order => {
        await axios.put(`updateorderstatus/${order.id}`, {
        status: 'put away'
        })
        const res = await axios.post(`getorderbyid/${order.id}`)
        setCurrentOrder(res.data.data[0])
        setDisplay('complete')
    }

    const showScanner = (orderInv, pieces) => {
        setCurrentOrderInv(orderInv)
        setCurrentPieces(pieces)
        setDisplay('scanner')
    }
    
    return( 
        
        <div className="receiving">

            <MobileDashHeader avatar = {avatar} />

            <Quagga />

            {
                error &&
                <h1 className = "error">{error}</h1>
            }
        
            {
                !error && !display &&
                <TodayJobs
                avatar = {avatar}
                showOrder = {showOrder}
                orders = {orders} />
            }

            {
                display === 'details' &&
                <OrderDetails
                order = {currentOrder}
                fetchOrderInv = {fetchOrderInv}
                orderInv = {currentOrderInv}
                number = {currentOrderNumber}
                showScanner = {showScanner}
                setDisplay = {setDisplay} />
            }

            {
                display === 'scanner' &&
                <OrderScanner
                setDisplay = {setDisplay}
                orderInv = {currentOrderInv}
                fetchOrderInv = {fetchOrderInv}
                putAwayOrder = {putAwayOrder}
                receivedOrder = {receivedOrder}
                number = {currentOrderNumber}
                order = {currentOrder}
                pieces = {currentPieces} />
            }

            {
                display === 'complete' &&
                <OrderComplete
                setDisplay = {setDisplay}
                order = {currentOrder} 
                showOrder = {showOrder}
                fetchOrders = {fetchOrders}
                number = {currentOrderNumber} />
            }
            
        </div>

    )
}