import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import About from './About';
import Services from './Services';
import Dashboard from './Dashboard';
import RegConfirm from './RegConfirm';


const App = () => {

  const [main, setMain] = useState(true)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [about, setAbout] = useState(false)
  const [services, setServices] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [newMember, setNewMember] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logUserIn = e => {
    e.preventDefault()
    setIsLoggedIn(true)
    showDashboard()
  }

  const clearDisplay = () => {
    setLogin(false); setRegister(false); setAbout(false); setMain(false); setServices(false); setDashboard(false); setNewMember(false)
  }

  const showDashboard = () => {
    clearDisplay()
    setDashboard(true)
  }

  const showNewMember = () => {
    clearDisplay()
    setNewMember(true)
  }

  const showLogin = () => {
    clearDisplay()
    setLogin(true)
    }

  const showRegister = () => {
    clearDisplay()
    setRegister(true)
  }

  const showMain = () => {
    clearDisplay()
    setMain(true)
  }

  const showAbout = () => {
    clearDisplay()
    setAbout(true)
  }

  const showServices = () => {
    clearDisplay()
    setServices(true)
  }

    return (

      <div className = "app">

          <Header showDashboard = {showDashboard} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

              {
                main &&
                <Main />
              }

              {
                login &&
                <Login logUserIn = {logUserIn} />
              }

              {
                register &&
                <Register showNewMember = {showNewMember}/>
              }

              {
                about &&
                <About />
              }

              {
                services &&
                <Services />
              }

              {
                newMember &&
                <RegConfirm />
              }

              {
                dashboard &&
                <Dashboard />
              }

          <Footer />



      </div>

    )
  }

export default App;
