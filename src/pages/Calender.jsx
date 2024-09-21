import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const CalendarPage = () => {
  const events = [
    { date: 'Oct 5, 2024', title: 'Client Meeting', location: 'Conference Room A', image: '/src/assets/client.jpg' },
    { date: 'Oct 12, 2024', title: 'Project Deadline', location: 'Office', image: '/src/assets/dead.jpg' },
    { date: 'Oct 22, 2024', title: 'Team Outing', location: 'City Park', image: '/src/assets/outing.jpg' },
  ];

  const eventDays = {
    5: 'bg-green-200', // Client Meeting
    12: 'bg-yellow-200', // Project Deadline
    22: 'bg-red-200', // Team Outing
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          {/* Left side - Events list */}
          <div className="w-1/3 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Events in October 2024</h2>
              
              {/* Add New Event Box */}
              <div className="bg-blue-500 text-white p-4 rounded mb-4 text-center">
                <h3 className="text-lg font-bold">Add New Event</h3>
              </div>

              <ul className="space-y-4">
                {events.map((event, index) => (
                  <li
                    key={index}
                    className="border-l-4 border-blue-600 bg-white p-4 rounded shadow-md hover:bg-blue-50 flex items-start"
                  >
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-16 w-16 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                      <h3 className="text-xl font-bold text-blue-700">{event.title}</h3>
                      <p className="text-gray-500 text-sm">{event.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Calendar display */}
          <div className="w-2/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold">October 2024</h2>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Day</button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Week</button>
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Month</button>
                </div>
              </div>
              
              {/* Days of the week */}
              <div className="grid grid-cols-7 gap-4 text-center text-lg font-bold">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-gray-700">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days of the month */}
              <div className="grid grid-cols-7 gap-4 mt-4">
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`border border-gray-300 p-4 rounded hover:bg-blue-50 text-center ${eventDays[i + 1] || ''}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
