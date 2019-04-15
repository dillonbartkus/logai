import React, { useState, useEffect } from 'react';
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

    return (

      <div className="dashboard">
      
          <h1 className = "title">Welcome, {props.userData.npc}</h1>

              <div className = "dashbuttons">
            
                  <button
                  className = "dashbutton"
                  onClick = {props.logUserOut}
                  >
                  Logout</button>

                  <button
                  className = "dashbutton"
                  >
                  Submit order
                  </button>

                  <button
                  onClick = {() => window.open('https://us-east-1.online.tableau.com/t/smartweels/views/Regional/FlightDelays?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no','_blank') }
                  className = "dashbutton"
                  >
                  View Dashboard
                  </button>

             </div>

      </div>
      
    )
}

export default Dashboard;
