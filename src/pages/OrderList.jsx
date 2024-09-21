import React, { useState } from "react";
import { Filter, Calendar, RefreshCw } from 'lucide-react'; // Adjusted imports for icons
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const OrderList = () => {
  const [filterBy, setFilterBy] = useState("");
  const [date, setDate] = useState("");
  const [orderType, setOrderType] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  // Reset filters
  const resetFilters = () => {
    setFilterBy("");
    setDate("");
    setOrderType("");
    setOrderStatus("");
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Render Sidebar */}
      <div className="flex-1">
        <Header /> {/* Render Header */}
        <div className="container mx-auto p-4">
          <div className="flex flex-col space-y-4">
            {/* Filter Row */}
            <div className="flex flex-row justify-between items-center space-x-4">
              {/* Filter By */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Filter By</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <Filter className="mr-2" />
                  <input
                    type="text"
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    placeholder="Filter by name..."
                    className="outline-none w-full"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Date</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <Calendar className="mr-2" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="outline-none w-full"
                  />
                </div>
              </div>

              {/* Order Type */}
              <div className="flex flex-col">
  <label className="text-sm font-semibold mb-2">Order Type</label>
  <div className="flex items-center border border-gray-300 rounded-md p-2">
    <select
      value={orderType}
      onChange={(e) => setOrderType(e.target.value)}
      className="border-none outline-none w-full rounded-md p-2"
    >
      <option value="">Select Order Type</option>
      <option value="Health & Medicine">Health & Medicine</option>
      <option value="Book & Stationary">Book & Stationary</option>
      <option value="Service & Industry">Service & Industry</option>
      <option value="Fashion & Beauty">Fashion & Beauty</option>
      <option value="Home & Living">Home & Living</option>
      <option value="Electronics">Electronics</option>
      <option value="Mobile & Phone">Mobile & Phone</option>
      <option value="Accessories">Accessories</option>
    </select>
  </div>
</div>


              {/* Order Status */}
              <div className="flex flex-col">
  <label className="text-sm font-semibold">Order Status</label>
  <div className="flex flex-col">
  <label className="text-sm font-semibold">Order Status</label>
  <div className="relative flex items-center gap-2">
    <select
      value={orderStatus}
      onChange={(e) => setOrderStatus(e.target.value)}
      className="border border-gray-300 rounded-md p-2 outline-none w-full max-w-xs"
    >
      <option value="">Select Status</option>
      <option value="Pending">Processing</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Rejected</option>
      <option value="OnHold">OnHold</option>
      <option value="InTransit">In Transit</option>
    </select>
   
  </div>
  <p className="text-xs text-gray-500 mt-1">You can choose multiple Order Status</p>
</div>

</div>

              {/* Reset Filters */}
              <div className="flex flex-col justify-center">
                <button
                  onClick={resetFilters}
                  className="flex items-center text-red-600 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                >
                  <RefreshCw className="mr-2" />
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Order List Table */}
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Order Type</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Row */}
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">#12345</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">2024-09-17</td>
                    <td className="border px-4 py-2">Online</td>
                    <td className="border px-4 py-2">Completed</td>
                  </tr>
                  {/* Add more rows here dynamically */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
