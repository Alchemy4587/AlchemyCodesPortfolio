import React, { useState } from 'react'
import "./navbar.css"
import { SiWebmoney } from 'react-icons/si'
import {menu} from "../../data"
import { Link,animateScroll as scroll } from 'react-scroll'
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6"
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [showSidebar,setShowSidebar] = useState(false);
  return (
    <nav className="navbar__container">
      <div className="logo__container">
        <SiWebmoney/>
      </div>
      <div className={`tab__group ${showSidebar ? 'show':''}`}>
        <span className="icon__container close__btn" onClick={()=>setShowSidebar(!showSidebar)}>
          <FaTimes/>
        </span>
        {
          menu.map((list,index)=>(
            <Link
              activeClass='active'
              className='tab__item name'
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {list.name}
            </Link>
          ))
        }
      </div>
      <div className="nav__buttons__group">
        <button className="btn btn-primary">Hire Me <FaArrowUpRightFromSquare/></button>
        <FaBarsStaggered className="menu" onClick={()=>setShowSidebar(!showSidebar)}/>
      </div>
    </nav>
  )
}

export default Navbar