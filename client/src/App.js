import React from 'react'
import Routes from './Routes'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


const App = () => {

    return (

        <Router>
         <>
           <Switch>
             <Route exact path="/" component={Routes} />
             <Route exact path="/dashboard" component={Dashboard} />
             <Redirect to="/" />
           </Switch>
         </>
      </Router>

    );
  }

export default App;