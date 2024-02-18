import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashBoardLayout'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import links from '../utils/links'
import NavLinks from './NavLinks'

const SmallSideBar = () => {

  const {showSideBar,toggleSideBar} = useDashboardContext()
  
  return (
    <Wrapper>
      <div className={showSideBar? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          <button type='button' className='close-btn' onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks  />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar