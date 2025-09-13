import React from 'react'
import Navbar from './Navbar'

const Shipping = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Shipping & Delivery Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <p className="mb-6">
          Welcome to <strong>Chattrix</strong>. As a digital-only platform focused on online dating and connections, we do not ship physical goods. This Shipping & Delivery Policy outlines how and when you can expect to receive access to our services.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">1. Digital Service Delivery</h2>
        <p className="mb-6">
          Chattrix offers digital services such as profile creation, matchmaking features, messaging tools, and other community features. Access to these services is typically granted immediately upon successful registration or payment, depending on the type of service selected.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">2. Account Activation</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Free users gain access to the platform immediately after signing up.</li>
          <li>Paid services (such as premium features or subscriptions) are activated immediately after a successful payment unless stated otherwise.</li>
          <li>If you do not receive access within 1 hour of purchase, please contact our support team.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">3. No Physical Shipping</h2>
        <p className="mb-6">
          No physical goods are sold or shipped by Chattrix. All offerings are digital and are delivered through the website interface and associated communication channels.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">4. Delivery Failures</h2>
        <p className="mb-6">
          If you face any issues accessing a feature or service after payment, please contact us immediately. We will investigate and resolve the issue as quickly as possible to ensure uninterrupted service.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">5. Policy Updates</h2>
        <p className="mb-6">
          We may update this Shipping & Delivery Policy from time to time. Changes will be posted on this page along with the updated effective date. We encourage you to review this page periodically.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">6. Contact Us</h2>
        <p className="mb-1">If you have questions or concerns regarding service access or delivery, please reach out to us:</p>
        <p className="mb-6">Email: <a href="" className="text-pink-500 underline">chattrix@support.co.in</a></p>

        <p className="italic">Thank you for choosing Chattrix to find meaningful connections.</p>
      </div>
    </>
  )
}

export default Shipping