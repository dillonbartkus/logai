import React from 'react'
import InvItem from './InvItem'

export default function CycleCount({ setActiveTab, inv }) {

    const renderInv = () => {
        if (inv) return inv.map( (item, id) => <InvItem item = {item} id = {id} key = {id} />)
    }

    return(

        <div className = "cyclecount">

            <div className = "backtoorder"
                onClick = { () => setActiveTab('counting')} >
                <img src = 'http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png' alt = 'a' style = {{'height' : '50px'}}/>
                <span>Back</span>
            </div>

            <h1 className="bigheader">Cycle Count #10278</h1>

            <div className = "inv" style = {{'border' : 0}}>

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

                <div className = "invitems" style = {{'border' : '1px solid #979797', 'borderRadius' : '3px', 'borderTop': 0}} >

                    {renderInv()}
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>

                </div>

            </div>

        </div>
    )
}