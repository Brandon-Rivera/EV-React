import React from "react";
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from "./NavbarElements";
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Navbar = () => {

    var BtnText = "Iniciar sesión";
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const logout = () => {
        localStorage.clear();
    };

    const BtnFunction = () => {
        if(BtnText === "Iniciar sesión" && token !== null){
            BtnText = "Cerrar sesión";
        }
        else if(BtnText == "Cerrar sesión"){
            BtnText = "Iniciar sesión";
            localStorage.clear();
        }
    }

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
                    <NavLink to="/whitelist" activeStyle>
                        Pruebas
                    </NavLink>
                    <Dropdown options={options} value={section} placeholder="Select an option" onChange={({ value }) => {
                        setSection(value);
                        console.log(value);
                        switch (value) {
                            case 'Food':
                                navigate("/food"); break;
                            case 'Questions':
                                navigate("/question"); break;
                            case 'Whitelist':
                                navigate("/whitelist"); break;
                        }
                    }} />;
                    <NavBtnLink onClick={BtnFunction()} to="/iniciar-sesion" activeStyle>
                        {BtnText}
                    </NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
