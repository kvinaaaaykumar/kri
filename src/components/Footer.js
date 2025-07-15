import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 left-0 w-full">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm text-gray-700 font-medium">&copy; {new Date().getFullYear()} All Rights Reserved</p>

        {/* Version Section */}
        <p className="text-sm text-gray-700 font-medium" title="Software Version">Version 1.0.0</p>

        {/* Company Section */}
        <p className="text-sm text-gray-700 font-medium">Powered by Softwares Infotech Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
