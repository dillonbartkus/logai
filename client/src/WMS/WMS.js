import React, { useState, useEffect } from 'react'
import Inv from './Inv'
import Count from './Count'
import Replenish from './Replenish'
import ReplenishPopup from './ReplenishPopup'
import ReplenishOrderConfirm from './ReplenishOrderConfirm'
import CycleCount from './CycleCount'
import Settings from './Settings'
import axios from 'axios'

export default function WMS({ user, showOrder }){

    const [activeTab, setActiveTab] = useState('inv')
    const [inv, setInv] = useState()
    const [popup, setPopup] = useState(false)
    const [replenishItem, setReplenishItem] = useState(false)
    const [confirmReplenish, setConfirmReplenish] = useState(false)

    const isInvActive = (activeTab === 'inv') ? 'active' : ''
    const isCountActive = (activeTab === 'counting') ? 'active' : ''
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

            { activeTab !== 'settings' && activeTab !== 'count' &&
                <>
                <h1 className="bigheader">Warehouse Management System</h1>

                <div className = "ordersbox">

                    <div className = "ordersboxtabs">

                        <div
                        onClick = { () => setActiveTab('inv')}
                        className ={`ordersboxtab ${isInvActive}`} style = {{'flex' : 1}}>Current Inventory</div>

                        <div
                        onClick = { () => setActiveTab('counting')}
                        className = {`ordersboxtab ${isCountActive}`} style = {{'flex' : 1}}>Counting</div>

                        <div
                        onClick = { () => setActiveTab('replenish')}
                        className = {`ordersboxtab ${isReplenishActive}`} style = {{'flex' : 1, 'borderRight' : 0}}>Replenishment Orders</div>

                    </div>

                </div>

            </> 
            }

            {   activeTab === 'settings' &&
                <Settings setActiveTab = {setActiveTab} inv = {inv} />
            }

            {   activeTab === 'count' &&
                <CycleCount setActiveTab = {setActiveTab} inv = {inv} />
            }

            {
                activeTab === 'inv' &&
                <Inv inv = {inv} />
            }

            {
                activeTab === 'counting' &&
                <Count setActiveTab = {setActiveTab} />
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