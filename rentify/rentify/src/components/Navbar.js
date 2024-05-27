import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'right' }}>
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      </li>
      <li style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
      </li>
      <li style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
      </li>
      
    
      <li style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/property-list" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Property List</Link>
      </li>


      <li style={{ display: 'inline-block', marginRight: '20px' }}>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>AddProperty</Link>
      </li>


    </ul>
  </nav>
);

export default Navbar;
