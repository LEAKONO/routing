import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <li className="flex flex-col items-center">
          <FaHtml5 size={40} color="orange" />
          <span>HTML5</span>
        </li>
        <li className="flex flex-col items-center">
          <FaCss3Alt size={40} color="blue" />
          <span>CSS3</span>
        </li>
        <li className="flex flex-col items-center">
          <FaJs size={40} color="#F7DF1E" />
          <span>JavaScript</span>
        </li>
        <li className="flex flex-col items-center">
          <FaReact size={40} color="blue" />
          <span>React</span>
        </li>
        <li className="flex flex-col items-center">
          <FaPython size={40} color="#306998" />
          <span>Python</span>
        </li>
        <li className="flex flex-col items-center">
          <SiDjango size={40} color="green" />
          <span>Django</span>
        </li>
        <li className="flex flex-col items-center">
          <FaNodeJs size={40} color="green" />
          <span>Node.js</span>
        </li>
        <li className="flex flex-col items-center">
          <SiMysql size={40} color="blue" />
          <span>MySQL</span>
        </li>
        <li className="flex flex-col items-center">
          <SiMongodb size={40} color="green" />
          <span>MongoDB</span>
        </li>
        <li className="flex flex-col items-center">
          <SiTailwindcss size={40} color="blue" />
          <span>Tailwind</span>
        </li>
      </ul>
    </section>
  );
}
