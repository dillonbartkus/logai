import React from 'react'
// import Home from './Home'
import Receiving from './WMS/Receiving'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


export default function App() {

    return (

        <Router>
         <>
           <Switch>
             <Route exact path="/" component={Receiving} />
             <Route exact path="/dashboard" component={Dashboard} />
             <Redirect to="/" />
           </Switch>
         </>
      </Router>

    )
  }