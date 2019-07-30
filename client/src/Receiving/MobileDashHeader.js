import React from 'react'

export default function MobileDashHeader({ avatar }) {

    return(

        <div className = "mobiledashheader">

            <div className = "mobilehamburger">
            </div>

            <div
            className = "headerlogo"
            >
                <span>LOG.AI</span>

                <span>inventory management</span>

            </div>

            <div
            // onClick = { e => {
            //     e.stopPropagation()
            //     setDropdown(!dropdown)
            // }}
            className="mobileheaderuserpic">
                <img src = {avatar} alt='user'/>
            </div>

        </div>
    )
}