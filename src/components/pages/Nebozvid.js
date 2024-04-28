import React from "react";
import Hero from "../Hero";

import "./pages_styles/Nebozvid.css"


export default function Nebozvid(){
    return(
        <div>
            <Hero page="nebozvid"/>
            <div className="nebozvid-contaiter">
                <h2> З 2017 року члени Астрономічного товариства Тернопільського району “Небозвід” тісно співпрацюють з учасниками клубу любителів астрономії “ТерАстро”.</h2>
                
                <div className="nebozvid-foto-box">
                    <img src={require(`../../img/fotNebozvid/13112919_1694074780865289_7282084583591462008_o-1024x785.jpg`)} alt="nebozvid 1"/>
                    <p>Учасник клубу ЛА “ТерАстро” Сергій Вербицький та члени Астрономічного товариства Тернопільського району “Небозвід” Любомир Тригубишин, Василь Михайленко, Михайло Шемеля.</p>
                </div>

                <div className="nebozvid-foto-box">
                    <img src={require(`../../img/fotNebozvid/IMG_8447-1024x683.jpg`)} alt="nebozvid 2"/>
                    <p>Член Астрономічного товариства Тернопільського району “Небозвід”, вчитель фізики та астрономії НВК “Лозівська ЗОШ І-ІІІ ст -ДНЗ” та ідейний натхненник будівництва обсерваторії в селі Лозова Михайло Шемеля.</p>
                </div>

                <div className="nebozvid-foto-box">
                    <img src={require(`../../img/fotNebozvid/IMG_8374-1024x683.jpg`)} alt="nebozvid 3"/>
                    <p>Члени Астрономічного товариства Тернопільського району “Небозвід”, учасники клубу ЛА “ТерАстро”, учні та вчителі шкіл Тернопільщини під час Астрофесту “Різдвяні зорі” в селі Лозова, 2019 р.</p>
                </div>

                <h2>Новини Астрономічного товариства Тернопільського району “Небозвід” можна переглянути за посиланням <a href="https://nebozvid.blogspot.com" target="blank">https://nebozvid.blogspot.com</a></h2>
            </div>

        </div>
    )
}