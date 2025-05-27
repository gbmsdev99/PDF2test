import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} PDF Test Maker | Offline Test Creation Tool
        </p>
        <p className="text-xs mt-1 text-gray-400">
          All data is stored locally on your device.
        </p>
      </div>
    </footer>
  );
}