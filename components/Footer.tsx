import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center mb-10 px-4 text-gray-600 dark:text-gray-300'>
      <small className=' block'> &copy; 2023 Sri Vardhan. All rights reserved.</small>
      <p className='text-xs  mt-2'>
        <span className='font-semibold'> About this website :</span>
        built with React & Next.js (App router &server actions), TypeScript, Tailwind Css, framer motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}

export default Footer;
