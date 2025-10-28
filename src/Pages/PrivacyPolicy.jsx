import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold text-green-700">GreenNest</span>, we value your privacy
          and are committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address, and preferences when
          you register, subscribe to updates, or contact us. We also collect non-personal
          information such as browser type, device information, and general usage statistics.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          Your information helps us improve our website, provide customer support, and send you
          relevant updates about our services. We do not sell or share your personal information
          with third parties except as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We use secure technologies and follow industry-standard practices to protect your data
          against unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          4. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You may request to access, modify, or delete your personal information at any time by
          contacting us through our support email.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
          5. Updates to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          GreenNest reserves the right to update this Privacy Policy periodically. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <p className="text-gray-600 mt-8 text-center">
          Last Updated: October 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
