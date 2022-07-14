import React from 'react';
import toast from 'react-hot-toast';
import logo from '../assets/images/logo.png';

const Header = () => {
  const showMessage = () => {
    toast(
      <div>
        Made by Saniddhya Nigam
      </div>,
      { icon: '👨‍💻' }
    );
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={32} height={32} className="object-cover" />
        <span className="text-xl">Tasks</span>
      </div>
      <div>
        <span className="cursor-pointer" onClick={showMessage}>
          About
        </span>
      </div>
    </header>
  );
};

export default Header;
