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
  const [employees, setEmployees] = useState()
  const [customerOrders, setCustomerOrders] = useState()
  const [incomingOrderLength, setIncomingOrderLength] = useState()
  const [activeOrderLength, setActiveOrderLength] = useState()
  const [customerOrderLength, setCustomerOrderLength] = useState()
  const [allJobs, setAllJobs] = useState()
  const [unassignedJobs, setUnassignedJobs] = useState()
  const [count, setCount] = useState(0)
  const [dropdown, setDropdown] = useState(false)
  const [assignedAlert, setAssignedAlert] = useState(false)
  const [recentlyAssignedJobs, setRecentlyAssignedJobs] = useState()
  const [recentlyAssignedEmp, setRecentlyAssignedEmp] = useState()

  useEffect( () => {
    if (user.type === 'warehouse') fetchWarehouseOrders() && fetchEmployees()
    if (user.type === 'customer') fetchCustomerOrders()
  }, [count])

  useEffect( () => {
    if (user.type === 'warehouse') getWarehouseOrderLengths()
    if (user.type === 'customer') getCustomerOrderLengths()
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [warehouseOrders, customerOrders, count])

  const fetchEmployees = async () => {
    let res = await axios.post(`/getemployees/${user.id}`)
    setEmployees(res.data.data)
  }

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
    let all = warehouseOrders.filter( order => order.status === 'active' || order.status === 'receiving' || order.status === 'received' || order.status === 'count' || order.status === 'picked' )
    setAllJobs(all)
    let unassigned = warehouseOrders.filter( order => !order.employee && order.status !== 'incoming')
    setUnassignedJobs(unassigned)    
    }
  }

  const getCustomerOrderLengths = () => {
    if(customerOrders){
    let length = customerOrders.filter( order => !order.customer_confirmed_transport && order.status === 'active' )
    setCustomerOrderLength(length.length)
    }
  }

  const assignEmployee = (emp, jobs) => {
    jobs.forEach( async job => {
      await axios.put(`/assignemployee/${job}`, {employee: emp} ) })
    fetchEmployees()
    setRecentlyAssignedJobs(jobs)
    setRecentlyAssignedEmp(emp)
    setTimeout( setCount(count + 1), 500)
    setAssignedAlert(true)
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

      <SideNav user = {user} jobs = {unassignedJobs} incomingLength = {incomingOrderLength} customerLength = {customerOrderLength}
      activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      </>
      }

      { user.type === 'customer' &&
        <Customer user = {user} fetch = {fetchCustomerOrders} confirmOrder = {confirmCustomerOrder} orders = {customerOrders}
        customerLength = {customerOrderLength} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      }

      { user.type ==='warehouse' &&
        <Warehouse user = {user} orders = {warehouseOrders} employees = {employees} incomingLength = {incomingOrderLength} jobs = {allJobs}
        activeLength = {activeOrderLength} fetchOrders = {fetchWarehouseOrders} activeNavItem = {activeNavItem} assign = {assignEmployee}
        setActiveNavItem = {setActiveNavItem} alert = {assignedAlert} setAlert = {setAssignedAlert} recentJobs = {recentlyAssignedJobs}
        recentEmp = {recentlyAssignedEmp} />
      }

      </div>
      
    )
}