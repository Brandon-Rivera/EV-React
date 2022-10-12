import React from "react";
// import { NavLink } from 'react-router-dom';
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
    const logout = () => {
        localStorage.clear();
    };

    var NavBtn = "iniciar sesión"

    const auth = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if(token == ""){
        NavBtn = "iniciar sesión";
    }else{
        NavBtn = "Cerrar sesión";
    }

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
                    <NavBtnLink onClick={logout} to="/iniciar-sesion" activeStyle>
                        {NavBtn}
                    </NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
