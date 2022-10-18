import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flexbox;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    text-align: center;
    padding: 0 1rem;
    height: 100%;
    gap: 20px;
    cursor: pointer;

    &.active {
        color: #cf142b;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #cf142b;
    }
    h1 {
        margin: 0;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */

    /* 2nd Nav */
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex; 
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #cf142b;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;
    text-decoration: none;

    /* 2nd Nav */
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #cf142b;
    }
`;