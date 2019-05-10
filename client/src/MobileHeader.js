import React from 'react'

const MobileHeader = props => {

  let isMain = (props.main) ? 'navactive' : ''

    return (

      <div className = "mobileheader">

      <div className="logo">

          <span
          className = {isMain}
          onClick = {props.showMain}
          >
          Log.Ai</span>

      </div>

      <div className= {`dropbutton ${props.dropdown}`}
      onClick = { () => props.setDropdown(!props.dropdown) }
      ></div>
          
      </div>

    )
  }

export default MobileHeader;
