import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1 p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
