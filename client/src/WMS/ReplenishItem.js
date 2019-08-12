import React from 'react'

export default function ReplenishItem({ item, id, popup, showOrder }) {


    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null
    const date = new Date().toLocaleDateString()

    return(

        <div className = "replenishitem" style = {style}>

            <div style = {{'width' : '10%'}}>{item.type}</div>
            <div style = {{'width' : '15%'}}>{item.name}</div>
            <div style = {{'width' : '10%'}}>#{item.sku}</div>
            <div style = {{'width' : '10%'}}>{item.on_hand} Units</div>
            <div>{item.supplier}</div>
            <div>{date}</div>

            {
                !item.being_replenished &&
                <button
                onClick = { () => popup(item) }
                className = "addtocart" style = {{'marginRight' : '2%', 'width' : '15%', 'textAlign' : 'center'}}>Replenish</button>
            }

            {
                item.being_replenished &&
                <button
                
                className = "addtocart" style = {{'marginRight' : '2%', 'width' : '15%', 'textAlign' : 'center'}}>View/Track</button>
            }


        </div>

    )
}