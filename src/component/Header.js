import React from 'react';
import Logo from '../../src/assest/logo.png';

export default function Header() {
   return (
      <header className="d-flex shadow p-3 bg-white rounded">
      <img src={Logo} alt="Logo" className="" />
      <h3 className='pt-4 px-4'>Welcome to NHS Home Service</h3>
    </header>
   );
}
