import React from 'react';

const LeftNav = props => {

    let isAbout = (props.about) ? 'navactive' : ''
    let isServices = (props.services) ? 'navactive' : ''
    let isMain = (props.main) ? 'navactive' : ''

    return(

        <div className = "leftnav">

            <div className="logo"
            onClick = {props.showMain}
            >
            </div>
            <span
            className = {isMain}
            onClick = {props.showMain}
            >
            Log.AI</span>

            <span
            className = {isServices}
            onClick = {props.showServices}
            >Services</span>
            
            <span
            className = {isAbout}
            onClick = {props.showAbout}
            >About</span>
                
        </div>

    )
  }

export default LeftNav;