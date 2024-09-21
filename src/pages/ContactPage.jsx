import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { CameraIcon } from '@heroicons/react/24/solid';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    gender: '',
    photo: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact added:', formData);
    // Add your submission logic here, like sending the data to a backend server
  };

  return (
    <div className="flex h-fit">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 p-10 bg-gray-100 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Add New Contact</h2>

          <form
            onSubmit={handleSubmit}
            className="w-3/4 max-w-2xl bg-white p-10 rounded-lg shadow-2xl space-y-8 relative"
          >
            {/* Upload Photo Section */}
            <div className="flex justify-center mb-6">
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden relative">
                  {formData.photo ? (
                    <img
                      src={URL.createObjectURL(formData.photo)}
                      alt="Uploaded"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <CameraIcon className="h-12 w-12 text-gray-500" />
                  )}
                </div>
                <input
                  type="file"
                  id="photo-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700  mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700  mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700  mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Date of Birth and Phone Number */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700  mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 mb-4" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
                required
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Add Now Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
