import React, { useState, useEffect } from 'react'
import './receiving.css'
import MobileDashHeader from './MobileDashHeader'
import ReceiveOrder from './ReceiveOrder'
import TodayJobs from './TodayJobs'
import avatar from '../images/avatar.png'
import axios from 'axios'
import OrderScanner from './OrderScanner';
import SERVERURL from '../config'
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
            const res = await axios.post(`${SERVERURL}/getwarehouseorders/2`)
            setOrders(res.data.data.filter( order => order.status === 'active'))
        }
        catch {
            setError('Something went wrong. Please reload the page.')
        }
    }

    const showOrder = (order, number) => {
        setCurrentOrder(order)
        setCurrentOrderNumber(number)
        setDisplay('details')
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
                <ReceiveOrder
                order = {currentOrder}
                number = {currentOrderNumber}
                showScanner = {showScanner}
                setDisplay = {setDisplay} />
            }

            {
                display === 'scanner' &&
                <OrderScanner
                setDisplay = {setDisplay}
                number = {currentOrderNumber}
                order = {currentOrder}
                pieces = {currentPieces}
                orderInv = {currentOrderInv} />
            }
            
        </div>

    )
}