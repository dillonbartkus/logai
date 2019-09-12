import React from 'react'
import soldiers from './images/soldiers.jpg'
import heart from './images/heart.png'
import teamwork from './images/teamwork.png'
import me from './images/me.png'
import rudy from './images/rudy.png'
import marc from './images/marc.png'
import stephen from './images/stephen.png'
import linkedin from './images/linkedin.png'

export default function About() {

  return (

    <div className = "about">

      <div className = "aboutsection">

        <div>
          <h1>Who we are</h1>
          <p>We founded Log.Ai because we are passionate to serve our nation and empower and help those who sacrifice tremendously to carry on warehouse operations.</p>
          <p>Log.Ai wants to be the most seamless and smartest way to conduct logistics operations at an affordable price.</p>
          <p>We believe that all businesses can make warehouse operations their competitive edge.</p>
        </div>

        <img src = {soldiers} alt = '' />

      </div>

      <div className = "aboutsection">

        <img src = {heart} alt = '' />

        <div>
          <h1>Our Story</h1>
          <p>Log.Ai was born out of curiosity, appreciation for the logistics industry, and the desire to serve our nation, again. In 2018, Rodolfo Valdivia, a Marine Corps veteran, while working in Morgan Stanley realized that as e-commerce and global trade continue to grow, the logistics industry will become increasingly more vital to our economic growth. He saw that this space was in need of technological innovation.</p>
          <p>That same year, he took the leap, quit his job, became a truck driver, UX Designer, and teamed up with Dillon, Marc and Stephen to build Log.Ai.</p>
        </div>

      </div>

      <div className = "aboutsection">

        <div>
          <h1>Our Mission</h1>
          <p>We are driven to empower businesses to mke warehouse operations their competitive edge and serve their clients better.</p>
          <p>As a diverse minority group of humble beginnings, we are also determined to help, educate, and hire people from all walks of life that have the passion to serve, make a difference for our world, and themselves.</p>
        </div>

        <img style = {{'width' : '25%'}} src = {teamwork} alt = '' />

      </div>

      <h1>Leadership</h1>

      <div className = "leadership">

        <div className = "portrait">
          <img src = {rudy} alt = 'rudy' />
          <p>Rodolfo Valdivia Jr.</p>
          <p>CEO and</p>
          <p>Cofounder</p>
          <img
          onClick = { () => window.open('https://www.linkedin.com/in/rodolfovaldiviajr/') }
          src = {linkedin} alt = '' />
        </div>

        <div className = "portrait">
        <img src = {marc} alt = 'marc' />
          <p>Marc Birbach</p>
          <p>Lead Data Scientist</p>
          <p>Cofounder</p>
          <img
          onClick = { () => window.open('https://www.linkedin.com/in/marc-birbach/') }
          src = {linkedin} alt = '' />
        </div>

        <div className = "portrait">
        <img src = {me} alt = 'me' />
          <p>Dillon Bartkus</p>
          <p>Lead Software Eng.</p>
          <p>Cofounder</p>
          <img
          onClick = { () => window.open('https://www.linkedin.com/in/dillon-bartkus-7594b396/') }
          src = {linkedin} alt = '' />
        </div>

        <div className = "portrait">
        <img src = {stephen} alt = 'stephen' />
          <p>Stephen Metzger</p>
          <p>Advisor and</p>
          <p>Macro-economist</p>
          <img
          onClick = { () => window.open('https://www.linkedin.com/in/stephen-metzger-9b29731a/') }
          src = {linkedin} alt = '' />
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