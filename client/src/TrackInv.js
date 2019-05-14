import React from 'react'

const TrackInv = props => {

  const imgstyle = {'height' : '50px', 'width' : '50px', 'margin' : '2% 2%'}

    return (

        <div className = 'trackinv'>
        <h3>Current Inventory for {props.userData.company}:</h3>
        {props.inv &&
            props.inv.map( (item, id) => {
                console.log(item);
                let FIFO = item.fifo ? 'Yes' : 'No'
                let checkedDate = item.last_checked.slice(0, 10)
            return (
                <div className = "invitem" key = {id}>
                <img style = {imgstyle} alt = {id} src = {item.picture} />
                <p>{item.name}</p>
                <p>SKU# - {item.sku}</p>
                <p>FIFO? {FIFO}</p>
                <p>Last Checked on: {checkedDate}</p>
                <p>{item.location}</p>
                <p>{item.reserved} Units Reserved</p>
                <p>{item.quantity} Units on-hand</p>
                </div>
            ) 
        })}
        </div>
        
    )
}

export default TrackInv