import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src="" alt=""/>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact us
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
}

export default Navbar;