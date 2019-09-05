import React, { useState } from 'react'
import Quagga from './Quagga'

export default function ScanItem({ item, nextItem, pieces, progress, setProgress, receivedOrder, scanningLocation, isCompleted, order }) {

    const [isScanned, setIsScanned] = useState(false)

    const checkBarcode = code => {
        console.log(code, item.upc_code)
        if (code === item.upc_code) {
            setProgress(progress += item.amount_ordered)
            setIsScanned(true)
        }
    }    

    if(scanningLocation) return(

        <div className = "scanitem">

            <div className = "barcodescan">

                {
                    !isScanned &&
                    <Quagga check = {checkBarcode} />

                }

                {
                    isScanned &&
                    <h1>Scanned!</h1>
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

                {order.status !== 'count' &&
                <>
                <h1>Quantity</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.amount_ordered} </span>
                </> }

                <h1>Location</h1>
                <span style = {{'borderBottom' : 'none'}}> {item.location} </span>

                {order.status === 'count' &&
                <>
                <h1 style = {{'color' : '#FD992E' }}>Quantity</h1>
                <span> {isScanned && pieces} </span>
                </> }

            </div>

            {
                !isScanned &&
                <div className = "beginreceiving false">
                Confirm {order.status === 'active' && 'product picked'}
                {order.status === 'received' && 'product put away'}
                {order.status === 'count' && 'count'}
                </div>
            }


            {
                isScanned &&

                <button className = "beginreceiving"
                onClick = { () => {
                    isCompleted(item)
                    setIsScanned(false)
                }}
                >
                Confirm {order.status === 'active' && 'product picked'}
                {order.status === 'received' && 'product put away'}
                {order.status === 'count' && 'count'}
                </button>
            }


        </div>
    )
    
    return(

        <div className = "scanitem">

            <div className = "barcodescan"
            >
                {
                    !isScanned &&

                    <Quagga check = {checkBarcode} />

                    // <div>
                    // <img src = {camera} alt = '' />
                    // <h1>Center product barcode here</h1>
                    // </div>
                }

                {
                    isScanned &&
                    <h1>Scanned!</h1>
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