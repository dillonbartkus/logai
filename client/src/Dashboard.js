import React from 'react';
import Tabdash from './Tabdash';
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

             </div>

             <Tabdash />

      </div>
      
    )
}

export default Dashboard;
