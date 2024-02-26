import React, {useState} from "react";

import { Turn as Hamburger } from 'hamburger-react'
import { IoCaretDown } from "react-icons/io5";
import {Link} from "react-router-dom"
import { MenuItemsGalery, MenuItemsMedia} from './MenuItem'
import Dropdown from "./Dropdown"
import "../css/Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [firstClick, setFirstClick] = useState(false);

    
    const closeMobileMenu = () => {
        setIsOpen(false)
    };

    const onMouseEnter = (id) => {
        if (window.innerWidth >= 960) {
            setDropdown(id);  
        }
    };
    
    const onMouseLeave = () => {
        if (dropdown !== null) {
            setDropdown(null);
        }
    };
    

    const handleClick = (id) => {
      if (!firstClick && window.innerWidth < 960) {
        setDropdown(id); 
      } else {
        setDropdown(null); 
      }
      setFirstClick(!firstClick);
    };

    const handleDropdownItemClick = () => {
        closeMobileMenu();
    };

    return(
        <div>
            <nav className="navbar">
        
                <Hamburger toggled={isOpen} rounded toggle={setIsOpen} 
                    duration={0.8}  size={25}
                />

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Головна
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/terastro" className="nav-links" onClick={closeMobileMenu}>
                            Терастро
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/nebozvid" className="nav-links" onClick={closeMobileMenu}>
                            Небозвід
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/lsao" className="nav-links" onClick={closeMobileMenu}>
                            Lsao
                        </Link>
                    </li>
                    
                    <li className="nav-item" onMouseEnter={()=>onMouseEnter("gallery")} onMouseLeave={onMouseLeave} onClick={()=>handleClick("gallery")}>
                        <Link to="#" className="nav-links">
                            Статті <IoCaretDown />
                        </Link>
                        {dropdown === "gallery" && <Dropdown menuItems={MenuItemsGalery} onItemClick={handleDropdownItemClick} />}
                    </li>

                    <li className="nav-item" onMouseEnter={()=>onMouseEnter("media")} onMouseLeave={onMouseLeave} onClick={()=>handleClick("media")}>
                        <Link to="#" className="nav-links">
                            Галерея <IoCaretDown />
                        </Link>
                        {dropdown === "media" && <Dropdown menuItems={MenuItemsMedia} onItemClick={handleDropdownItemClick}/>}
                    </li>

                    <li className="nav-item">
                        <Link to="/white-swan" className="nav-links" onClick={closeMobileMenu}>
                            White swan
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/links" className="nav-links" onClick={closeMobileMenu}>
                            Цікаві посилання
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/kontakty" className="nav-links" onClick={closeMobileMenu}>
                            Контакти
                        </Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}