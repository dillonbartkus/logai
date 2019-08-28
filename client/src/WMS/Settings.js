import React from 'react'
import SettingsItem from './SettingsItem'
import axios from 'axios'

export default function Settings({ setActiveTab, inv, fetch }) {

    const renderInv = () => {
        if(inv) return inv.map( (item, id) => <SettingsItem changeFreq = {changeSellingFrequency} item = {item} key = {id} id = {id} /> )
    }

    const changeSellingFrequency = async (rate, item) => {
        const res = await axios.put(`/updatecountrate/${item.id}`, {
            rate_of_count: rate
        })
        console.log(res.data.data.rate_of_count)
        fetch()
    }

    return(

        <div className = "countsettings">

            <div className = "backtoorder"
                onClick = { () => setActiveTab('counting')} >
                <img src = 'http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png' alt = 'a' style = {{'height' : '50px'}}/>
                <span>Back</span>
            </div>

            <h1 className="bigheader">Counting Settings</h1>

            <div className = "inv" style = {{'border' : 0}}>

                <div className = "invitemtitles">

                    <div>Product Type</div>
                    <div>Product Name</div>
                    <div>SKU</div>
                    <div>Selling Frequency</div>
                    <div>Rate of Cycle Counting</div>

                </div>

                <div className = "invitems" style = {{'border' : '1px solid #979797', 'borderRadius' : '3px', 'borderTop': 0}} >

                    {renderInv()}

                </div>

            </div>

        </div>
    )
}