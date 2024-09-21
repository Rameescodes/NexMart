import React from 'react';
// import { PrinterIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const InvoicePage = () => {
  const invoiceFrom = {
    name: "ABC Company",
    address: "123 Street Name, City, State, 12345",
  };

  const invoiceTo = {
    name: "John Doe",
    address: "789 Another St, City, State, 67890",
  };

  const invoiceDetails = {
    date: "Sep 20, 2024",
    dueDate: "Oct 5, 2024",
  };

  const items = [
    { id: 1, description: "Web Development Services", quantity: 1, baseCost: 1000, totalCost: 1000 },
    { id: 2, description: "Hosting Fees", quantity: 12, baseCost: 10, totalCost: 120 },
    { id: 3, description: "Maintenance", quantity: 6, baseCost: 50, totalCost: 300 },
  ];

  const totalAmount = items.reduce((total, item) => total + item.totalCost, 0);

  const handlePrint = () => {
    alert("Print action triggered!");
  };

  const handleSend = () => {
    alert("Send action triggered!");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-2 bg-gray-100">
        <Header />

        {/* Invoice Header */}
        <div className="flex justify-between items-start bg-white p-8 shadow-lg rounded-lg mt-4">
          {/* Left - Invoice From */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Invoice From:</h3>
            <p>{invoiceFrom.name}</p>
            <p>{invoiceFrom.address}</p>
          </div>

          {/* Center - Invoice To */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Invoice To:</h3>
            <p>{invoiceTo.name}</p>
            <p>{invoiceTo.address}</p>
          </div>

          {/* Right - Invoice Date and Due Date */}
          <div className="text-right">
            <p className="text-sm">Invoice Date: {invoiceDetails.date}</p>
            <p className="text-sm">Due Date: {invoiceDetails.dueDate}</p>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="mt-6 bg-slate-200 shadow-lg rounded-lg p-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-4">Serial No</th>
                <th className="pb-4">Description</th>
                <th className="pb-4">Quantity</th>
                <th className="pb-4">Base Cost</th>
                <th className="pb-4">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">{item.id}</td>
                  <td className="py-4">{item.description}</td>
                  <td className="py-4">{item.quantity}</td>
                  <td className="py-4">${item.baseCost.toFixed(2)}</td>
                  <td className="py-4">${item.totalCost.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Amount & Icons */}
        <div className="flex justify-between items-center mt-8">
          {/* Total Amount */}
          <div className="text-right">
            <h3 className="text-xl font-semibold">Total Amount:</h3>
            <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Icons - Print and Send */}
          <div className="flex space-x-4">
            <div 
              className="bg-blue-500 text-white p-3 rounded-lg shadow-lg cursor-pointer" 
              onClick={handlePrint}
            >
              <PrinterIcon className="h-6 w-6" />
            </div>
            <div 
              className="bg-green-500 text-white p-3 rounded-lg shadow-lg cursor-pointer" 
              onClick={handleSend}
            >
              <PaperAirplaneIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
