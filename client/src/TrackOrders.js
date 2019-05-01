import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TrackOrders = props => {

    const [orderData, setOrderData] = useState(null)

    const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    useEffect( () => {
        fetchOrderInv()
    }, [])

    const fetchOrderInv = async () => {
        const res = await axios.post(`/getorderinv/${props.userData.id}`)
        setOrderData(res.data.data)
    }

     const renderOrders = () => {
         if (orderData) {
         return orderData.map( (order, id) => {
             console.log(order);
             let fulfilled = (order.fulfilled) ? 'Yes' : 'No'
            return (
                <div className = "order" key = {id}>
                    <div className = "invitem">
                        <img style = {imgstyle} alt = {id} src = {order.picture} />
                        SKU# - {order.sku} - 
                        {order.name} - 
                        {order.item1amount} Units / {order.amount} Available
                    </div>
                <p>Ordered by - {order.orderer}</p>
                <p>Ordered on - {order.date_ordered}</p>
                <p>Fulfilled - {fulfilled}</p>
                
                </div>
            )
         })
        }
     }

    return (

        <div className = 'trackorders'>
        <h3>Your Orders:</h3>
        {renderOrders()}
        </div>
    )
}

export default TrackOrders