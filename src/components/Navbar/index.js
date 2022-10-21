import React, { useState } from "react";
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from "./NavbarElements";
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'react-dropdown/style.css';
import { useToken } from "../../TokenContext";

const Navbar = () => {
    const navigate = useNavigate();
    const [section, setSection] = React.useState("DB");
    const [show, setShow] = useState(false);
    const { token, setToken } = useToken();
    const handleLogout = () => setToken(null);

    const options = [
        'Food', 'Questions', 'Whitelist', 'Folio', 'Paquete2'
    ];

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="assets/BAMX.png" alt="" width="60px" height="60px" />
                    <h1>BAMX</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    {token &&
                        <>
                            <NavLink to="/informe-general" activeStyle>
                                Informe General
                            </NavLink>
                            <NavLink to="/insumos" activeStyle>
                                Insumos
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
                                    case 'Folio':
                                        navigate("/folio"); break;
                                    case 'Paquete2':
                                        navigate("/Paquete2"); break;
                                    default:
                                        break;
                                }
                            }} />
                        </>}
                    {!token && <NavBtnLink to="/iniciar-sesion" activeStyle>
                        Iniciar sesión
                    </NavBtnLink>
                    }
                    {token && <NavBtnLink onClick={() => {
                        setShow(true);
                        handleLogout();
                    }} to="/iniciar-sesion" activeStyle>
                        Cerrar sesión
                    </NavBtnLink>
                    }
                </NavMenu>
            </Nav>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Se ha cerrado la sesión</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Navbar;
