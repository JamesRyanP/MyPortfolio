import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import './Layout.css';


const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main>
        <Outlet />
    
      </main>

      <Footer />

    </div>
  );
};

export default Layout;