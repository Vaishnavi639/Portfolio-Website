import React from 'react';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-[#2563eb] dark:text-[#FF9900]">
              VP
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              Vaishnavi Pangare
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Vaishnavi Pangare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};