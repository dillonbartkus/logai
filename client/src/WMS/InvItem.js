import React from 'react'

export default function InvItem({ item, id }) {    

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null

    return(

        <div className = "invitem" style = {style} >

            <div style = {{'width' : '10%'}}>{item.type}</div>
            <div style = {{'width' : '15%'}}>{item.name}</div>
            <div className = "smallinv">#{item.sku}</div>
            <div className = "smallinv">{item.reserved} Units</div>
            <div className = "smallinv">{item.on_hand} Units</div>
            <div>{item.location}</div>
            <div style = {{'width' : '13%'}}>Fast</div>
            <div>2 days ago</div>

        </div>

    )
}