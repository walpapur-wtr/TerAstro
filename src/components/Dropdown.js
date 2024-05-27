import React, {useState} from "react";
import {Link} from "react-router-dom"
import "../css/Dropdown.css"

export default function Dropdown({ menuItems, onItemClick}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <ul onClick={handleClick} className={isOpen ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={onItemClick}>
                        <Link className={item.cName} to={item.path} onClick={() => setIsOpen(false)}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}