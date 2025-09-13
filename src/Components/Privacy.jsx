import React from 'react'
import Navbar from './Navbar'

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 mb-10 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <p className="mb-6">
          Welcome to <strong>Chattrix</strong> , a dating platform designed to connect people meaningfully. Your privacy is important to us, and this Privacy Policy explains how we collect, use, share, and protect your personal data.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, gender, age, date of birth, photos, location, preferences, and any information you provide in your profile or messages.</li>
          <li><strong>Device & Usage Data:</strong> IP address, device type, browser, access times, and pages viewed.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies to improve your experience. You can control cookie settings in your browser.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To operate and personalize your experience on Noisy.</li>
          <li>To match users based on preferences and compatibility.</li>
          <li>To communicate with you regarding your account, updates, and offers.</li>
          <li>To analyze usage patterns and improve platform functionality.</li>
          <li>To prevent fraud and ensure platform safety.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">3. Sharing Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>We may share limited data with service providers who help us run Noisy.</li>
          <li>Your profile (excluding contact details) may be visible to other users.</li>
          <li>We do not sell your data to third parties.</li>
          <li>We may disclose information if legally required or to enforce our terms.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">4. Data Security</h2>
        <p className="mb-6">We implement reasonable security measures to protect your data. However, no platform can be 100% secure, and users must take precautions while sharing information.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">5. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You may access, correct, or delete your personal information.</li>
          <li>You can opt out of marketing communications at any time.</li>
          <li>EU users may have additional rights under the GDPR.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">6. Data Retention</h2>
        <p className="mb-6">We retain your data as long as your account is active or as needed to provide services and comply with legal obligations.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">7. Children’s Privacy</h2>
        <p className="mb-6">Noisy is intended for users 18 and older. We do not knowingly collect data from anyone under 18.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">8. International Data Transfers</h2>
        <p className="mb-6">If you are located outside India, your data may be processed and stored in India or other countries where our servers are located.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">9. Updates to This Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">10. Contact Us</h2>
        <p className="mb-1">If you have any questions or concerns about this policy, contact us at:</p>
        <p className="mb-6">Email: <a href="" className="text-pink-500 underline">chattrix.co.in</a></p>

        <p className="italic">Thank you for trusting Chattrix.</p>
      </div >
    </>
  )
}

export default Privacy
