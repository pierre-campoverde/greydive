import React from 'react';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import NavigationLink from '../atoms/NavigationLink';
const Navbar = () => {
  return (
    <div className="flex bg-black py-4 item-center">
      <div className="w-11/12 my-4 flex mx-auto items-center justify-between">
        <Link to="/" className="text-white text-2xl font-title font-bold">
          Gredive
          <span className="text-indigo-500">.demo</span>
        </Link>
        <nav>
          <ul className="flex items-center">
            {data.map((page) => {
              return (
                <li key={page.cliente} className={'mx-3'}>
                  <NavigationLink
                    path={page.cliente}
                    value={page.cliente.toUpperCase()}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
