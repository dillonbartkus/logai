import React from 'react'
import Carousel from './Carousel'
import shipper from './images/shipper.png'
import customer from './images/customer.png'
import warehouse from './images/warehouse.png'
import carrier from './images/carrier.png'

export default function Main(){
        
    return (

      <div className = "main">
        
        <Carousel />

        <h1 className = "title">Why Log.AI?</h1>

        <div className="maininfo">

           <div className="info">

                <h4>What We Do</h4>

                <p>Our end-to-end software lets you run all of your business operations in one convenient place. Stop drowning in manually-intensive spreadsheets for financial reporting, jumping around websites to find work, and being glued to your phone and email inbox to coordinate operations and update your clients of your progress. Our logistical platform empowers you to eliminate manual and error-prone work, streamline communication, and help you work smarter.</p>

            </div>

            <hr></hr>

            <div className = "info">

              <h4>Why We Do It</h4>

              <p>We care about you, appreciate your hard work, and want to help you. We know first-hand all the hard work you put in everyday to conduct logistical operations and we want to put the best technology solutions in your hands so you can work better.</p>
            
            </div>

            <hr></hr>

            <div className = "info">

                <h4>Who Do We Serve</h4>

                <div className="whoweserve">
                
                    <div className="shipserve">
                    Shippers
                    <img src = {shipper} alt = 'shippers'></img>
                    </div>
                    
                    <div className="warehouseserve">
                    Warehouses
                    <img src = {warehouse} alt = 'warehouse'></img>
                    </div>

                    <div className="carrierserve">
                    Carriers
                    <img src = {carrier} alt = 'carrier'></img>
                    </div>

                    <div className="customerserve">
                    Stores
                    <img src = {customer} alt = 'customer'></img>
                    </div>
                
                </div>

            </div>

            <hr></hr>

            <div className="info">

                <h4>Why Choose Us</h4>

                <ul>
                    <li>Bridge the gap between logical planning and management</li>
                    <li>Eliminate up to 70% of your manual operations and the errors that come with it</li>
                    <li>Use real-time visualized analytical data to make proactive and efficient business decisions</li>
                    <li>Effortlessly cater to last minute changes to cargo orders</li>
                    <li>Easily communicate with your peers</li>
                    <li>Coordinate logistical movements down to the most finite detail</li>
                    <br></br>
                    <p>Find out how we can partner with you and help meet your business goals!</p>
                </ul>


              </div>

        </div>


      </div>

    )
  }