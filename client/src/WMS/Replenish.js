import React from 'react'
import ReplenishItem from './ReplenishItem'

export default function Replenish({ inv, popup, showOrder }) {

    const renderInv = () => {
        if (inv) return inv.map( (item, id) => {
            return <ReplenishItem item = {item} showOrder = {showOrder} popup = {popup} id = {id} key = {id} />
        })
    }

    return(

        <div className = "replenish">

            <div className = "replenishitemtitles">

            <div style = {{'width' : '10%'}}>Product Type</div>
            <div style = {{'width' : '15%'}}>Product Name</div>
            <div style = {{'width' : '10%'}}>SKU</div>
            <div style = {{'width' : '10%'}}># On-Hand</div>
            <div>Supplier Information</div>
            <div>Last Order</div>
            <div style = {{'width' : '15%', 'marginRight' : '2%'}}> </div>

            </div>

            <div className = "replenishitems">

            {renderInv()}

            </div>

        </div>
    )
}