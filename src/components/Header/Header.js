import './style.css';
import { useState } from 'react';

import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

import { FiMenu } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';

export default function Header(){

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => {
        menuIsOpen ? console.log('Closed') : console.log('Opened')

        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <div className='header'>
            <div className="header-container">
                {menuIsOpen ? (<VscChromeClose onClick={toggleMenu} className='menuIcon' />) : (
                    <FiMenu onClick={toggleMenu} className='menuIcon'/>)}
                <Logo/>
                <NavBar/>
            </div>
        </div>
    );
}