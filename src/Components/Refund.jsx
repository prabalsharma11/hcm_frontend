import React from 'react'
import Navbar from './Navbar'

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Cancellation & Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <p className="mb-6">
          Welcome to <strong>Chattrix</strong>. This Cancellation & Refund Policy outlines the terms and conditions under which you may cancel services and request a refund. By using our platform, you agree to the terms outlined below.
        </p>

        {/* Section: Cancellations */}
        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">1. Cancellation Policy</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Users can cancel their subscription or service by contacting our support team at <a href="" className="text-pink-500 underline">chattrix@support.co.in</a>.</li>
          <li>Cancellations must be requested at least 24 hours before the next billing cycle to avoid being charged.</li>
          <li>Once a service has been used or delivered (e.g., a one-time consultation or event), it may not be eligible for cancellation.</li>
        </ul>

        {/* Section: Refunds */}
        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">2. Eligibility for Refund</h2>
        <p className="mb-6">Refunds are available for users who have experienced issues with the platform that significantly impact the user experience. If you feel your service was not as described or there was a technical issue, you may be eligible for a refund.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">3. Refund Process</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>To request a refund, contact our support team at <a href="" className="text-pink-500 underline">chattrix@support.co.in</a>.</li>
          <li>Include details of your purchase and the issue you encountered with the service.</li>
          <li>Refund requests must be made within 14 days of the purchase date to be considered.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">4. Non-Refundable Services</h2>
        <p className="mb-6">Certain services, such as those related to personalized, custom, or one-time use, may not be eligible for a refund. We reserve the right to determine which services are non-refundable based on the nature of the service.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">5. Refund Processing Time</h2>
        <p className="mb-6">Once your refund request is approved, we will process the refund within 7–10 business days. The amount will be refunded to your original method of payment.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">6. Policy Modifications</h2>
        <p className="mb-6">
          We may update this Cancellation & Refund Policy from time to time. Any changes will be posted on this page with an updated effective date. Please review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">7. Contact Us</h2>
        <p className="mb-1">If you have any questions or concerns about this policy, please contact us:</p>
        <p className="mb-6">Email: <a href="" className="text-pink-500 underline">chattrix@support.co.in</a></p>

        <p className="italic">Thank you for being a part of the Chattrix community.</p>
      </div>
    </>
  )
}

export default RefundPolicy
