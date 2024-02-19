import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import './Layout.css';


const Layout = () => {
  return (
    <div className="layout">


      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>



    </div>
  );
};

export default Layout;