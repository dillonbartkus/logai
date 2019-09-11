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
          <b>Put Data Analytics and Artificial Intelligence to work hard to reduce cost and increase productivity.</b>
          <p>Achieve new levels of efficiency and productivity by letting data analytics and artificial intelligence gather and analyze data in real-time in order to identify and predict roadblocks, from the time an order is placed to the time goods are delivered.</p>
        </div>

        <img src = {data} alt = '' />

      </div>

      <div className="servicesinfo">

        <img src = {money} alt = '' />

        <div>
          <b>You mean everything to us.</b>
          <p>We care about you, appreciate your hard work, and want to help you. We know first-hand all the stress, passion and hard work you put in everyday. We want to put the best technology solutions in your hands so you can work better, happier and smarter.</p>
        </div>

      </div>

      <div className="servicesinfo">

        <div>
          <b>You mean everything to us.</b>
          <p>We care about you, appreciate your hard work, and want to help you. We know first-hand all the stress, passion and hard work you put in everyday. We want to put the best technology solutions in your hands so you can work better, happier and smarter.</p>
        </div>

        <img src = {ruler} alt = '' />

      </div>

      <div className="servicesinfo">

        <img src = {truck} alt = '' />

        <div>
          <b>You mean everything to us.</b>
          <p>We care about you, appreciate your hard work, and want to help you. We know first-hand all the stress, passion and hard work you put in everyday. We want to put the best technology solutions in your hands so you can work better, happier and smarter.</p>
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