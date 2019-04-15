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
  const [userData, setUserData] = useState(null)


  const logUserIn = (data) => {
    setIsLoggedIn(true)
    setUserData(data)
    showDashboard()
  }

  const returnToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  const logUserOut = () => {
    setIsLoggedIn(false)
    showMain()
  }

  const clearDisplay = () => {
    setLogin(false); setRegister(false); setAbout(false); setMain(false); setServices(false); setDashboard(false); setNewMember(false)
  }

  const showDashboard = () => {
    clearDisplay()
    setDashboard(true)
  }

  const showWelcomePage = () => {
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

          <Header main = {main} userData = {userData} services = {services} about = {about} login = {login} register = {register} showDashboard = {showDashboard} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

              {
                main &&
                <Main />
              }

              {
                login &&
                <Login logUserIn = {logUserIn} showRegister = {showRegister} />
              }

              {
                register &&
                <Register showWelcomePage = {showWelcomePage}/>
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
                <Dashboard logUserOut = {logUserOut} userData = {userData}/>
              }

          <Footer returnToTop = {returnToTop} />



      </div>

    )
  }

export default App;
