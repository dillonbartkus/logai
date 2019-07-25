import React from 'react'
import Product from './Product'

export default function ProductList({ searchTerm, addToCart, products }) {

    const filterProducts = () => {
        if (searchTerm === 'all') {
            return products.map( (item, id) => {
                return (
                    <Product addToCart = {addToCart} item = {item} key = {id}/>
                )})
        }
        else if(searchTerm.length >= 3) {
            return products
            .filter( item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.type.toLowerCase().includes(searchTerm.toLowerCase()) )
            .map( (item, id) => {
            return (
                <Product addToCart = {addToCart} item = {item} key = {id}/>
            )})
        }
    }

    return(

        <div className="productlist">

            <h4>All Products:</h4>

            {
                products &&
                filterProducts()
            }

        </div>
    )
}