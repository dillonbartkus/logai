import React, { useState } from 'react'
import camera from '../images/camera.png'
import barcode from '../images/barcode.png'

export default function ScanItem({ item, nextItem, pieces, progress, setProgress, receivedOrder, scanningLocation, isPutAway, order }) {

    const [isScanned, setIsScanned] = useState(false)

    if(scanningLocation) return(

        <div className = "scanitem">

            <div className = "barcodescan"
            onClick = { () => {
                setIsScanned(true)
                setProgress(progress += item.amount_ordered)
            }}
            >
                {
                    !isScanned &&
                    <div>
                    <img src = {camera} alt = '' />
                    <h1>Center location barcode here</h1>
                    </div>
                }

                {
                    isScanned &&
                    <img src = {barcode} alt = '' />
                }

            </div>

            <div className = "scannerdetails">
                <h1>Product Type</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.type} </span>

                <h1>Product ID</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.id} </span>

                <h1>Product Name</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.name} </span>

                <h1>SKU</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.sku} </span>

                <h1>Quantity</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.amount_ordered} </span>

                <h1>Location</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.location} </span>

            </div>

            {
                !isScanned &&
                <div className = "beginreceiving false">
                Confirm product put away
                </div>
            }


            {
                isScanned &&

                <button className = "beginreceiving"
                onClick = { () => {
                    isPutAway(item)
                    setIsScanned(false)
                }}
                >
                Confirm product put away
                </button>
            }


        </div>
    )
    
    return(

        <div className = "scanitem">

            <div className = "barcodescan"
            onClick = { () => {
                setIsScanned(true)
                setProgress(progress += item.amount_ordered)
            }}
            >
                {
                    !isScanned &&
                    <div>
                    <img src = {camera} alt = '' />
                    <h1>Center product barcode here to receive product</h1>
                    </div>
                }

                {
                    isScanned &&
                    <img src = {barcode} alt = '' />
                }

            </div>

            <div className = "scannerdetails">
                <h1>Product Type</h1>
                <span> {isScanned && item.type} </span>

                <h1>Product ID</h1>
                <span> {isScanned && item.id} </span>

                <h1>Product Name</h1>
                <span> {isScanned && item.name} </span>

                <h1>SKU</h1>
                <span> {isScanned && item.sku} </span>

                <h1>Quantity</h1>
                <span> {isScanned && item.amount_ordered} </span>

            </div>

            {
                !isScanned &&
                <div className = "beginreceiving false">
                Scan next product
                </div>
            }


            {
                isScanned && progress < pieces &&

                <button className = "beginreceiving"
                onClick = { () => {
                    nextItem()
                    setIsScanned(false)
                }}
                >
                Scan next product
                </button>
            }

            {
                progress === pieces &&
                <button className = "beginreceiving"
                onClick = { () => {
                    receivedOrder(order)
                }}
                >
                Mark receiving complete
                </button>
            }


        </div>
    )
}