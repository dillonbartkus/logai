import React, { useState, useEffect } from 'react'
import './dashboard.css'
import Customer from './COP/Customer'
import Warehouse from './WMS/Warehouse'
import DashHeader from './DashHeader'
import SideNav from './SideNav'
import axios from 'axios'

export default function Dashboard() {

  const [activeNavItem, setActiveNavItem] = useState('')  
  const [orders, setOrders] = useState()
  const [incomingOrderLength, setIncomingOrderLength] = useState()
  const [activeOrderLength, setActiveOrderLength] = useState()

  useEffect( () => {
    fetchOrders()
  }, [])

  useEffect( () => {
    getOrderLengths()
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  })

  const fetchOrders = async () => {
    let res = await axios.post(`/getwarehouseorders/2`)
    setOrders(res.data.data)
  }

  const getOrderLengths = () => {
    if(orders){
    let inc = orders.filter( order => order.status === 'incoming' )
    setIncomingOrderLength(inc.length)
    let active = orders.filter( order => order.status === 'active' )
    setActiveOrderLength(active.length)
    }
  }   

    return (

      <div className="dashboard">

      <DashHeader setActiveNavItem = {setActiveNavItem} />

      <SideNav incomingLength = {incomingOrderLength} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />

      {/* <Customer activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} /> */}

      <Warehouse orders = {orders} incomingLength = {incomingOrderLength} activeLength = {activeOrderLength} fetchOrders = {fetchOrders}  activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />

      </div>
      
    )
}