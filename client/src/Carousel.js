import React from 'react'
import Flickity from 'react-flickity-component'
import './carousel.css'


export default function Carousel() {
  
const options = {
  contain: true,
  lazyLoad: true,
  wrapAround: true,
  autoPlay: 5000
}
  return (

    <Flickity
    className={'carousel'} // default ''
    options={options}
    disableImagesLoaded={false} // default false
    reloadOnUpdate={false} // default false
    static={true} // default false
  >
    <div className="carousel-cell one"></div>
    <div className="carousel-cell two"></div>
    <div className="carousel-cell three"></div>
    <div className="carousel-cell four"></div>
    <div className="carousel-cell five"></div>

  </Flickity>

  )
}