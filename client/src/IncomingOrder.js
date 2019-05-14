import React, { useState, useEffect } from 'react'
import axios from 'axios'

const IncomingOrder = props => {

    const [itemData, setItemData] = useState()

    const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    useEffect( () => {
        getItemData()
    }, [])

    const getItemData = async () => {
        if (props.order) {
            const res = await axios.post(`/getorderinv/${props.order.id}`)
            await setItemData(res.data.data)
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
        return itemData.map( item => {
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
                {getOrderWeight()}

                <p>Received from: {props.order.received_from}</p>
                <p>Receieved Date - {props.order.date_received}</p>

                <button
                
                >Confirm Order</button>

        </div>
    )
}

export default IncomingOrder