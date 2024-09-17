import React from 'react';

const DashboardContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100 ">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

        {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-4 shadow rounded-xl h-48 flex items-center justify-between">
          <div>
  <img src="/src/assets/teamwork.png" alt="Description" className="w-12 h-12 object-cover" />
  
  <h3 className="text-lg font-semibold">Total Users</h3>
  <p className="text-3xl font-bold">$40,685</p>

  {/* Flex container to align the image and text horizontally */}
  <div className="flex items-center mt-2">
    {/* Image on the left */}
    <img src="/src/assets/arrow.png" alt="Increase Icon" className="w-4 h-4 mr-1" />
    
    {/* Percentage text */}
    <span className="text-sm text-green-500 font-medium">8.5% up from yesterday</span>
  </div>
</div>

  </div>

  <div className="bg-white p-4 shadow rounded-xl h-48 flex flex-col items-start justify-between">
  {/* Order image at the top */}
  <img src="/src/assets/online-order.png" alt="orders" className="w-12 h-12 object-cover" />

  {/* Total Orders text */}
  <h3 className="text-lg font-semibold mt-2">Total Orders</h3>

  {/* Price */}
  <p className="text-3xl font-bold">$23,340</p>

  {/* Flex container for the arrow and percentage */}
  <div className="flex items-center mt-2">
    {/* Arrow icon on the left */}
    <img src="/src/assets/arrow.png" alt="Increase Icon" className="w-4 h-4 mr-1" />
    
    {/* Percentage text */}
    <span className="text-sm text-green-500 font-medium">1.3% up from yesterday</span>
  </div>
</div>



         <div className="bg-white p-4 shadow rounded-xl h-48">
  <img src="/src/assets/svg.png" alt="Sales Image" className="w-14 h-13 object-cover rounded-t-xl" />
  
  <h3 className="text-lg font-semibold mt-2">Total Sales</h3>
  <p className="text-3xl font-bold">$45,990</p>

  {/* Flex container to align the arrow and percentage text */}
  <div className="flex items-center mt-2">
    {/* Arrow icon on the left */}
    <img src="/src/assets/down.png" alt="Increase Icon" className="w-4 h-4 mr-1" />
    
    {/* Percentage text */}
    <span className="text-sm text-green-500 font-medium">4.3% up from yesterday</span>
  </div>
</div>


          <div className="bg-white p-4 shadow rounded-xl h-48">
          <img src="/src/assets/pending.png" alt="Pending Tasks" className="w-12 h-12 object-cover" />

            <h3 className="text-lg font-semibold">Total Pending</h3>
            <p className="text-3xl font-bold">3280</p>
            <img src="/src/assets/arrow.png" alt="Increase Icon" className="w-4 h-4 mr-1" />
    
    {/* Percentage text */}
    <span className="text-sm text-green-500 font-medium">1.8% up from yesterday</span>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white shadow rounded-xl p-6 mb-10">
  <h3 className="text-lg font-semibold mb-4">Sales Details</h3>
  <div className=" h-2/5 bg-gray-200 rounded-lg flex items-center justify-center">
    <img 
      src="/src/assets/graph.jpg" 
      alt="Sales Graph" 
      className="max-w-full max-h-full object-contain" 
    />
  </div>
</div>


        {/* Deal Details Section */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Deal Details</h3>
          <div className="overflow-x-auto">
  <table className="min-w-full table-auto">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-left font-semibold">Product Image</th>
        <th className="px-4 py-2 text-left font-semibold">Product Name</th>
        <th className="px-4 py-2 text-left font-semibold">Location</th>
        <th className="px-4 py-2 text-left font-semibold">Date-Time</th>
        <th className="px-4 py-2 text-left font-semibold">Piece</th>
        <th className="px-4 py-2 text-left font-semibold">Amount</th>
        <th className="px-4 py-2 text-left font-semibold">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-2">
          <img src="/src/assets/watch.jpg" alt="Product A" className="w-12 h-12 object-cover rounded"/>
        </td>
        <td className="px-4 py-2">Product A</td>
        <td className="px-4 py-2">New York</td>
        <td className="px-4 py-2">2024-09-15 10:30 AM</td>
        <td className="px-4 py-2">50</td>
        <td className="px-4 py-2">$5,000</td>
        <td className="px-4 py-2">
          <span className="inline-block px-2 py-1 bg-green-500 text-white font-semibold rounded-lg">Delivered</span>
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-2">
          <img src="/src/assets/watch.jpg" alt="Product B" className="w-12 h-12 object-cover rounded"/>
        </td>
        <td className="px-4 py-2">Product B</td>
        <td className="px-4 py-2">Los Angeles</td>
        <td className="px-4 py-2">2024-09-14 11:45 AM</td>
        <td className="px-4 py-2">30</td>
        <td className="px-4 py-2">$3,500</td>
        <td className="px-4 py-2">
          <span className="inline-block px-2 py-1 bg-yellow-500 text-white font-semibold rounded-lg">Delivered</span>
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-2">
          <img src="/src/assets/watch.jpg" alt="Product C" className="w-12 h-12 object-cover rounded"/>
        </td>
        <td className="px-4 py-2">Product C</td>
        <td className="px-4 py-2">Chicago</td>
        <td className="px-4 py-2">2024-09-13 09:20 AM</td>
        <td className="px-4 py-2">70</td> 
        <td className="px-4 py-2">$7,800</td>
        <td className="px-4 py-2">
          <span className="inline-block px-2 py-1 bg-red-500 text-white font-semibold rounded-lg">Delivered</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
