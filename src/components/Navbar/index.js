import React from "react";
// import { NavLink } from 'react-router-dom';
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
    const logout = () => {
        localStorage.clear();
    };

    const auth = localStorage.getItem("user");

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="assets/BAMX.png" alt="" width="60px" height="60px" />
                    <h1>&nbsp;BAMX</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/informe-general" activeStyle>
                        Informe General
                    </NavLink>
                    <NavLink to="/insumos" activeStyle>
                        Insumos
                    </NavLink>
                    <NavLink to="/reporte-detallado" activeStyle>
                        Reporte Detallado
                    </NavLink>
                    <NavLink onClick={logout} to="/iniciar-sesion" activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
