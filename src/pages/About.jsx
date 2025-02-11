import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-8 animate-fade-in">
        About Me
      </h1>
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg animate-fade-in-delay">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          My name is Emmanuel Leakono. I am a software developer with experience in building scalable web applications using React, Node.js, and Django. I love solving complex problems and creating user-friendly interfaces.
        </p>
      </div>
    </div>
  );
}