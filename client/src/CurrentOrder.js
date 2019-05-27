import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CurrentOrder = props => {

    const [itemData, setItemData] = useState()
    const [picking, setPicking] = useState(false)
    let buttonText = picking ? 'Ship Order' : 'Start Picking'

    const imgstyle = {'height' : '4vw'}

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
        if (itemData) {
        return itemData.map ( item => {
            let FIFO = item.fifo ? 'Yes' : 'No'
            let weight = item.item_amount * item.weight
            let fillable = (item.item_amount < item.quantity) ? 'Yes' : 'No'
            let style = {'width': '2vw'}
            return (
            <div className = "orderitem" key = {item.id}>
            <img style = {imgstyle} alt = {item.name} src = {item.picture} />
            <p>{item.name}</p>

            <p>{item.item_amount} units</p>

            {
            picking &&
            <button style = {style}>+</button>
            }

            <p>{item.location}</p>
            <p>SKU# - {item.sku}</p>
            <p>Weight: {weight} lbs</p>
            <p>FIFO? {FIFO}</p>
            <p>Fillable? {fillable}</p>
            </div>
            )
        })
    }}

    return (

        <div className = 'order'>

                {renderItemData()}

                <div className = "orderinfo">
                    {getOrderWeight()}
                    <p>Ordered by - {props.order.going_to}</p>
                    <p>Ordered on - {props.order.date_received}</p>
                    <p>Must be packed by: {props.order.date_ready}</p>
                    <p>Being picked by: {props.order.employee}</p>
                </div>

                <div className = "orderbuttons">
                    <button
                    onClick = {() => {
                    if (!picking) {
                    setPicking(true)
                    }
                    if (picking) {
                    props.shipOrder(props.order)
                    props.shipInventory(itemData)
                    props.setToast(true)
                    }
                    }}
                    >
                    {buttonText}
                    </button>
                </div>

        </div>
    )
}

export default CurrentOrder