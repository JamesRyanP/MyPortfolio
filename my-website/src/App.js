// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.js';
import AboutMe from './pages/AboutMe.js';
import NoPage from './pages/NoPage';
import Portfolio from './pages/Portfolio.js';
import GameDetailPage from "./pages/GameDetailPage.js";
import WebsiteDetailPage from "./pages/WebsiteDetailPage.js";
import Arcade from './pages/Arcade.js';
import ArcadeGamePage from './pages/ArcadeGamePage.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/game/detail/:id" element={<GameDetailPage />} />
          <Route path="portfolio/website/detail/:id" element={<WebsiteDetailPage />} />
          <Route path="arcade" element={<Arcade />} />
          <Route path="arcade/game/detail/:id" element={<ArcadeGamePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
