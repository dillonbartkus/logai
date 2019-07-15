import React, { useState } from 'react'
import './dashboard.css'
import COP from './COP/COP'
import DashHeader from './DashHeader'
import SideNav from './SideNav'

export default function Dashboard() {

  const [activeNavItem, setActiveNavItem] = useState()  

    return (

      <div className="dashboard">

      <DashHeader setActiveNavItem = {setActiveNavItem} />

      {
        activeNavItem === 'checkout' ||
        <SideNav activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />
      }

      <COP activeNavItem = {activeNavItem} setActiveNavItem = {setActiveNavItem} />

      </div>
      
    )
}