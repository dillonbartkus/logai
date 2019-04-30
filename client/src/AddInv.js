import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddInv = props => {

    const [inv, setInv] = useState(null)

    useEffect( () => {
        fetchInv()
       }, [])
   
     const fetchInv = async () => {
       let res = await axios.post(`/getinv/${props.userData.id}`)
       setInv(res.data.data);
       
     }

     const renderInv = () => {
         if (inv) {
         return inv.map( (item, id) => {
            return (
                <div className = "invitem" key = {id}>
                <img style = {imgstyle} alt = {id} src = {item.picture} />
                {item.sku} - 
                {item.name} - 
                {item.amount} units

                <button
                
                >Edit Quantity</button>

                <button
                
                >Remove Item</button>
            
                 </div>
            )
         })
        }
    }

    const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    return (

        <div className = 'addinv'>
        Edit Inventory for {props.userData.company}:

        {renderInv()}

       <button
                
       >Add New Item</button>
     
       </div>

    )
}

export default AddInv