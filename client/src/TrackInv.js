import React from 'react'

const TrackInv = props => {

  const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    return (

        <div className = 'trackinv'>
        <h3>Current Inventory for {props.userData.company}:</h3>
        {props.inv &&
            props.inv.map( (item, id) => {
            return (
                <div className = "invitem" key = {id}>
                <img style = {imgstyle} alt = {id} src = {item.picture} />
                SKU# - {item.sku} - 
                {item.name} - 
                {item.quantity} units
                </div>
            ) 
        })}
        </div>
        
    )
}

export default TrackInv