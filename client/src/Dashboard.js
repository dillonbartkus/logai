import React from 'react'
import './dashboard.css'
// import Customer from './COP/Customer'
// import Warehouse from './WMS/Warehouse'
// import DashHeader from './DashHeader'
// import SideNav from './SideNav'
import Receiving from './Receiving/Receiving'
// import axios from 'axios'

export default function Dashboard( ) {

  // const [activeNavItem, setActiveNavItem] = useState('')
  // const [warehouseOrders, setWarehouseOrders] = useState()
  // const [customerOrders, setCustomerOrders] = useState()
  // const [incomingOrderLength, setIncomingOrderLength] = useState()
  // const [activeOrderLength, setActiveOrderLength] = useState()
  // const [customerOrderLength, setCustomerOrderLength] = useState()
  // const [dropdown, setDropdown] = useState(false)
  // const userData = props.location.state.userData

  // 
  //  Don't forget to update server calls with actual user ID!!!!
  // 

  // useEffect( () => {
    // fetchWarehouseOrders()
    // fetchCustomerOrders()
  // }, [])

  // useEffect( () => {
    // getWarehouseOrderLengths()
    // getCustomerOrderLengths()
    // window.scroll({
      // top: 0,
      // behavior: 'smooth'
    // })
  // })

  // const fetchWarehouseOrders = async () => {
  //   let res = await axios.post(`/getwarehouseorders/2`)
  //   setWarehouseOrders(res.data.data)
  // }

  // const fetchCustomerOrders = async () => {
  //   let res = await axios.post(`/getallcustomerorders/1`)
  //   setCustomerOrders(res.data.data)
  // }

  // const getWarehouseOrderLengths = () => {
  //   if(warehouseOrders){
  //   let inc = warehouseOrders.filter( order => order.status === 'incoming' )
  //   setIncomingOrderLength(inc.length)
  //   let active = warehouseOrders.filter( order => order.status === 'active' )
  //   setActiveOrderLength(active.length)
  //   }
  // }

  // const getCustomerOrderLengths = () => {
  //   if(customerOrders){
  //   let length = customerOrders.filter( order => !order.customer_confirmed_transport && order.status === 'active' )
  //   setCustomerOrderLength(length.length)
  //   }
  // }
  
    return (

      <div className="dashboard"
      // onClick = { () => setDropdown(false) }
      >

        <Receiving />

      {/* <DashHeader dropdown = {dropdown} setDropdown = {setDropdown} setActiveNavItem = {setActiveNavItem} /> */}

      {/* <SideNav incomingLength = {incomingOrderLength} customerLength = {customerOrderLength} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} /> */}

      {/* <Customer fetch = {fetchCustomerOrders} activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} /> */}

      {/* <Warehouse orders = {warehouseOrders} incomingLength = {incomingOrderLength} activeLength = {activeOrderLength} fetchOrders = {fetchWarehouseOrders}  activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} /> */}

      </div>
      
    )
}