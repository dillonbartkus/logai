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

export default function Main({ showServices, showRegister }){
        
  return (

      <div className = "main">
        
        <Carousel showRegister = {showRegister} />

        <div className="maininfo">

          <div className="info">

            <p>Log.Ai is a centralized WMS that leverages artifical intelligence, real-time business analytics and psychology to empower you to serve your clients more efficiently and productively.</p>

          </div>

          <div className = "mainsection">

            <div className = "emojis">
              <div style = {{'marginLeft' : 0}}><img src = {smile} alt = '' /></div>
              <div><img src = {smart} alt = '' /></div>
              <div><img className = "plantemoji" src = {grow} alt = '' /></div>
              <div><img className = "staremoji" src = {star} alt = '' /></div>
            </div>

            <div className = "emojiinfo">

              <div className = "emojitext" style = {{'marginLeft' : 0}}>
                <b>Increase Customer Satisfaction</b>
                <p>Seamlessly conduct efficient operations that increase your On-time and In-full deliveries, making your customers happier.</p>
              </div>

              <div className = "emojitext" >
                <b>Work Smarter, Not Harder</b>
                <p>Use machine learning to help automate your processes to work smarter, leaner and faster.</p>
              </div>

              <div className = "emojitext" >
                <b>Optimize and Grow</b>
                <p>Leverage smart analytics to identify inefficiencies in your supply-chain, and unlock your growth.</p>
              </div>

              <div className = "emojitext" >
                <b>Provide Delight</b>
                <p>Get real-time actionable information to the right people at the right time.</p>
              </div>

            </div>

          </div>

          <div className="youmeaneverything">

            <img src = {heart} alt = '' />

            <div>
              <b>We care about you.</b>
              <p>We appreciate your hard work, and want to help you. We know first-hand all the stress, passion and hard work you put in everyday. We want to put the best technology solutions in your hands so you can work better, happier and smarter.</p>
            </div>

          </div>

          <div className = "mainblue">

            <div>
              <h1>Having trouble delivering goods On-Time and In-Full?</h1>
              <p>Don't worry, we got you covered.</p>
              <p>Collect real-time data from the time a client places an order, to the moment it is actually delivered. We use artificial intelligence and business analytics to identify, predict and eliminate roadblocks.</p>
            </div>

            <button onClick = { () => showServices() } >Learn More</button>

          </div>

          <div className = "joinsocialmedia">

            <div>
              <h1>Connect with our social media family!</h1>
              <p>Join our conversation about the importance of logistics. Also, share with us your experience and the challenges you are facing today, and what you are doing to overcome them. Let's start the dialogue!</p>
            </div>

            <img
            onClick = { () => window.open('https://www.linkedin.com/company/log-ai/') }
            src = {linkedin} alt = '' />

            <img
            onClick = { () => window.open('https://www.instagram.com/log_ai/') }
            className = "smallsocial" src = {instagram} alt = '' />

            <img
            onClick = { () => window.open('https://twitter.com/LogAi7') }
            className = "smallsocial"  src = {twitter} alt = '' />

            <img
            onClick = { () => window.open('https://www.linkedin.com/company/log-ai/') }
            src = {facebook} alt = '' />

          </div>

          <div className = "mainblue">

            <div>
              <h1>Make warehouse operations your competitive advantage.</h1>
              <p>Let us show you how to achieve it.</p>
            </div>

            <button
            onClick = { () => showRegister() }
            className = "getademo">Get a demo</button>

          </div>

        </div>

      </div>

    )
  }