import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Order = props => {

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

    const renderItemData = () => {
        if (itemData)
        return itemData.map ( item => {
            let fillable = (item.item_amount < item.quantity) ? 'Yes' : 'No'
            return (
            <div className = "orderitem" key = {item.id}>
            <img style = {imgstyle} alt = {item.name} src = {item.picture} />
            <p>{item.name}</p>
            <p>{item.item_amount} units</p>
            Fillable? {fillable}
            </div>
            )
        })
    }

    return (

        <div className = 'order'>

                {renderItemData()}

                <p>Ordered by - {props.order.orderer}</p>
                <p>Ordered on - {props.order.date_ordered}</p>

                <hr></hr>

        </div>
    )
}

export default Order