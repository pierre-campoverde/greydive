import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-black p-5 text-center">
      <span>
        Made By{' '}
        <a
          href={'https://www.pierre-c.com/'}
          className="font-title text-indigo-300"
        >
          Pierre Campoverde
        </a>
      </span>
    </footer>
  );
};

export default Footer;
