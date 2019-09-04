import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import About from './About'
import Services from './Services'
import RegConfirm from './RegConfirm'
import MobileHeader from './MobileHeader'
import Dropdown from './Dropdown'

export default function Home() {

  const [dropdown, setDropdown] = useState(false)
  const [main, setMain] = useState(true)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [about, setAbout] = useState(false)
  const [services, setServices] = useState(false)
  const [newMember, setNewMember] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [token, setToken] = useState(null)

  // useEffect( () => {
  //   fetchUser()
  // }, [])

  // const fetchUser = async () => {
  //   if(localStorage.email && !userData) {
  //     const res = await axios.post(`/users/${localStorage.email}`)
  //     setUserData(res.data.data);
  //   }
  // }

  const logUserIn = (data, token) => {
    setToken(token)
    setUserData(data)
    setIsLoggedIn(true)
    // localStorage.setItem('logtoken', token)
    // localStorage.setItem('email', data.email)
  }  

  const returnToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }  

  const clearDisplay = () => {
    returnToTop(); setDropdown(false); setLogin(false); setRegister(false); setAbout(false); setMain(false); setServices(false); setNewMember(false)
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

      <div className = "app" >

          <MobileHeader showMain = {showMain} main = {main} dropdown = {dropdown} setDropdown = {setDropdown}/>

          <Header token = {token} main = {main} userData = {userData} services = {services} about = {about} login = {login} register = {register} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

          <Dropdown token = {token} dropdown = {dropdown} setDropdown = {setDropdown} main = {main} services = {services} about = {about} login = {login} register = {register} isLoggedIn = {isLoggedIn} showServices = {showServices} showAbout = {showAbout} showMain = {showMain} showRegister = {showRegister} showLogin = {showLogin}/>

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

          <Footer returnToTop = {returnToTop} />

          {isLoggedIn
          ? <Redirect to={{
            pathname: '/dashboard',
            state: { userData: userData }
          }} />
          : ''}

      </div>

    )
  }