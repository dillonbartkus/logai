import React from 'react'
import screen from './images/screen.png'
import data from './images/data.png'
import money from './images/money.png'
import ruler from './images/ruler.png'
import truck from './images/truck.png'

export default function Services () {

  return (

    <div className = "services">

      <div className = "servicesdiv">

        <h1>Manage your warehouse the smartest way</h1>

        <p>Let's partner together and seamlessly incorporate our software with your business so you can better serve your clients and their increasing demands.</p>

      </div>

      <div className = "servicesblue">

        <img src = {screen} alt = '' />
      
      </div>

      <div className="servicesinfo">

        <div>
          <b>Put Data Analytics and Artificial Intelligence to work hard to reduce cost and increase productivity</b>
          <p>Achieve new levels of efficiency and productivity by letting data analytics and artificial intelligence gather and analyze data in real-time in order to identify and predict roadblocks, from the time an order is placed to the time goods are delivered.</p>
        </div>

        <img src = {data} alt = '' />

      </div>

      <div className="servicesinfo">

        <img src = {money} alt = '' />

        <div>
          <b>Get Cutting-Edge Technology at an Affordable Price</b>
          <p>We want emerging businesses to have an affordable simple-to-use cutting-edge technology in their hands so they can gain a competitive advantage to thrive in the increasingly demanding markets of today and the future.</p>
        </div>

      </div>

      <div className="servicesinfo">

        <div>
          <b>Customize your WMS experience and automation in order to work faster</b>
          <p>No more burdensome generic warehouse management software. We take time to understand your business in-depth to provide you a custom WMS experience that ensures we meet your unique requirements and needs for automation.</p>
        </div>

        <img src = {ruler} alt = '' />

      </div>

      <div className="servicesinfo">

        <img src = {truck} alt = '' />

        <div>
          <b>Obtain Transparency</b>
          <p>Add value to your company brand by providing 24/7 transparency, giving them a seamless experience that will keep them doing business with you. Also, free yourself and your staff from being glued to emails and phones answering status update requests all day! YAY!</p>
        </div>

      </div>

      <div className = "mainblue">

        <div>
          <h1>Make warehouse operations your competitive advantage.</h1>
          <p>Let us show you how to achieve it.</p>
        </div>

        <button className = "getademo">Get a demo</button>

      </div>

    </div>

  )
}