import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
                {/* <img src="" alt=""/> */}
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Informe General
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Insumos
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Reporte Detallado
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Cerrar sesión
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Iniciar sesión</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
}

export default Navbar;