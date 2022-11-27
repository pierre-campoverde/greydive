import React from 'react';
import Navbar from '../organisms/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../organisms/Footer';
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
