import React from 'react'
import './WMS.css'
import WMSLanding from './WMSLanding'
import Manager from './Manager'
import BA from './BA'
import WMS from './WMS'
import OrderDetails from './OrderDetails';

export default function Warehouse({ activeNavItem, setActiveNavItem }){

    return(

        <div className="cop">

        {
            !activeNavItem &&
            <WMSLanding setActiveNavItem = {setActiveNavItem} />
        }

        { 
            activeNavItem === 'manager' &&
            <Manager setActiveNavItem = {setActiveNavItem} />
        }

        {
            activeNavItem === 'wms' &&
            <WMS setActiveNavItem = {setActiveNavItem} />
        }

        {
            activeNavItem === 'ba' &&
            <BA setActiveNavItem = {setActiveNavItem} />
        }

        {
            activeNavItem === 'orderdetails' &&
            <OrderDetails setActiveNavItem = {setActiveNavItem} />
        }


        </div>

    )
}