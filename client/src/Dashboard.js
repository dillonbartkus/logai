import React, { useState } from 'react'
import './dashboard.css'
import Customer from './COP/Customer'
import Warehouse from './WMS/Warehouse'
import DashHeader from './DashHeader'
import SideNav from './SideNav'

export default function Dashboard() {

  const [activeNavItem, setActiveNavItem] = useState('')  

    return (

      <div className="dashboard">

      <DashHeader setActiveNavItem = {setActiveNavItem} />

      {
        activeNavItem === 'checkout' ||
        <SideNav activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      }

      <Customer activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />

      {/* <Warehouse activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} /> */}

      </div>
      
    )
}