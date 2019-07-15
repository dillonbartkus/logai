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

    const [recentlyPlacedOrder, setRecentlyPlacedOrder] = useState(true)
    const [cart, setCart] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState([])

    useEffect( () => {
        fetchCart()
    }, [])

    const orderWasPlaced = () => {
        setRecentlyPlacedOrder(true)
        setActiveNavItem('')
    }

    setTimeout( () => setRecentlyPlacedOrder(false), 5000 )
    
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

    const fetchCart = async () => {
        let res = await axios.post(`/cart/1`)
        setCart(res.data.data)
    }

    const addToCart = async (item, quantity) => {
        if(cart.length === 0){
            addItem(item, quantity)
        }
        else if(cart.length > 0){
        const filter = cart.filter( product => {
            if (product.id === item.id){
                changeQuantity(item, product, quantity)
                return true
            }
        })
        if (filter.length === 0){
            addItem(item, quantity)
        }
        
      } 
    }

    const addItem = async (item, quantity) => {
        await axios.post(`/addtocart/1`, {
            item_id: item.id,
            item_quantity: quantity
        })
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


    return(

        <div className="cop">

            {
                recentlyPlacedOrder &&

                <div className = "orderplaced">
                
                <img src = {balloons} alt = ''></img>

                <div>
                    <h2 className="orderheader">Your order request has been sent!</h2>
                    <p>Purchase Order # 15296</p>
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
                cart = {cart} />
            }

            {
            activeNavItem === 'checkout' &&
                <Checkout
                cart = {cart}
                time = {time}
                date = {date}
                setDate = {setDate}
                handleTimeSelect = {handleTimeSelect}
                orderWasPlaced = {orderWasPlaced} />
            }

        </div>
    )
}