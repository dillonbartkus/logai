import React, { useState } from 'react'

const TrackInv = props => {

  const imgstyle = {'height' : '4vw'}

    return (

        <div className = 'trackinv'>
        <h4>Current Inventory for {props.userData.company}:</h4>
        {props.inv &&
            props.inv.map( (item, id) => {
                const [detailedView, setDetailedView] = useState(false)
                let FIFO = item.fifo ? 'Yes' : 'No'
                let checkedDate = item.last_checked.slice(0, 10)
            return (
                <div className = "invitem"
                key = {id}
                onClick = {() => setDetailedView(!detailedView)}
                >

                <img style = {imgstyle} alt = {id} src = {item.picture} />
                <p>{item.name}</p>
                <p>SKU# - {item.sku}</p>
                <p>{item.reserved} Units Reserved</p>
                <p>{item.quantity} Units on-hand</p>

                {
                    detailedView &&
                <>
                <p>FIFO? {FIFO}</p>
                <p>Last Checked on: {checkedDate}</p>
                <p>{item.location}</p>
                </>
                }

                </div>
            ) 
        })}
        </div>
        
    )
}

export default TrackInv