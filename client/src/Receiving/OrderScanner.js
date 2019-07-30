import React, { useState } from 'react'
import back from '../images/back.png'
import camera from '../images/camera.png'

export default function OrderScanner({ order, orderInv, setDisplay, number, pieces }) {

    const [progress, setProgress] = useState(0)

    console.log(progress, pieces)

    return(

        <div className = "orderscanner">

            <div className = "backtoorder" style = {{'width' : '75%'}}
            onClick = { () => setDisplay('details')} >
                <img src = {back} alt = 'back' />
                <span>Back</span>
            </div>

            <div className = "reportissue"
            onClick = { () => alert('reported!') }
            >Report an issue</div>

            <div className = "receieveoverview">
                <div className = "jobnumber" style = {{'margin' : '0 3%'}}>{number}</div>
                <h1>Receive</h1>
                <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>Incoming Shipment Purchase Order #{order.id}</h1>
            </div>

            <h1 className = "progresstext"> {progress} / {pieces} </h1>
            <progress
            value = {progress}
            max = {pieces}
            >
            </progress>

            <div className = "barcodescan">

                <img src = {camera} alt = '' />
                <h1>Center product barcode here to receive product</h1>

            </div>

        </div>

    )
}