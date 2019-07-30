import React, { useEffect, useState } from 'react'
import ProductCategory from './ProductCategory'
import axios from 'axios'
import back from '../images/back.png'

export default function ReceiveOrder({ order, setDisplay, number, showScanner }) {

    const [orderInv, setOrderInv] = useState()
    const [pieces, setPieces] = useState()

    useEffect( () => {
        fetchOrderInv()
    }, [])

    useEffect( () => {
        if(orderInv){
            let total = 0
            orderInv.forEach( item => {            
                total += item.amount_ordered
            })
            setPieces(total)
        }
    })

    const fetchOrderInv = async () => {
        let res = await axios.post(`/getorderinv/${order.id}`)
        setOrderInv(res.data.data)
    }

    const filterCategories = () => {
        let categoryArray = []
        orderInv.forEach( item => {
            if (categoryArray.includes(item.type)){
                return
            } else {
                categoryArray.push(item.type)
            }
        })
        return categoryArray.map( (category, id) => {
            return <ProductCategory items = {orderInv.filter( item => item.type === category )} category = {category} key = {id} />
        })
    }
    
    return(

        <div className = "receiveorder">

            <div className = "backtoorder"
            onClick = { () => setDisplay('')} >
                <img src = {back} alt = 'back' />
                <span>Back</span>
            </div>

            <div className = "receieveoverview">
                <div className = "jobnumber" style = {{'margin' : '0 3%'}}>{number}</div>
                <h1>Receive</h1>
                <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>Incoming Shipment Purchase Order #{order.id}</h1>
            </div>

            <h1>Summary</h1>

            <div className = "receivesummary">

                <h1># Pieces: <span style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>{pieces}</span> </h1>

                <h1>Product Types:</h1>

            {
                orderInv &&
                filterCategories()
            }

            </div>

            <button className = "beginreceiving"
            onClick = { () => showScanner(orderInv, pieces) }
            >
            Begin receiving
            </button>

        </div>

    )
}