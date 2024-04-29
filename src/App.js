import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/css/App.css"

import Home from "../src/components/pages/Home"
import TerAstro from "../src/components/pages/TerAstro"
import Nebozvid from "../src/components/pages/Nebozvid"
import Lsao from "../src/components/pages/Lsao"
import AboutOurMembers from "../src/components/pages/AboutOurMembers"
import Events from "../src/components/pages/Events"
import Mentions from "../src/components/pages/Mentions"
import Astrophoto from "../src/components/pages/Astrophoto"
import Astrovideo from "../src/components/pages/Astrovideo"
import WhiteSwan from "../src/components/pages/WhiteSwan"
import Links from "../src/components/pages/Links"
import Blog from "../src/components/pages/Blog"
import Kontakty from "../src/components/pages/Kontakty"
import ArticlePage from "./components/pages/ArticlePage";

import Signup from "./components/forAdmin/Signup"

export default function App() {
  const isNonAdminRoute = window.location.pathname !== "/admin";

  return (
    <div className="App">
      <Router>
        {isNonAdminRoute && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terastro" element={<TerAstro />} />
          <Route path="/nebozvid" element={<Nebozvid />} />
          <Route path="/lsao" element={<Lsao />} />
          <Route path="/category" element={<Home />} />
          <Route path="/about-our-members" element={<AboutOurMembers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/media" element={<Home />} />
          <Route path="/astrophoto" element={<Astrophoto />} />
          <Route path="/astrovideo" element={<Astrovideo />} />
          <Route path="/white-swan" element={<WhiteSwan />} />
          <Route path="/links" element={<Links />} />
          <Route path="/kontakty" element={<Kontakty />} />
          <Route path="/admin" element={<Signup />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        {isNonAdminRoute && <Footer />}
      </Router>
    </div>
  );
}

