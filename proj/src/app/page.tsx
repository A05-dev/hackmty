"use client"; // This is a client component 👈🏽
import { useState } from 'react';

export default function Home() {
  // Wrap the component with useClient to make it a Client Component

  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribe: false,
  });

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // You can perform actions with the form data here
    console.log('Form Data:', formData);
    
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Proyecto Re-Genial :) 
      </h1>

      <div className = "text-black">  
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Subscribe Checkbox */}
        <div className="mb-4">
          <label className="block text-white">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleInputChange}
              className="mr-2"
            />
            Subscribe to our newsletter
          </label>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            onClick={ () => console.log(":D") } 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      </div> 
    </main>
  );
}
