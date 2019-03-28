import React from 'react';

const Footer = props => {



    return (

      <div className = "footer">

        <div>
          <span className = "socialmedia">
              Social Media
          </span>

          <span>
              Contact Us
          </span>
        </div>

        <span
        onClick = {props.returnToTop}
        >
          Return To Top
        </span>

      </div>

    )
  }


export default Footer;
