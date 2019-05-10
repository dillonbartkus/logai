import React from 'react'
import team from './images/team.jpeg'
import finance from './images/finance.png'
import truck from './images/truck.jpeg'

const About = () => {

    return (

      <div className = "about">

          <h1 className = "title">About Us</h1>

          <div className = "aboutinfo">

            <img alt = "team" src = {team} ></img>

            <p className = "aboutp">Log. Ai was born out of curiosity, appreciation for the hard work of those in the logistics industry, and the desire to serve our nation, again. In 2008, Rodolfo Valdivia, New York City native and son of immigrants, joined the Marine Corps, in gratitude for what this country did for his parents and his love for this country. After his deployments to Iraq and Afghanistan as a Motor Transport Mechanic, he was able to see first-hand that logistical operations were the heartbeat of mission accomplishment.</p>

            <img className = "smallpic" alt = "finance" src = {finance} ></img>

            <p className = "aboutp"> After graduating college, Rodolfo wanted to switch gears and serve his nation again by working in finance, hoping to do his part to help strengthen the economy. While working in finance, he realized that as e-commerce and globalization continue to grow, the logistics industry will become increasingly vital to economic growth. Rodolfo realized that the logistics industry is constantly challenged by huge demand to transport goods while facing shortage of truck-drivers and lack of technological innovation (besides testing self-driving trucks at the time).

            In order to find a way to help these great men and women, and serve his nation again, Rodolfo left his job in finance to become a truck-driver, and conducted boots-on-the-ground research to identify problems and solutions to make peoples' lives better. From this up and close research journey, the logistical platform Log.Ai was born.</p>

            <img className = "smallpic" alt = "truck" src = {truck} ></img>

            <p className = "aboutp">The team at Log.Ai takes its mission seriously to serve the people in shipping, warehouse and carrier sectors, who make sure that our daily essentials like groceries, clothes, and gas are there when we need it the most. We want to empower you to make collaborative, transparent and data-driven business decisions in real-time, enabling you to run your businesses in a proactive manner. In order to ensure that we deliver real practical value to you while you are conducting end-to-end logistical operations, we have built relationships with shipping, warehouse and carrier managers and business leaders. We are here to make sure that your efficiency and productivity levels increase so that you can provide a whole new level of customer service.</p>

          </div>

      </div>

    )
  }

export default About;
