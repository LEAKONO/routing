import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-8 animate-fade-in">
        Contact Me
      </h1>
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg animate-fade-in-delay">
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Feel free to reach out to me for collaborations or inquiries.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            Email: <a href="mailto:leakonoemmanuel3@gmail.com" className="text-blue-600 hover:underline">leakonoemmanuel3@gmail.com</a>
          </p>
          <p className="text-gray-700">
            GitHub: <a href="https://github.com/LEAKONO" className="text-blue-600 hover:underline">LEAKONO</a>
          </p>
          <p className="text-gray-700">
            LinkedIn: <a href="https://www.linkedin.com/in/emmanuel-leakono-7125472b8/" className="text-blue-600 hover:underline">Emmanuel Leakono</a>
          </p>
        </div>
      </div>
    </div>
  );
}