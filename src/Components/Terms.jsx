import React from 'react'
import Navbar from './Navbar'

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: <span className="italic">05/07/25</span></p>

        <p className="mb-6">
          Welcome to <strong>Chattrix</strong> . By accessing or using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our platform.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">1. Eligibility</h2>
        <p className="mb-6">You must be at least 18 years old to use Chattrix. By using our services, you confirm that you meet this requirement.</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">2. Account Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>All activity under your account is your responsibility.</li>
          <li>You must notify us immediately of unauthorized use or security breaches.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">3. User Conduct</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Respect other users. Harassment, hate speech, or abusive behavior is strictly prohibited.</li>
          <li>Do not impersonate anyone or create fake accounts.</li>
          <li>Do not post or share illegal, explicit, or harmful content.</li>
          <li>Do not use the platform for commercial purposes without permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">4. Content Ownership</h2>
        <p className="mb-6">
          You retain ownership of content you submit, but grant Chattrix a non-exclusive, royalty-free license to use, display, and distribute it on the platform. We do not claim ownership of your photos, messages, or profile content.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">5. Termination</h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate your account at our discretion, with or without notice, for violating these Terms or for any other reason.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">6. Disclaimers</h2>
        <p className="mb-6">
          Chattrix provides a platform for social connection but does not guarantee matches or relationship outcomes. Use the service at your own risk. We are not liable for user behavior or offline interactions.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">7. Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, Chattrix and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">8. Modifications</h2>
        <p className="mb-6">
          We may update these Terms from time to time. Continued use of the platform after changes constitutes your acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">9. Governing Law</h2>
        <p className="mb-6">These Terms shall be governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts of [Insert City, e.g., Mumbai or Bangalore].</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-10 mb-4">10. Contact Us</h2>
        <p className="mb-1">For questions about these Terms, please contact us:</p>
        <p className="mb-6">Email: <a href="" className="text-pink-500 underline">chattrix@terms.co.in</a></p>

        <p className="italic">Thank you for being part of the Chattrix community.</p>
      </div>
    </>
  )
}

export default Terms
