import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from './Searchbar'
import ProductList from './ProductList'
import Categories from './Categories'
import cartimg from '../images/cart.png'

export default function CreateOrder({ setActiveNavItem, cart, addToCart }) {

    const [products, setProducts] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [cartTotal, setCartTotal] = useState(0)

    useEffect( () => {
        fetchProducts()
    }, [])

    useEffect( () => {
        let total = 0
        cart.forEach( item => {            
            total += item.item_quantity
        })
        setCartTotal(total)
    })

    const fetchProducts = async () => {
        const res =  await axios.post('/products')
        setProducts(res.data.data)
    }

  
    
    return(

        <div className="createorder">

            <h1 style = {{'fontSize' : '5vw'}}>Create Order</h1>

            <div
            onClick = {() => setActiveNavItem('cart')}
            className="viewcart">
                <h4>View Cart</h4>
                <img src = {cartimg} alt = 'back' />
                <p style = {{'color' : '#FD992E', 'fontWeight' : 900}}>{cartTotal}</p>
            </div>

            <Searchbar setSearchTerm = {setSearchTerm} searchTerm = {searchTerm} />

            <Categories products = {products} setSearchTerm = {setSearchTerm} />

            <ProductList products = {products} searchTerm = {searchTerm} addToCart = {addToCart} cart = {cart} />

        </div>
    )
}