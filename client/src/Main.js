import React from 'react'
import Carousel from './Carousel'
import grow from './images/grow.png'
import smart from './images/smart.png'
import smile from './images/smile.png'
import star from './images/star.png'
import heart from './images/heart.png'
import facebook from './images/facebook.jpg'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'

export default function Main(){
        
  return (

      <div className = "main">
        
        <Carousel />

        <div className="maininfo">

          <div className="info">

            <p>Log.Ai is a centralized and cloud-based Warehouse Management Software that leverages artifical intelligence, real-time business analytics and psychology to empower you to serve your clients more efficiently.</p>

          </div>

          <div className = "mainsection">

            <div>
              <img src = {smile} alt = '' />
              <b>Increase customer satisfaction</b>
              <p>use our centralized software to conduct seamless and transparent operations that increase your On-time and In-full deliveries, making your customers happier.</p>
            </div>

            <div>
              <img src = {smart} alt = '' />
              <b>Work smart, not harder</b>
              <p>Use machine learning to help automate your processes to work smarter, leaner and faster.</p>
            </div>

            <div>
              <img src = {grow} alt = '' />
              <b>Optimize and grow</b>
              <p>Leverage smart analytics to identify inefficiencies in your supply-chain operation, and unlock insights in real-time.</p>
            </div>

            <div>
              <img src = {star} alt = '' />
              <b>Provide delight</b>
              <p>Get real-time actionable information to the right people at the right time to take your business to new levels of productivity.</p>
            </div>

          </div>

          <div className="youmeaneverything">

            <img src = {heart} alt = '' />

            <div>
              <b>You mean everything to us.</b>
              <p>We care about you, appreciate your hard work, and want to help you. We know first-hand all the stress, passion and hard work you put in everyday. We want to put the best technology solutions in your hands so you can work better, happier and smarter.</p>
            </div>

          </div>

          <div className = "mainblue">

            <div>
              <h1>Having trouble delivering goods On-Time and In-Full?</h1>
              <p>Don't worry, we got you covered.</p>
              <p>With our ability to collect real-time data from the time a client places an order, to the point it is actually delivered, we use artificial intelligence and business analytics to identify, predict and eliminate roadblocks.</p>
            </div>

            <button>Learn More</button>

          </div>

          <div className = "joinsocialmedia">

            <div>
              <h1>Connect with our social media family!</h1>
              <p>Join our conversation about the growing importance of logistics to the economy and our everyday lives. Also, share with us your experience and the challenges you are facing today, and what you are doing to overcome them. Let's start the dialogue!</p>
            </div>

            <img src = {linkedin} alt = '' />
            <img src = {instagram} alt = '' />
            <img src = {twitter} alt = '' />
            <img src = {facebook} alt = '' />

          </div>

          <div className = "mainblue">

            <div>
              <h1>Make warehouse operations your competitive advantage.</h1>
              <p>Let us show you how to achieve it.</p>
            </div>

            <button className = "getademo">Get a demo</button>

            </div>

        </div>

      </div>

    )
  }