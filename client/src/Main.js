import React from 'react';
import Carousel from './Carousel.js';
import shipper from './images/shipper.png'
import customer from './images/customer.png'
import warehouse from './images/warehouse.png'
import carrier from './images/carrier.png'

const Main = () => {
        
    return (

      <div className = "main">
        
        <Carousel />

        <h1 className = "title">Why Log.AI?</h1>

        <div className="maininfo">

           <div className="info">

                <h4>What We Do</h4>

                <p>Our end-to-end software lets you run all of your business operations in one convenient place. Stop jumping between spreadhseets, websites, emails, and devices. Our logistical platform streamlines communication, helping you work faster, smarter, and happier.</p>

            </div>
            <div className="info">

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
            <div className="info">

                <h4>Why Choose Us</h4>

                <ul>
                    <li>Bridge the gap between logical planning and management</li>
                    <li>Speed up your manual operations</li>
                    <li>Visualize and analyze your data so you can take immediate action</li>
                    <li>Make rapid, real-time changes to your cargo orders</li>
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

export default Main;
