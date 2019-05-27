import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Tabdash from './Tabdash'
import WMS from './WMS'
import Clients from './Clients'
import DashHeader from './DashHeader'

const Dashboard = props =>  {

  props = props.location.state

  const [logout, setLogout] = useState(false)
  const [display, setDisplay] = useState('dash')

  if(!props) {
    return(<h1>Please log in.</h1>)
  }

    return (

      <>

      <DashHeader userData = {props.userData} />

      <div className="dashboard">
      
              <div className = "dashbuttons">

                  <button
                  className = "dashbutton"
                  onClick = { () => {
                    setDisplay('dash')
                  }}
                  >
                  Dashboard</button>

                 <button
                  className = "dashbutton"
                  onClick = { () => {
                    setDisplay('wms')
                  }}
                  >
                  WMS</button>

                  <button
                  className = "dashbutton"
                  onClick = { () => {
                    setDisplay('clients')
                  }}
                  >
                  Clients</button>
            
                  <button
                  className = "dashbutton"
                  onClick = { () => setLogout(true)}
                  >
                  Logout</button>

             </div>

             {
               display === 'wms' &&
               <WMS userData = {props.userData}/>
             }

             {
               display === 'dash' &&
               <Tabdash />
             }

             {
               display === 'clients' &&
               <Clients userData = {props.userData}/>
             }


             {logout
             ? <Redirect push to={`/`} />
             : ''}

      </div>

      </>
      
    )
}

export default Dashboard;
