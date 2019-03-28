import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const Header = props => {

    return (

      <div className = "header">

        <LeftNav showAbout = {props.showAbout} showServices = {props.showServices} showMain = {props.showMain} />

        <RightNav company = {props.company} register = {props.register} showDashboard = {props.showDashboard} isLoggedIn = {props.isLoggedIn} showRegister = {props.showRegister} showLogin = {props.showLogin}/>

      </div>

    )
  }

export default Header;
