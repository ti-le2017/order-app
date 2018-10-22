import React from 'react';
import './css/footer.css';

const Footer = () => {


  return (
    <div className='footer container'>
      <div className='footer-menu-one'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Products</a></li>
          <li><a href='/'>Contact Us</a></li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <p>Design by: T Le <a href='https://github.com/ti-le2017'>GitHub</a></p>
      </div>
    </div>

  );
}

export default Footer;
