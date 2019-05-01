import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddInv = props => {


    const updateProduct = async (amount, id) => {
        let res = await axios.put(`/product/${id}`,
        { amount: amount } )
        window.location.reload()
    }

    const deleteProduct = async id => {
        let res = await axios.delete(`/product/${id}`)
        window.location.reload()
    }

    const addProduct = async () => {

    }

     const renderInv = () => {
         if (props.inv) {
         return props.inv.map( (item, id) => {
            const [edit, setEdit] = useState(false)
            const [newQuantity, setNewQuantity] = useState()
            let editButtonText = (edit) ? 'Cancel' : 'Edit Quantity'
            return (
                <div className = "invitem" key = {id}>
                <img style = {imgstyle} alt = {id} src = {item.picture} />

                {
                !edit &&
                <>
                SKU# - {item.sku} - 
                {item.name} -
                {item.amount} Units
                </>
                }

                {edit &&
                <>
                <input
                value = {newQuantity}
                onChange = { e => setNewQuantity(e.target.value)}
                ></input>
                <button className = "smallbutton"
                onClick = { () => updateProduct(newQuantity, item.id) }
                >Make Change</button>
                </>
                }
                
                <button className = "smallbutton"
                onClick = { () => setEdit(!edit) }
                >
                {editButtonText}
                </button>

                <button className = "smallbutton red"
                onClick = { () => deleteProduct(item.id) }
                >Remove Item</button>
            
                 </div>
            )
         })
        }
    }

    const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    return (

        <div className = 'addinv'>
        <h3>Edit Inventory for {props.userData.company}:</h3>

        {renderInv()}

       <button
        onClick = {() => addProduct() }
       >Add New Item</button>
     
       </div>

    )
}

export default AddInv