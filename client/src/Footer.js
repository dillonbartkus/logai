import React from 'react'

export default function Footer ({ returnToTop }) {

    return (

      <div className = "footer">

        <div>

          <span
          style = {{'fontWeight' : 900}}
          onClick = { () => window.location.href='mailto:dillonbartkus@gmail.com'}
          >
              Contact Us
          </span>
        </div>

        <span
        onClick = {returnToTop}
        >
          Back to the top ^
        </span>

      </div>

    )
}