import React from 'react'
import InvItem from './InvItem'

export default function Inv({ inv }) {

    const renderInv = () => {
        if (inv) return inv.map( (item, id) => {
            return <InvItem item = {item} id = {id} key = {id} />
        })
    }

    return(

        <div className = "inv">

            <div className = "invitemtitles">

                <div style = {{'width' : '10%'}}>Product Type</div>
                <div style = {{'width' : '15%'}}>Product Name</div>
                <div className = "smallinv">SKU</div>
                <div className = "smallinv"># Reserved</div>
                <div className = "smallinv"># On-Hand</div>
                <div>Location</div>
                <div style = {{'width' : '13%'}}>Selling Frequency</div>
                <div>Last Cycle Count</div>

            </div>

            <div className = "invitems">

                {renderInv()}

            </div>

        </div>
    )
}