import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import About from './About';
import Services from './Services';
import Dashboard from './Dashboard';
import RegConfirm from './RegConfirm';
import MobileHeader from './MobileHeader';
import Dropdown from './Dropdown';

const App = () => {

  const [dropdown, setDropdown] = useState(false)
  const [main, setMain] = useState(true)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [about, setAbout] = useState(false)
  const [services, setServices] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [newMember, setNewMember] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [token, setToken] = useState(null)

  useEffect( () => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    if(localStorage.email && !userData) {
      const res = await axios.post(`/users/${localStorage.email}`)
      setUserData(res.data.data);
    }
  }

  const resetTimer = () => {
    if(localStorage.email || userData) {
      console.log('sfsafa')
      let time;
      clearTimeout(time)
      time = setTimeout( logUserOut, 60000)
    }
  }

  const logUserIn = (data, token) => {
    setToken(token)
    setIsLoggedIn(true)
    setUserData(data)
    localStorage.setItem('logtoken', token)
    localStorage.setItem('email', data.email)
    showDashboard()
  }  

  const returnToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  const logUserOut = () => {
    showMain()
    setToken('')
    setIsLoggedIn(false)
    setUserData(null)
    localStorage.removeItem('logtoken')
    localStorage.removeItem('email')
  }

  const clearDisplay = () => {
    returnToTop(); setDropdown(false); setLogin(false); setRegister(false); setAbout(false); setMain(false); setServices(false); setDashboard(false); setNewMember(false)
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

      <div className = "app" onMouseMove = { () => resetTimer() } >

            <MobileHeader showMain = {showMain} main = {main} dropdown = {dropdown} setDropdown = {setDropdown}/>

            <Header token = {token} main = {main} userData = {userData} services = {services} about = {about} login = {login} register = {register} showDashboard = {showDashboard} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

            <Dropdown token = {token} dropdown = {dropdown} setDropdown = {setDropdown} main = {main} services = {services} about = {about} login = {login} register = {register} showDashboard = {showDashboard} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

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
