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
import OrderDetails from './OrderDetails'

export default function COP({ activeNavItem, setActiveNavItem, fetch }) {

    const [recentlyPlacedOrder, setRecentlyPlacedOrder] = useState(false)
    const [orderAddress, setOrderAddress] = useState({
        name: '',
        streetnamenumber: '',
        city: '',
        state: '',
        zip: ''
    })
    const [dates, setDates] = useState({
        first: '',
        second: '',
        third: ''
    })
    const [times, setTimes] = useState({
        first: [],
        second: [],
        third: []
    })
    const [paymentInfo, setPaymentInfo] = useState({
        cardholder: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvc: ''
    })
    const [cart, setCart] = useState()
    const [orders, setOrders] = useState()
    const [recentOrderId, setRecentOrderId] = useState()
    let subtotal = 0

    useEffect( () => {
        fetchCart()
        fetchOrders()
    }, [])    

    const fetchCart = async () => {
        const res = await axios.post(`/cart/1`)
        setCart(res.data.data)
    }

    const updateSubtotal = () => {
        if(cart) cart.forEach( item => subtotal += (item.price * item.item_quantity) )
    }

    const fetchOrders = async () => {
        const res = await axios.post(`/getallcustomerorders/${1}`)
        setOrders(res.data.data)
    }    
    
    // Add customer order to database as an incoming order for the warehouse.

    const orderWasPlaced = async (cart, times, dates, tax, shipping, subtotal, totalWeight) => {
        const nowDate = new Date().toLocaleString()
        const nowTime = new Date().toLocaleTimeString()
        const res = await axios.post(`/createcustomerorder`, {
            warehouse_id: 2,
            ordered_by: 1,
            date_placed: nowDate, nowTime,
            tax: tax,
            shipping: shipping,
            subtotal: subtotal,
            status: 'incoming',
            total_weight: totalWeight,
            preferred_dates: dates,
            preferred_times: times,
            delivery_address: orderAddress
        })
        addCartItemsToOrder(cart, res.data.data.id)
        setRecentOrderId(res.data.data.id)
        setRecentlyPlacedOrder(true)
        setActiveNavItem('')
    }

    // Use the id of the above order to add cart items to the order.

    const addCartItemsToOrder = async (cart, id) => {
        cart.forEach( async item => {            
            await axios.post(`/additemstoorder`, {
                item_id: item.id,
                amount_ordered: item.item_quantity,
                order_id: id
            })            
        })
    }

    const handlePaymentInfo = e => {
        console.log(e)
    }

    // function for handling the preferred delivery times.
    
    const handleTimeSelect = e => {
        const { name, value, checked } = e.target        
        if (checked) {
            setTimes({...times, [name]: [...times[name], value]})
            } 
        else {
            const remove = times[name].indexOf(e.target.value)
            times[name].splice(remove, 1)
          }
    }

    // handle the order delivery address.

    const handleDeliveryAddress = e => {
        const {name, value} = e.target
        setOrderAddress({
            ...orderAddress,
            [name] : value
        })
    }

    // Show a single order details page from the order tracker.

    const showOrder = order => {
        setRecentOrderId(order.id)
        setActiveNavItem('details')
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

            {updateSubtotal()}

            {
                recentlyPlacedOrder &&

                <div className = "orderplaced">
                
                <img src = {balloons} alt = ''></img>

                <div>
                    <h2 className="smallheader">Your order request has been sent!</h2>
                    <p>Purchase Order # {recentOrderId}</p>
                    <p>You will not be charged until the order has been finalized.</p>
                </div>

                <button
                onClick = { () => {
                    setRecentlyPlacedOrder(false)
                    setActiveNavItem('details')
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
                <TrackOrders
                showOrder = {showOrder}
                orders = {orders}
                setActiveNavItem = {setActiveNavItem} />
            }

            {
            activeNavItem === 'details' &&
                <OrderDetails
                fetch = {fetch}
                setActiveNavItem = {setActiveNavItem}
                orderId = {recentOrderId} />
            }

            {
            activeNavItem === 'history' &&
                <OrderHistory 
                orders = {orders.filter( order => order.status === 'completed' )} />
            }

            {
            activeNavItem === 'cart' &&
                <Cart
                setActiveNavItem = {setActiveNavItem}
                cart = {cart}
                fetchCart = {fetchCart}
                subtotal = {subtotal}
                changeQuantity = {changeQuantityOfCartItem}
                removeFromCart = {removeFromCart} />
            }

            {
            activeNavItem === 'checkout' &&
                <Checkout
                cart = {cart}
                times = {times}
                subtotal = {subtotal}
                handleDeliveryAddress = {handleDeliveryAddress}
                handlePaymentInfo = {handlePaymentInfo}
                orderAddress = {orderAddress}
                dates = {dates}
                setDates = {setDates}
                handleTimeSelect = {handleTimeSelect}
                changeQuantity = {changeQuantityOfCartItem}
                removeFromCart = {removeFromCart}
                orderWasPlaced = {orderWasPlaced} />
            }

        </div>
    )
}