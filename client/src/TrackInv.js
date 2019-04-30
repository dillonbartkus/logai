import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TrackInv = props => {

    const [inv, setInv] = useState(null)

    useEffect( () => {
     fetchInv()
    }, [])

  const fetchInv = async () => {
    let res = await axios.post(`/getinv/${props.userData.id}`)
    setInv(res.data.data);
    
  }

  const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    return (

        <div className = 'trackinv'>
        Current Inventory for {props.userData.company}:
        {inv &&
            inv.map( (item, id) => {
            return (
                <div className = "invitem" key = {id}>
                <img style = {imgstyle} alt = {id} src = {item.picture} />
                {item.sku} - 
                {item.name} - 
                {item.amount} units
                </div>
            ) 
        })}
        </div>
        
    )
}

export default TrackInv