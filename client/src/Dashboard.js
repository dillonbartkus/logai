import React, { useState, useEffect } from 'react'
import './dashboard.css'
import Customer from './COP/Customer'
import Warehouse from './WMS/Warehouse'
import DashHeader from './DashHeader'
import SideNav from './SideNav'
import Receiving from './Receiving/Receiving'
import MobileDashHeader from './MobileDashHeader'
import axios from 'axios'

export default function Dashboard( props ) {

  const user = props.location.state.userData

  const [activeNavItem, setActiveNavItem] = useState('')
  const [warehouseOrders, setWarehouseOrders] = useState()
  const [customerOrders, setCustomerOrders] = useState()
  const [incomingOrderLength, setIncomingOrderLength] = useState()
  const [activeOrderLength, setActiveOrderLength] = useState()
  const [customerOrderLength, setCustomerOrderLength] = useState()
  const [dropdown, setDropdown] = useState(false)

  useEffect( () => {
    if (user.type === 'warehouse') fetchWarehouseOrders()
    if (user.type === 'customer') fetchCustomerOrders()
  }, [])

  useEffect( () => {
    if (user.type === 'warehouse') getWarehouseOrderLengths()
    if (user.type === 'customer') getCustomerOrderLengths()
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  })

  const fetchWarehouseOrders = async () => {    
    let res = await axios.post(`/getwarehouseorders/${user.id}`)
    setWarehouseOrders(res.data.data)
  }

  const fetchCustomerOrders = async () => {
    let res = await axios.post(`/getallcustomerorders/${user.id}`)
    setCustomerOrders(res.data.data)
  }

  const confirmCustomerOrder = async orderId => {
    await axios.put(`/confirmcustomermorder/${orderId}`)
    fetchCustomerOrders()
}

  const getWarehouseOrderLengths = () => {
    if(warehouseOrders){
    let inc = warehouseOrders.filter( order => order.status === 'incoming' )
    setIncomingOrderLength(inc.length)
    let active = warehouseOrders.filter( order => order.status !== 'incoming' && order.status !== 'completed' )
    setActiveOrderLength(active.length)
    }
  }

  const getCustomerOrderLengths = () => {
    if(customerOrders){
    let length = customerOrders.filter( order => !order.customer_confirmed_transport && order.status === 'active' )
    setCustomerOrderLength(length.length)
    }
  }
  
    return (

      <div className="dashboard"
      onClick = { () => setDropdown(false) }
      >
      
      { user.type === 'employee' &&
      <>
      <MobileDashHeader dropdown = {dropdown} setDropdown = {setDropdown} setActiveNavItem = {setActiveNavItem} />

      <Receiving user = {user} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      </> 
      }

      { user.type !== 'employee' &&
      <>
      <DashHeader dropdown = {dropdown} setDropdown = {setDropdown} setActiveNavItem = {setActiveNavItem} />

      <SideNav user = {user} incomingLength = {incomingOrderLength} customerLength = {customerOrderLength} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      </>
      }

      { user.type === 'customer' &&
        <Customer user = {user} confirmOrder = {confirmCustomerOrder} orders = {customerOrders} customerLength = {customerOrderLength} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      }

      { user.type ==='warehouse' &&
        <Warehouse user = {user} orders = {warehouseOrders} incomingLength = {incomingOrderLength} activeLength = {activeOrderLength}
        fetchOrders = {fetchWarehouseOrders}  activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      }

      </div>
      
    )
}