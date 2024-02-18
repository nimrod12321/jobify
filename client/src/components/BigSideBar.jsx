import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashBoardLayout'

const BigSideBar = () => {
  const {showSideBar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSideBar ? 'sidebar-container' : 'sidebar-container  show-sidebar'}>
        <div className="content">
          <header>
            <Logo />
          </header>
        </div>
        <NavLinks isBigSidebar />
      </div>
    </Wrapper>
  )
}

export default BigSideBar