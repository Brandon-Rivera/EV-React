import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import './Layout.css'

const Layout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token'); //Eliminaro token
        navigate('/', {replace: true}); //Esto es para que no regrese al historial
    }
  return (
    <main>
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand>
                    <NavLink to='/'><img src='/assets/banco-logo.png' alt='Logo de Wisdam Island'/>Wisdom Island</NavLink>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                        <NavLink to='cursos'>Cursos</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </main>
  )
}

export default Layout;