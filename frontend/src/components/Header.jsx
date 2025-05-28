import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <header className="w-screen bg-[#fdf7e8] flex items-center py-4 px-20">
        <img
          src="/cfpic-logo.png"
          alt="CFPIC Logo"
          className="h-14 w-auto ml-10"
        />
        <div className="flex-1 flex justify-center">
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#606060'
            }}
          >
            HNY CONTINUUM OF CARE RESOURCE
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;