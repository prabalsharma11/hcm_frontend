import React from 'react'
import Navbar from './Navbar'

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Meet the Developer</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Shubham Kashyap</h2>
          <p className="text-lg mb-6">
            Shubham Kashyap is the lead developer behind <strong>Chattrix</strong>, the innovative dating platform designed to connect people meaningfully. With a passion for creating elegant and functional web experiences, Shubham has carefully crafted Chattrix using cutting-edge technologies like React and Tailwind CSS. When he's not coding, he focuses on delivering seamless user experiences and ensuring the platform is both secure and engaging.
          </p>
          <p className="text-lg mb-6">
            If you'd like to get in touch, feel free to reach out via email: <a href="" className="text-pink-500 underline">chattrix@team.co.in</a>.
          </p>
        </div>
      </div>
    </>
  )
}

export default Team
