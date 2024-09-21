import React from "react";
import { AiFillHeart } from "react-icons/ai"; // For the love icon
import { FaStar } from "react-icons/fa"; // For the star rating
import Sidebar from "../components/Sidebar"; // Assuming Sidebar is in the same directory or update the path accordingly
import Header from "../components/Header";   // Assuming Header is in the same directory or update the path accordingly

const FavoritePage = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro.jpg",
      price: "$800",
      image: "/src/assets/iPhone 16 Pro.jpg",
    },
    {
      id: 2,
      name: "iPhone 16.jpg",
      price: "$788",
      image: "/src/assets/iPhone 16.jpg",
    },
    {
      id: 3,
      name: "iPhone 15",
      price: "$200",
      image: "/src/assets/15plus.jpg",
    },
    {
        id: 4,
        name: "iPhone 14",
        price: "$700",
        image: "/src/assets/iPhone 14.jpg",
      },
      {
        id: 5,
        name: "iphone 11",
        price: "$760",
        image: "/src/assets/iphone 11 .jpg",
      },
      {
        id:6,
        name: "iphone 12",
        price: "$500",
        image: "/src/assets/iphone 12.jpg",
      },
      {
        id: 7,
        name: "iphone 13",
        price: "$670",
        image: "/src/assets/iphone 13.jpg",
      },
      {
        id: 8,
        name: "iphone 12mini",
        price: "$560",
        image: "/src/assets/12mini.jpg",
      },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Favorite Products Grid */}
        <div className="p-5">
            <h1>favorites</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <AiFillHeart className="text-red-500 text-xl" />
                </div>
                <p className="text-gray-700">{product.price}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                  TextProduct
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
