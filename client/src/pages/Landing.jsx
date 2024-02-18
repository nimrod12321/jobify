import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quod, aut accusantium delectus, iure sed corrupti magni mollitia ab eius veritatis. Nulla aliquam commodi inventore delectus exercitationem deserunt, pariatur sequi!</p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn login-link'>
            Login /Demo User
          </Link>
        </div>
        <img src = {main} alt = "job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing