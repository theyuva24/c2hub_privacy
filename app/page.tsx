import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">C2 Club Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to C2 Club&apos;s privacy policy and data management center.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-3">📋 Privacy Policy</h2>
                <p className="text-blue-800 mb-4">
                  Learn how we collect, use, and protect your personal information.
                </p>
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Read Privacy Policy →
                </Link>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-900 mb-3">🗑️ Account Deletion</h2>
                <p className="text-green-800 mb-4">
                  Request deletion of your account and personal data.
                </p>
                <Link 
                  href="/account-deletion" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Delete Account →
                </Link>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-yellow-900 mb-3">📝 Data Deletion Form</h2>
                <p className="text-yellow-800 mb-4">
                  Fill out our data deletion request form.
                </p>
                <Link 
                  href="/data-deletion" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
                >
                  Data Deletion Form →
                </Link>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-red-900 mb-3">🛡️ Safety Standards</h2>
                <p className="text-red-800 mb-4">
                  Our commitment to child safety and content moderation.
                </p>
                <Link 
                  href="/safety-standards" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  Safety Standards →
                </Link>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-700">
                <strong>Email:</strong> yuva2024@gmail.com<br />
                <strong>Address:</strong> Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
