import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CompletedOrder = props => {

    const [itemData, setItemData] = useState()

    const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    useEffect( () => {
        getItemData()
    }, [])

    const getItemData = async () => {
        if (props.order){
            const res = await axios.post(`/getorderinv/${props.order.id}`)
            setItemData(res.data.data)
        }
    }

    const getOrderWeight = () => {
        if (itemData) {
            let totalWeight = 0;
            itemData.forEach( item => {
                 let weight = item.weight * item.item_amount
                 totalWeight += weight
            })
            return <p>Total Weight: {totalWeight} Lbs. </p>
        }
    }

    const renderItemData = () => {
        if (itemData)
        return itemData.map ( item => {
            let weight = item.item_amount * item.weight
            return (
            <div className = "orderitem" key = {item.id}>
            <img style = {imgstyle} alt = {item.name} src = {item.picture} />
            <p>{item.name}</p>
            <p>SKU# - {item.sku}</p>
            <p>{item.item_amount} units</p>
            <p>Weight: {weight} lbs</p>
            </div>
            )
        })
    }
    
    return (

        <div className = 'order'>

                {renderItemData()}

                <div className = "orderinfo">
                <p>Order Type: {props.order.status}</p>
                {getOrderWeight()}
                <p>Customer - {props.order.going_to}</p>
                <p>Packed on - {props.order.date_ready} by {props.order.employee}</p>
                </div>

                <div className = "orderbuttons">
                <button
                
                >
                View Invoice</button>

                <button
                
                >
                Track Order</button>
                </div>

        </div>
    )
}

export default CompletedOrder