import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">My Skills</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Skill Items */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaHtml5 className="text-orange-500 text-6xl" />
          <p className="mt-2 font-semibold">HTML5</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaCss3Alt className="text-blue-500 text-6xl" />
          <p className="mt-2 font-semibold">CSS3</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaJs className="text-yellow-500 text-6xl" />
          <p className="mt-2 font-semibold">JavaScript</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaReact className="text-blue-400 text-6xl" />
          <p className="mt-2 font-semibold">React</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaPython className="text-blue-600 text-6xl" />
          <p className="mt-2 font-semibold">Python</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <SiDjango className="text-green-700 text-6xl" />
          <p className="mt-2 font-semibold">Django</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <FaNodeJs className="text-green-500 text-6xl" />
          <p className="mt-2 font-semibold">Node.js</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <SiMysql className="text-blue-600 text-6xl" />
          <p className="mt-2 font-semibold">MySQL</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <SiMongodb className="text-green-500 text-6xl" />
          <p className="mt-2 font-semibold">MongoDB</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition">
          <SiTailwindcss className="text-blue-400 text-6xl" />
          <p className="mt-2 font-semibold">Tailwind</p>
        </div>
      </div>
    </div>
  );
}
