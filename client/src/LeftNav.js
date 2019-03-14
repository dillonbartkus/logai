import React from 'react';

const LeftNav = props => {

    return(

        <div className = "leftnav">

            <span
            onClick = {props.showMain}
            >Log.AI</span>

            <span
            onClick = {props.showServices}
            >Services</span>
            
            <span
            onClick = {props.showAbout}
            >About</span>
                
        </div>

    )
  }

export default LeftNav;