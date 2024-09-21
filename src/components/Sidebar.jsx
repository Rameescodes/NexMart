import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
<aside className=" left-0 h-auto w-52 shadow-lg z-30 p-6 overflow-y-auto bg-white dark:border-gray-900 rounded-lg">
<div className="flex flex-col justify-between h-full">
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Products
              </a>
            </li>
            <li>
  <Link 
    to="/favorites" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    Favorites
  </Link>
</li>
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Inbox
              </a>
            </li>
            <Link 
    to="/orderlist" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    Orderlist
  </Link>
  <Link 
    to="/Product Stock" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    Product Stock
  </Link>
          </ul>
          <h5 className="mt-6 mb-2 font-semibold text-lg text-white-800 dark:text-white-200">
            Pages
          </h5>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Pricing
              </a>
            </li>
            <Link 
    to="/Calender" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    Calender
  </Link>
  <Link 
    to="/To-Do" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    To-Do
  </Link>
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Contact
              </a>
            </li>
            <Link 
    to="/Invoice" 
    className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300"
  >
    Invoice
  </Link>
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block text-base font-medium text-gray-800 dark:text-white-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition duration-300">
                Table
              </a>
            </li>
          </ul>
        </nav>
        <li>
            </li>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
