import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = props =>  {

  const [userData, setUserData] = useState('')

  useEffect( () => {
    axios.get(`http://localhost:3001/users/${props.id}`)
    .then(res => {
      setUserData(res.data.data)
    })
    .catch( err => {
      console.log(err.response);
      });
  }, [])

    console.log(props)
  

    return (

      <div className="dashboard">
      
      <h1 className = "title">Welcome, {userData.company}</h1>

      <br></br>

      <button
      onClick = {props.logUserOut}
      >
      Logout</button>

      <a target='blank' href="https://us-east-1.online.tableau.com/t/smartweels/views/Regional/FlightDelays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no">View Dashboard</a>

      </div>
      
    )
}

export default Dashboard;
