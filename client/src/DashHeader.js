import React from 'react'

const DashHeader = props => {

const style = {'textAlign' : 'center', 'margin' : '2% auto'}


return (
    <div className = "dashheader">
             
        <h1 style = {style} className = "title">Welcome, {props.userData.npc}</h1>

    </div>
    )
}

export default DashHeader