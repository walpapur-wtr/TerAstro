import React, { useState } from "react";
import Hero from "../Hero";
import {interestingLinks} from "./links_data"
import { TfiPlus } from "react-icons/tfi";
import { FiMinus } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import "./pages_styles/Links.css"

export default function Links() {
    const [showAcordeon, setShowAcordeon] = useState(null);

    function handleClick(index) {
        setShowAcordeon(showAcordeon === index ? null : index);
    }

    return (
        <div>
            <Hero page="links" />

          

            <ul className="container">

                <p className="general-title">
                    Тут зібрано посилання на інтернет-сторінки в соцмережах та офіційні сайти астрономічних клубів, 
                    обсерваторій, планетаріїв, а також додаткові джерела, які допоможуть у вивченні астрономії. 
                    Назви подано мовою оригіналу.
                </p>

                {interestingLinks.map((item, index) => (
                    <li key={index}>
                        <div className="acordeon-title">
                            {item.title}
                            <span onClick={() => handleClick(index)}>
                                {showAcordeon === index ? <FiMinus /> : <TfiPlus />} 
                            </span>
                        </div>
                        <div className="acordeon-links">
                            {showAcordeon === index &&
                                item.links.map((link, id) => (
                                    <div key={id}>
                                        <p className="link"><BsDot/>{link.name}</p>
                                        {link.websites.map((website, websiteId) => (
                                            website.name && (
                                                <p key={websiteId}><a href={website.url}>{website.name}</a></p>
                                            )
                                        ))}
                                    </div>
                                ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}