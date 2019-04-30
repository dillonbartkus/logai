import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TrackOrders = props => {

    const [orders, setOrders] = useState(null)

    useEffect( () => {
        fetchOrders()
       }, [])
   
     const fetchOrders = async () => {
       let res = await axios.post(`/getorders/${props.userData.id}`)
       setOrders(res.data.data);
     }

     const renderOrders = () => {
         if (orders) {
         return orders.map( (order, id) => {
            return (
                <div className = "order" key = {id}>
                {order.orderer} {order.date_ordered}
                {order.content1}
                </div>
            )
         })
        }
     }

     console.log(orders)

    return (

        <div className = 'trackorders'>
        Your Orders:
        {renderOrders()}
        </div>
    )
}

export default TrackOrders