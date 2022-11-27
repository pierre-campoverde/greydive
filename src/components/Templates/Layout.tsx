import React from 'react';
import Navbar from '../organisms/Navbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
