import React from "react";
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from "./NavbarElements";
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Navbar = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
    };

    const auth = localStorage.getItem("user");

    const [section, setSection] = React.useState("DB");

    const options = [
        'Food', 'Questions', 'Whitelist'
    ];

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
                    <Dropdown options={options} value={section} placeholder="Select an option" onChange={({ value }) => {
                        setSection(value);
                        switch (value) {
                            case 'Food':
                                navigate("/informe/general");
                            case 'Questions':
                                navigate("/informe/general");
                            case 'Whitelist':
                                navigate("/informe/general");
                            default:
                                navigate("/"); 
                        }
                    }} />;
                    <NavBtnLink onClick={logout} to="/iniciar-sesion" activeStyle>
                        Logout
                    </NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
