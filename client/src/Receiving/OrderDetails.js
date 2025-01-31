import React, { useEffect, useState } from 'react'
import ProductCategory from './ProductCategory'
import back from '../images/back.png'

export default function OrderDetails({ order, setActiveNavItem, number, showScanner, fetchOrderInv, orderInv }) {

    const [pieces, setPieces] = useState()

    useEffect( () => {
        fetchOrderInv(order)
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

    const filterCategories = () => {
        if (orderInv){
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
    }}

    const filterItemLocations = () => {
        if (orderInv){
        let locationsArray = []
        orderInv.forEach( item => {
            if (locationsArray.includes(item.location)){
                return
            } else {
                locationsArray.push(item.location)
            }
        })
        return locationsArray.map( loc => <h1 key = {loc} style = {{'fontWeight' : 400}}>{loc}</h1> )
    }}
    
    return(

        <div className = "receiveorder">

            <div className = "backtoorder"
            onClick = { () => setActiveNavItem('')} >
                <img src = {back} alt = 'back' />
                <h4>Back</h4>
            </div>

            <div className = "receieveoverview">
                <div className = "jobnumber" style = {{'margin' : '0 3%'}}>{number}</div>

                <h1> {order.status === 'active' && 'Pick' }
                {order.status === 'receiving' && 'Receive'}
                {order.status === 'received' && 'Put away'}
                {order.status === 'count' && 'Count'} </h1>

                {order.status !== 'count' &&
                <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>{order.status === 'active' ? 'Customer' : 'Incoming Shipment'} Purchase Order #{order.id}</h1>
                }
                {order.status === 'count' &&
                <h1 style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>Cycle Count #{order.id}</h1>
                }


            </div>

            <h1>Summary</h1>

            <div className = "receivesummary">

                {
                    order.status !== 'count' &&
                    <h1># Pieces: <span style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>{pieces}</span> </h1>
                }

                {
                    order.status === 'count' &&
                    <h1># Items: <span style = {{'fontWeight' : 500, 'marginLeft' : '2%'}}>{pieces}</span> </h1>
                }

                <h1>Product Types:</h1>

                {filterCategories()}

                {
                    order.status !== 'receiving' &&

                    <div className = "locations">
                        <div>
                            <h1>Locations:</h1>
                        </div>
                        <div>
                            {filterItemLocations()}
                        </div>
                    </div>
                }

            </div>

            <button className = "beginreceiving"
            onClick = { () => showScanner(orderInv, pieces) } >
            {order.status === 'active' && 'Begin picking' }
            {order.status === 'receiving' && 'Begin receiving'}
            {order.status === 'received' && 'Begin putting away'}
            {order.status === 'count' && 'Begin counting'}
            </button>

        </div>

    )
}