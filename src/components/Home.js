import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login', {replace: true})
  }

  const goRegister = () => {
    navigate('/register', {replace: true})
  }

  return (
    <div className="container">
        hola
    </div>
  )
}

export default Home;