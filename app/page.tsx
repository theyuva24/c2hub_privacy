import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">C2 Club Policy Center</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to C2 Club&apos;s legal and data management center. Here you can find our updated policies, guidelines, and data management tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Privacy Policy */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-blue-900 mb-3">📋 Privacy Policy</h2>
                <p className="text-blue-800 mb-4">
                  Learn how we collect, use, and protect your personal information.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/privacy" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Read Privacy Policy →
                </Link>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-purple-900 mb-3">⚖️ Terms & Conditions</h2>
                <p className="text-purple-800 mb-4">
                  The legal agreement governing your use of C2 Club.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/terms" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Read Terms →
                </Link>
              </div>

              {/* Community Guidelines */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-900 mb-3">🤝 Community Guidelines</h2>
                <p className="text-green-800 mb-4">
                  The behavior expected from all users to keep C2 Club safe.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/guidelines" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Read Guidelines →
                </Link>
              </div>

              {/* Safety Standards */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-red-900 mb-3">🛡️ Safety Standards</h2>
                <p className="text-red-800 mb-4">
                  Our commitment to child safety and content moderation.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/safety-standards" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  Safety Standards →
                </Link>
              </div>

              {/* Account Deletion */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-orange-900 mb-3">🗑️ Account Deletion</h2>
                <p className="text-orange-800 mb-4">
                  Request deletion of your account and personal data.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/account-deletion" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                >
                  Delete Account →
                </Link>
              </div>

              {/* Data Deletion Form */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-yellow-900 mb-3">📝 Data Deletion Form</h2>
                <p className="text-yellow-800 mb-4">
                  Fill out our data deletion request form directly.
                </p>
                <Link 
                  href="https://c2-hubs-privacy.vercel.app/data-deletion" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
                >
                  Data Deletion Form →
                </Link>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-700">
                <strong>Email:</strong> theyuva2024@gmail.com<br />
                <strong>Company:</strong> Yuvaapricity Tech Solutions Pvt Ltd<br />
                <strong>Address:</strong> Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
