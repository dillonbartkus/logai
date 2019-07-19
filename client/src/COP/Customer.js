import React, { useState, useEffect } from 'react'
import './COP.css'
import balloons from '../images/balloons.png'
import axios from 'axios'
import COPLanding from './COPLanding'
import CreateOrder from './CreateOrder'
import OrderHistory from './OrderHistory'
import TrackOrders from './TrackOrders'
import Cart from './Cart'
import Checkout from './Checkout'

export default function COP({ activeNavItem, setActiveNavItem }) {

    const [recentlyPlacedOrder, setRecentlyPlacedOrder] = useState(false)
    const [date, setDate] = useState()
    const [time, setTime] = useState([])
    const [cart, setCart] = useState()
    const [recentOrderId, setRecentOrderId] = useState()

    useEffect( () => {
        fetchCart()        
    }, [])    

    const fetchCart = async () => {
        let res = await axios.post(`/cart/1`)
        setCart(res.data.data)
    }

    const orderWasPlaced = async (cart, time, date) => {
        const res = await axios.post(`/createcustomerorder`, {
            warehouse_id: 2,
            ordered_by: 1,
            status: 'incoming',
            preferred_date: date,
            preferred_times: time,
            delivery_address: '123 Fake st NY NY'
        })
        addCartItemsToOrder(cart, res.data.data.id)
        setRecentOrderId(res.data.data.id)
        setRecentlyPlacedOrder(true)
        setActiveNavItem('')
    }

    const addCartItemsToOrder = async (cart, id) => {
        cart.forEach( async item => {            
            await axios.post(`/additemstoorder`, {
                item_id: item.id,
                item_amount: item.item_quantity,
                order_id: id
            })            
        })
    }
    
    const handleTimeSelect = e => {
        if (e.target.checked){
            const  newTime = [...time , e.target.value]
            setTime (newTime);
            } 
        else {
            let remove = time.indexOf(e.target.value)
            time.splice(remove, 1)
          }
    }

    const addToCart = (item, quantity) => {
        if(cart.length === 0){
            addItem(item, quantity)
        }
        else if(cart.length > 0){
        const filter = cart.filter( product => {
            if (product.id === item.id){
                changeQuantity(item, product, quantity)
                return true
            }
            return false
        })
        if (filter.length === 0){
            addItem(item, quantity)
        }
        
      }
      fetchCart()
    }

    const addItem = async (item, quantity) => {
        await axios.post(`/addtocart/1`, {
            item_id: item.id,
            item_quantity: quantity
        })
        fetchCart()
    }

    const removeFromCart = async item => {        
        await axios.delete(`/deletecartitem/${item.id}`)
        fetchCart()
    }

    const changeQuantity = async (item, product, quantity) => {
        let newQuantity = product.item_quantity + quantity        
        await axios.put(`/changequantity/1`, {
            item_id: item.id,
            item_quantity: newQuantity
        })
        fetchCart()
    }

    const changeQuantityOfCartItem = async (item, quantity) => {        
        await axios.put(`/changequantity/1`, {
            item_id: item.item_id,
            item_quantity: quantity
        })
        fetchCart()
    }

    return(

        <div className="cop">

            {
                recentlyPlacedOrder &&

                <div className = "orderplaced">
                
                <img src = {balloons} alt = ''></img>

                <div>
                    <h2 className="orderheader">Your order request has been sent!</h2>
                    <p>Purchase Order # {recentOrderId}</p>
                    <p>Delivery Date &amp; Time: {time} on {date} </p>
                </div>

                <button 
                onClick = { () => {
                    setRecentlyPlacedOrder(false)
                    setActiveNavItem('track')
                }}
                className="addtocart">View / Track Order</button>
                
                </div>
            }

            {
            !activeNavItem &&
                <COPLanding
                setActiveNavItem = {setActiveNavItem} />
            }

            {
            activeNavItem === 'create' &&
                <CreateOrder
                setActiveNavItem = {setActiveNavItem}
                cart = {cart}
                addToCart = {addToCart} />
            }

            {
            activeNavItem === 'track' &&
                <TrackOrders />
            }

            {
            activeNavItem === 'history' &&
                <OrderHistory />
            }

            {
            activeNavItem === 'cart' &&
                <Cart
                setActiveNavItem = {setActiveNavItem}
                cart = {cart}
                changeQuantity = {changeQuantityOfCartItem}
                removeFromCart = {removeFromCart} />
            }

            {
            activeNavItem === 'checkout' &&
                <Checkout
                cart = {cart}
                time = {time}
                date = {date}
                setDate = {setDate}
                handleTimeSelect = {handleTimeSelect}
                changeQuantity = {changeQuantityOfCartItem}
                removeFromCart = {removeFromCart}
                orderWasPlaced = {orderWasPlaced} />
            }

        </div>
    )
}