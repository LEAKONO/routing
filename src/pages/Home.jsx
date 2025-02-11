import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 animate-fade-in">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl animate-fade-in-delay">
        Hi, I'm a passionate software developer specializing in building modern web applications using React, Node.js, and Django.
      </p>
    </div>
  );
}