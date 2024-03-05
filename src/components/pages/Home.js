import React, {useEffect} from "react";
import Moon from "react-moon";
import Hero from "../Hero";

import { MoonPhaseWidget } from 'moon-phase-widget'
 
import 'moon-phase-widget/src/index.css'

import "./pages_styles/HomePage.css"

export default function Home() {

  const moon = require('celestial-moon');

  // Отримати поточну дату
  const currentDate = new Date();

  // Розрахунок фази місяця для поточної дати
  const phase = moon.calculate(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds()
  );

  useEffect(() => {
    const moonWidget = new MoonPhaseWidget('moon-box');
  }, []); 


  return (
    <div>
      <Hero page="home" />
      
        <div className="container">
          <div id="moon-box" className="moon-box">
            {/*<Moon phase={phase} size={165} className="moon-style" />
              <p>Вік місяця: {phase.age}</p>
              <p>Назва фази: {phase.name}</p>*/}

          </div>
        </div>

    </div>
  );
  }