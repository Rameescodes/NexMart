import React, { useState } from 'react';
import { Search, Bell, Globe, User } from 'lucide-react'; // Assume lucide-react is used for icons
import { FaChevronDown } from 'react-icons/fa';  // Import the down arrow icon

const Header = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  return (
    <header className="bg-white shadow-lg flex items-center justify-between p-5">
      {/* Project Name */}
      <div className="text-xl font-bold text-blue-700">
        NexMart
      </div>

      {/* Search Bar */}
      <div className="flex items-start border border-gray-300 rounded-full px-3 py-2 max-w-2xl">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none text-gray-700"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon with Popup */}
        <div className="relative">
  {/* Bell Icon with Blue Color */}
  <Bell className="text-blue-500 cursor-pointer" onClick={toggleNotification} />
  
  {/* Notification Badge */}
  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    6
  </div>

  {/* Notification Popup */}
  {isNotificationOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
      <ul className="text-sm text-gray-700 p-2">
        <li className="hover:bg-red-800 p-2">You have 6 new messages</li>
      </ul>
    </div>
  )}
</div>


       {/* Language Selection */}
<div className="flex items-center cursor-pointer">
  {/* Flag Image */}
  <img
    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"  // Replace with the URL of the desired flag
    alt="Flag"
    className="w-6 h-4"
  />
  <span className="ml-2 text-gray-600">English</span>
  <FaChevronDown className="ml-2 text-gray-600" />

</div>


        {/* User Profile Image */}
        <div className="flex items-center cursor-pointer space-x-2">
      {/* User Profile Image */}
      <img
        src="/src/assets/profile.png" 
        alt="User Profile"
        className="w-10 h-10 rounded-full border border-gray-300"
      />
      <div className="flex items-center">
        {/* User Name */}
        <span className="text-gray-700 font-semibold">John Doe</span>
        {/* Scroll Down Icon */}
        <FaChevronDown className="ml-2 text-gray-600" />
      </div>
    </div>
      </div>
    </header>
  );
};

export default Header;
