import React from "react";
import Hero from "../Hero";

import "./pages_styles/Kontakty.css"

export default function Kontakty(){
    return(
        <div>
            <Hero page="kontakty"/>
            <div className="links-container">
                <div className="links-flex">
                    <div className="links-box">
                        <h1>Клуб любителів астрономії “ТерАстро”:</h1>
                        <a href="https://www.facebook.com/groups/astroTernopil/" target="_blank">https://www.facebook.com/groups/astroTernopil/</a>
                        <a href="https://www.instagram.com/astroternopil/" target="_blank">https://www.instagram.com/astroternopil/</a>
                        <a href="mailto:terastro2017@gmail.com" target="_blank">terastro2017@gmail.com</a>
                    </div>
                    <div className="links-box">
                        <h1>Астрономічне товариство Тернопільського району “Небозвід”:</h1>
                        <a href="https://nebozvid.blogspot.com" target="_blank">https://nebozvid.blogspot.com</a>
                        <a href="https://www.facebook.com/ATNebozvid/" target="_blank">https://www.facebook.com/ATNebozvid/</a>
                    </div>
                </div>
            </div>
        </div>
    )
}