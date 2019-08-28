import React, { useState, useEffect } from 'react'
import './receiving.css'
import OrderDetails from './OrderDetails'
import TodayJobs from './TodayJobs'
import OrderScanner from './OrderScanner'
import OrderComplete from './OrderComplete'
import avatar from '../images/avatar.png'
import axios from 'axios'
import Quagga from './Quagga'

export default function Receiving({ setActiveNavItem, activeNavItem, user }) {

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
            const res = await axios.post(`/getemployeeorders/${user.customer_of}`)
            setOrders(res.data.data.filter( order => {
                const status = order.status                
                return status === 'active' || status === 'receiving' || status === 'received' || status === 'count'
                }))
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
        setActiveNavItem('details')
    }

    const receivedOrder = async order => {
        await axios.put(`updateorderstatus/${order.id}`, {
            status: 'received'
        })
        const res = await axios.post(`getorderbyid/${order.id}`)
        setCurrentOrder(res.data.data[0])
        setActiveNavItem('complete')        
    }

    const completeOrder = async order => {
        if (order.status === 'receiving') await axios.put(`updateorderstatus/${order.id}`, {status: 'put away'})
        if (order.status === 'active') await axios.put(`updateorderstatus/${order.id}`, {status: 'picked'})
        if (order.status === 'count') await axios.put(`updateorderstatus/${order.id}`, {status: 'counted'})
        const res = await axios.post(`getorderbyid/${order.id}`)
        setCurrentOrder(res.data.data[0])
        setActiveNavItem('complete')
    }

    const showScanner = (orderInv, pieces) => {
        setCurrentOrderInv(orderInv)
        setCurrentPieces(pieces)
        setActiveNavItem('scanner')
    }
    
    return( 
        
        <div className="receiving">

            <Quagga />

            {
                error &&
                <>
                <h1 className = "error">{error}</h1>
                <button
                className = "beginreceiving"
                style = {{'animation' : 'none'}}
                onClick = {() => window.location.reload()}>
                Reload</button>
                </>
            }
        
            {
                !error && !activeNavItem &&
                <TodayJobs
                user = {user}
                avatar = {avatar}
                showOrder = {showOrder}
                orders = {orders} />
            }

            {
                activeNavItem === 'details' &&
                <OrderDetails
                order = {currentOrder}
                fetchOrderInv = {fetchOrderInv}
                orderInv = {currentOrderInv}
                number = {currentOrderNumber}
                showScanner = {showScanner}
                setActiveNavItem = {setActiveNavItem} />
            }

            {
                activeNavItem === 'scanner' &&
                <OrderScanner
                setActiveNavItem = {setActiveNavItem}
                orderInv = {currentOrderInv}
                fetchOrderInv = {fetchOrderInv}
                completeOrder = {completeOrder}
                receivedOrder = {receivedOrder}
                number = {currentOrderNumber}
                order = {currentOrder}
                pieces = {currentPieces} />
            }

            {
                activeNavItem === 'complete' &&
                <OrderComplete
                setActiveNavItem = {setActiveNavItem}
                order = {currentOrder} 
                showOrder = {showOrder}
                fetchOrders = {fetchOrders}
                number = {currentOrderNumber} />
            }
            
        </div>

    )
}