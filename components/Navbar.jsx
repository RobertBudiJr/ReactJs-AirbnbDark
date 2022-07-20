import { useState } from 'react';
import React from 'react';
import Logo from '../src/assets/airbnb.svg';

export default function Navbar() {
  return (
    <nav className='nav'>
      <img src={Logo} alt='Logo' className='nav__logo' />
    </nav>
  );
}
