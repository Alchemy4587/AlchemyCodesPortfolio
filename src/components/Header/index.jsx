import React from 'react'
import "./header.css"
import {profile1} from "../../images"
import Facts from './Facts'

const Header = () => {
  return (
    <header id='header' className='blur-effect'>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I am <span className='color__primary'>Kanjo Elkamira Ndi</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">I'M A WEB DEVELOPER</h1>
              <p className="text__muted header__description">
                I dissect intricate user experience challenges to engineer 
                integrity-focused solutions that resonate with billions of users.
              </p>
            </div>
            <Facts/>
            <div className="header__info__bottom">
              <button className="btn">Download CV</button>
              <a href="mailto:kanjoel39@gmail.com" className='btn'>Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className='profile__photo' alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header