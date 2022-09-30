import React from 'react'
import '../header/header.scss';
import logo from '../../assets/comparlogo.png'
import Login from '../login/Login';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
          <div className="header__container">
                <div className="header__container__logo">
                      <img src={logo} alt="" />
                </div>
                <div className="header__container__nav">
                    <ul className='header__container__nav__navlist'>
                       <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li>Courses</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="header__container__auth">
                   <Login/>
                </div>
          </div>
    </div>
  )
}
