import React, { useState, useEffect } from 'react'
import Inv from './Inv'
import Count from './Count'
import Replenish from './Replenish'
import ReplenishPopup from './ReplenishPopup'
import ReplenishOrderConfirm from './ReplenishOrderConfirm'
import axios from 'axios'

export default function WMS({ user, showOrder }){

    const [activeTab, setActiveTab] = useState('inv')
    const [inv, setInv] = useState()
    const [popup, setPopup] = useState(false)
    const [replenishItem, setReplenishItem] = useState(false)
    const [confirmReplenish, setConfirmReplenish] = useState(false)

    const isInvActive = (activeTab === 'inv') ? 'active' : ''
    const isCountActive = (activeTab === 'count') ? 'active' : ''
    const isReplenishActive = (activeTab === 'replenish') ? 'active' : ''    

    useEffect( () => {
        fetchInv()
    }, [])    

    const fetchInv = async () => {
        const res = await axios.post(`/getinv/${user.id}`)
        setInv(res.data.data)
    }

    const replenishPopup = item => {
        if (!popup)
        setReplenishItem(item)
        setPopup(true)
    }

    const requestReplenishOrder = async (item, quantity) => {
        await axios.put(`/replenishproduct/${item.id}`)
        setConfirmReplenish(true)
        fetchInv()
    }

    return(

        <div className = "wms">

            {
                confirmReplenish &&
                <ReplenishOrderConfirm item = {replenishItem} />
            }

            { 
                popup &&
                <ReplenishPopup item = {replenishItem} request = {requestReplenishOrder} setPopup = {setPopup} />
            }

            <h1 className="bigheader">Warehouse Management System</h1>

            <div className = "ordersbox">

                <div className = "ordersboxtabs">

                    <div
                    onClick = { () => setActiveTab('inv')}
                    className ={`ordersboxtab ${isInvActive}`} style = {{'width' : '33.3%'}}>Current Inventory</div>

                    <div
                    onClick = { () => setActiveTab('count')}
                    className = {`ordersboxtab ${isCountActive}`} style = {{'width' : '33.3%'}}>Counting</div>

                    <div
                    onClick = { () => setActiveTab('replenish')}
                    className = {`ordersboxtab ${isReplenishActive}`} style = {{'width' : '33.3%', 'borderRight' : 0}}>Replenishment Orders</div>

                </div>

            </div>

            {
                activeTab === 'inv' &&
                <Inv inv = {inv} />
            }

            {
                activeTab === 'count' &&
                <Count />
            }

            {
                activeTab === 'replenish' &&
                <Replenish inv = {inv}
                popup = {replenishPopup}
                showOrder = {showOrder}
                request = {requestReplenishOrder} />
            }

        </div>

    )
}