// ProductStockPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Updated product list with multiple colors per product
const products = [
  {
    id: 1,
    image: '/src/assets/14pro.jpg',
    name: 'Iphone 16',
    category: 'Category A',
    price: '$100',
    pieceAvailable: 50,
    color: ['red', 'blue', 'green'], // Multiple colors for this product
  },
  {
    id: 2,
    image: '/src/assets/iPhone 14.jpg',
    name: 'IPhone 14',
    category: 'Category B',
    price: '$120',
    pieceAvailable: 30,
    color: ['black', 'violet'], // Different colors for this product
  },
  {
    id: 3,
    image: '/src/assets/iPhone 16.jpg',
    name: 'iPhone 16',
    category: 'Category C',
    price: '$90',
    pieceAvailable: 40,
    color: ['yellow', 'blue','black'], // Another unique set of colors
  },
  // Add more products here
];

const ProductStockPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-black">Product Stocks</h1>
          <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse border-spacing-0 text-center bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 font-bold">Image</th>
                  <th className="border border-gray-300 p-2 font-bold">Product Name</th>
                  <th className="border border-gray-300 p-2 font-bold">Category</th>
                  <th className="border border-gray-300 p-2 font-bold">Price</th>
                  <th className="border border-gray-300 p-2 font-bold">Pieces Available</th>
                  <th className="border border-gray-300 p-2 font-bold">Colors</th>
                  <th className="border border-gray-300 p-2 font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 p-2 font-bold">{product.name}</td>
                    <td className="border border-gray-300 p-2">{product.category}</td>
                    <td className="border border-gray-300 p-2">{product.price}</td>
                    <td className="border border-gray-300 p-2">{product.pieceAvailable}</td>
                    <td className="border border-gray-300 p-2">
                      {/* Display multiple color circles */}
                      <div className="flex justify-center space-x-2">
                        {product.color.map((clr, index) => (
                          <div
                            key={index}
                            style={{ backgroundColor: clr }}
                            className="w-6 h-6 rounded-full border border-gray-300"
                          ></div>
                        ))}
                      </div>
                    </td>
                    <td className="border border-gray-300 p-2 flex justify-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductStockPage;
