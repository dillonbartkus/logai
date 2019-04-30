import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Tabdash from './Tabdash'
import WMS from './WMS'
// import axios from 'axios';

const Dashboard = props =>  {

  // const [userData, setUserData] = useState('')

  // useEffect( () => {
  //   axios.get(`http://localhost:3001/users/${props.id}`)
  //   .then(res => {
  //     setUserData(res.data.data)
  //   })
  //   .catch( err => {
  //     console.log(err.response);
  //     });
  // }, [])

  props = props.location.state

  const [logout, setLogout] = useState(false)
  const [wms, setWms] = useState(false)
  const [dash, setDash] = useState(true)

  const style = {'textAlign' : 'center', 'margin' : '2% auto'}

  if(!props) {
    return(<h1>Please log in.</h1>)
  }

    return (

    <>

      <h1 style = {style} className = "title">Welcome, {props.userData.npc}</h1>

      <div className="dashboard">
      
              <div className = "dashbuttons">

                  <button
                  className = "dashbutton"
                  onClick = { () => {
                    setWms(false)
                    setDash(true)
                  }}
                  >
                  Dashboard</button>

                 <button
                  className = "dashbutton"
                  onClick = { () => {
                    setWms(true)
                    setDash(false)
                  }}
                  >
                  WMS</button>
            
                  <button
                  className = "dashbutton"
                  onClick = { () => setLogout(true)}
                  >
                  Logout</button>

             </div>

             {
               wms &&
               <WMS userData = {props.userData}/>
             }

             {
               dash &&
               <Tabdash />
             }


             {logout
             ? <Redirect push to={`/`} />
             : ''}

      </div>
    
    </>
      
    )
}

export default Dashboard;
