import React from 'react'

const Footer = props => {

    return (

      <div className = "footer">

        <div>

          <span
          onClick = { () => window.location.href='mailto:dillonbartkus@gmail.com'}
          >
              Contact Us
          </span>
        </div>

        <span
        onClick = {props.returnToTop}
        >
          Back to the top ^
        </span>

      </div>

    )
  }


export default Footer;
