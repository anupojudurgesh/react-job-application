import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../assets/Images/github.svg'
import LinkedIn from '../assets/Images/linkedin.svg'
import Instagram from '../assets/Images/instagram.svg'

const Footer = () => {
  return (
    <footer className='text-sm text-center border-t-2 border-gray-500'>
        <div className=''>
      <p className='pt-10 pb-5'>&copy; {new Date().getFullYear()} Durgesh_Anupoju! 😎. All Rights Reserved.</p>
      <div className='pb-10'>
      <p className='pb-5'>
        Developed by <a href="https://anupojudurgesh.github.io/Portfolio_Reactjs/" target="_blank" rel="noopener noreferrer">
        <span className='text-blue-500 text-xl'>Durgesh!👈</span></a>
      </p>
      <p className='text-center pb-3'> Connect with me on </p>
      <div className='inline-grid grid-cols-3 gap-4'> 
         <a href="https://github.com/anupojudurgesh"><img src={Github} className='size-10  ' ></img></a>
         <a href="https://www.linkedin.com/in/durgesh-anupoju/"><img src={LinkedIn} className='size-11 flex items-center'></img></a>
         <a href="https://www.instagram.com/durgesh.tech/"><img src={Instagram} className='size-11'></img></a>
      </div>
      </div>
      
      </div>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '1em 0',
  background: '#f8f9fa',
  borderTop: '1px solid #e7e7e7',
};

export default Footer;
