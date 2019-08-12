import React, { useState } from 'react'
import camera from '../images/camera.png'

export default function ScanLocation({ item, order, scanItemLocation }) {

    const [details, setDetails] = useState(false)
    
    return(

        <>

        { !item.completed &&

        <div className = "scanlocation">

            <div>
                <div>
                    <h1>Product Type</h1>
                    <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.type} </h1>
                </div>

                <div>
                    <h1>Product ID</h1>
                    <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.id} </h1>
                </div>

                <div>
                    <h1>Product Name</h1>
                    <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.name} </h1>
                </div>

                <div>
                    <h1>SKU</h1>
                    <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.sku} </h1>
                </div>

                <div>
                    <h1>Quantity</h1>
                    <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.amount_ordered} </h1>
                </div>
            </div>

            <div
            onClick = { () => scanItemLocation(item) } >
                <img src = {camera} alt = '' />
                <h1>Scan {order.status === 'active' ? 'product' : 'location'}</h1>

            </div>

        </div> }

        {/* ----------------------------------- */}

        { item.completed && !details &&

        <div className = "itemputaway">

            <div>
                <h1>{item.sku} {item.name} Case of 24 units</h1>
                <h1 style = {{'fontWeight' : 500}}>{item.location}</h1>
            </div>

            <h1
            onClick = {() => setDetails(!details) }
            >(View details)</h1>

        </div> }

        { details &&
               <div className = "scanlocation">

               <div>
                   <div>
                       <h1>Product Type</h1>
                       <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.type} </h1>
                   </div>
   
                   <div>
                       <h1>Product ID</h1>
                       <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.id} </h1>
                   </div>
   
                   <div>
                       <h1>Product Name</h1>
                       <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.name} </h1>
                   </div>
   
                   <div>
                       <h1>SKU</h1>
                       <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.sku} </h1>
                   </div>
   
                   <div>
                       <h1>Quantity</h1>
                       <h1 style = {{'fontWeight' : 500, 'marginLeft' : '5%'}}> {item.amount_ordered} </h1>
                   </div>
               </div>

               <div className = "itemputaway" style = {{'width' : '30%', 'justifyContent' : 'center'}}>
               <h1
                onClick = {() => setDetails(!details) }
                >(Close details)</h1>
                </div> 

               </div>
        }

        </>

    )
}