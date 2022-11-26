import React from 'react';
import Navbar from '../organisms/Navbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
