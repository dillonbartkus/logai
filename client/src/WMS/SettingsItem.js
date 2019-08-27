import React from 'react'

export default function SettingsItem({ item, id }) {

    // Item that is mapped over in count settings page.

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null

    return(

        <div className = "invitem" style = {style} >

            <div>{item.type}</div>
            <div>{item.name}</div>
            <div>#{item.sku}</div>
            <div>Fast</div>
            <div>
                <select>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>

        </div>

    )
}