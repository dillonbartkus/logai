import React from 'react'
import Flickity from 'react-flickity-component'
import './carousel.css'
import screen from './images/screen.png'
import screen2 from './images/screen2.png'
import screen3 from './images/screen3.png'
import screen4 from './images/screen4.png'

export default function Carousel({ showRegister }) {
  
const options = {
  contain: true,
  lazyLoad: true,
  wrapAround: true,
  autoPlay: 7000,
  pauseAutoPlayOnHover: false
}
  return (

    <Flickity
    className={'carousel'} // default ''
    options={options}
    disableImagesLoaded={false} // default false
    reloadOnUpdate={false} // default false
    static={true} // default false
  >
    <div className="carousel-cell one">

      <div>
        <h1>The smartest way to manage your warehouse</h1>
        <h3>Get full visibility of your operations and leverage actionable data analytics to work more intelligently.</h3>
        <button onClick = { () => showRegister() } >Unlock your genius</button>
      </div>

      <img src = {screen} alt = '' />

    </div>

    <div className="carousel-cell two">

      <div>
        <h1>Automate and work faster</h1>
        <h3>Save time and efficiently receive, fulfill, track and manage your orders.</h3>
        <button onClick = { () => showRegister() } >Free yourself</button>
      </div>

      <img src = {screen2} alt = '' />
        
    </div>

    <div className="carousel-cell three">

      <div>
        <h1>Obtain and provide peace of mind</h1>
        <h3>Get end-to-end supply chain visibility and easily provide it to your clients so they know where their goods are. Liberate yourself from being glued for hours to your emails and phones answering status update requests.</h3>
        <button onClick = { () => showRegister() } >Get a demo</button>
      </div>

      <img src = {screen3} alt = '' />

    </div>

    <div className="carousel-cell four">

      <div>
        <h1>Work happier and more motivated</h1>
        <h3>See how we have combined design, psychology and chronobiology to help you and your team work more effective, cheerful and with more drive to reach new milestones.</h3>
        <button onClick = { () => showRegister() } >Sign up</button>
      </div>

      <img src = {screen4} alt = '' />

    </div>

  </Flickity>

  )
}