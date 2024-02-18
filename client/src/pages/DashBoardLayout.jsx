import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSideBar, NavBar, SmallSideBar } from '../components'
import { checkDefoaltTheme } from '../App'


const DashboardContext = createContext()



const DashBoardLayout = () => {

  const user = {name:'john'}
  const [showSideBar,setShowSideBar] = useState(false)
  const [isDarkTheme,setIetisDarkTheme] = useState(checkDefoaltTheme())

  const toggleDarkTheme = () =>{
    const newDarkTheme = !isDarkTheme;
    setIetisDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme',newDarkTheme)
    localStorage.setItem('darkTheme',newDarkTheme)
  }
  const toggleSideBar = () =>{
    setShowSideBar(!showSideBar)
  }
  const logoutUser = async () =>{
    console.log('logout user');
  }

  return (
    <DashboardContext.Provider value={{
      user,
      showSideBar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSideBar,
      logoutUser
      }}>
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashBoardLayout