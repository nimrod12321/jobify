import styled from "styled-components";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Landing, Erorr,Dashboard,Register} from './pages'

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/'}>dashboard</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/landing'}>Landing</Link>

    </nav>
    <Routes>
      <Route path="/" element = {<Dashboard />} /> 
      <Route path="/landing" element = {<Landing />} /> 
      <Route path="/register" element = {<Register />} /> 
      <Route path="*" element = {<Erorr />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
