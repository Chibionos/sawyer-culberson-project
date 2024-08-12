import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Image src="/Logo.png" alt="Sawyer Culberson Project Logo" width={100} height={100} />
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@sawyerculbersonproject.org</p>
            <p>Location: Woodinville, WA area and surrounding</p>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2024 Sawyer Culberson Project. All rights reserved.</p>
            <p>Created with love by <a href="https://leetcv.com" className="underline hover:text-primary-200 transition-colors duration-300">LeetCV.com</a> team to help Save the Kids!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;