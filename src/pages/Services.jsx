import React from 'react';

export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Building responsive and modern web applications using React, Next.js, and Tailwind CSS.' },
    { title: 'API Development', description: 'Designing and developing RESTful APIs and GraphQL endpoints for seamless integration.' },
    { title: 'Database Management', description: 'Managing and optimizing databases like PostgreSQL, MongoDB, and Firebase.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-12 animate-fade-in">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl animate-fade-in-delay">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}