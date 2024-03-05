import React, { useState } from "react";
import Hero from "../Hero";
import {interestingLinks} from "./links_data"
import { TfiPlus } from "react-icons/tfi";
import "./pages_styles/Links.css"

export default function Links(){

    const [showAcordeon, setShowAcordeon] = useState(null)

    function handleClick(index){
        setShowAcordeon(showAcordeon === index ? null : index);
    }


    return(
        <div>
            <Hero page="links"/>

            <ul className="container">
                    {interestingLinks.map((item, index) => (
                        <li key={index}>
                            <div className="acordeon-title">
                                {item.title}
                                <span onClick={() => handleClick(index)}><TfiPlus/></span>
                            </div>
                            <div className="acordeon-links">
                                { showAcordeon === index &&
                                    item.links.map((link, id) => (
                                        <div key={id}>
                                        <p>{link.name}</p>
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
    )
}