import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () =>  {

  useEffect( () => {
    axios.get(``)
  })

    return (

      <div className="dashboard">
      
      <h1 className = "title">Welcome User</h1>

      <br></br>

      <a target='blank' href="https://us-east-1.online.tableau.com/t/smartweels/views/Regional/FlightDelays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no">View Dashboard</a>

      </div>
      
    )
}

export default Dashboard;
