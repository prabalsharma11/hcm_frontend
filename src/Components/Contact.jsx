import React from 'react'
import Navbar from './Navbar'

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <p className="mb-6 text-lg">
          We'd love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out through any of the platforms below:
        </p>

        

        <p className="italic text-lg">
          Thank you for being part of the Chattrix community! We look forward to connecting with you.
        </p>
      </div>
    </>
  )
}

export default ContactUs
