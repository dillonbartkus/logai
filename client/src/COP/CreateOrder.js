import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from './Searchbar'
import ProductList from './ProductList'
import Categories from './Categories'
import cartimg from '../images/cart.png'

export default function CreateOrder({ setActiveNavItem, cart, user, addToCart }) {

    const [products, setProducts] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [cartTotal, setCartTotal] = useState()

    useEffect( () => {
        fetchProducts()
    }, [])

    useEffect( () => {
        if(cart){
        let total = 0
        cart.forEach( item => {            
            total += item.item_quantity
        })
        setCartTotal(total)
        }
    })    

    const fetchProducts = async () => {
        const res =  await axios.post(`/products/${user.customer_of}`)
        setProducts(res.data.data)
    }    
    
    return(

        <div className="createorder">

            <h1 className = "bigheader">Create Order</h1>

            <div
            onClick = {() => setActiveNavItem('cart')}
            className="viewcart">
                <h2>View Cart</h2>
                <img src = {cartimg} alt = 'back' />
                <p>{cartTotal}</p>
            </div>

            <Searchbar setSearchTerm = {setSearchTerm} searchTerm = {searchTerm} />

            <Categories products = {products} setSearchTerm = {setSearchTerm} />

            <ProductList products = {products} searchTerm = {searchTerm} addToCart = {addToCart} cart = {cart} />

        </div>
    )
}