import Link from 'next/link';

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">🧾 Delete Your C2 Hubs Account and Data</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Last updated:</strong> August 5, 2025<br />
                <strong>App name:</strong> C2 Hubs<br />
                <strong>Developer name:</strong> C2 Hubs Team
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔐 How to Request Account Deletion</h2>
              <p className="text-gray-700 mb-4">
                If you no longer wish to use C2 Hubs and want your account and personal data deleted, 
                you can request deletion using one of the following methods:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-2">📧 Email Request</h3>
                <p className="text-gray-700 mb-2">
                  You can email us at <strong>yuva2024@gmail.com</strong> with the subject line:
                </p>
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  &quot;Delete My C2 Hubs Account&quot;
                </div>
                <p className="text-gray-700 mt-2">
                  Please include your registered phone number in the email so we can verify your account 
                  and process your request securely.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">🗃️ What Data Will Be Deleted</h2>
              <p className="text-gray-700 mb-4">
                Once we receive and verify your request, we will permanently delete the following 
                information associated with your account:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your phone number and profile information</li>
                <li>Your saved posts, likes, and comments</li>
                <li>Your participation in challenges or hubs</li>
                <li>Any preferences or usage data linked to your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">📌 What Data May Be Retained (and Why)</h2>
              <p className="text-gray-700 mb-4">
                Some non-personal or anonymized data may be retained temporarily for operational, 
                security, or legal purposes, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Server or crash logs (retained for up to 30 days)</li>
                <li>Aggregated usage statistics (not linked to your identity)</li>
                <li>Compliance-related records (if legally required)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This retained data does not identify you personally and is used only to maintain 
                the integrity of our systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">⏱️ Processing Time</h2>
              <p className="text-gray-700 mb-4">
                Account deletion requests are typically processed within <strong>5–7 business days</strong> 
                after identity verification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">💬 Need Help?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>📧 Email:</strong> yuva2024@gmail.com
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
            <Link 
              href="/privacy" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ← Back to Privacy Policy
            </Link>
            <Link 
              href="/data-deletion" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Data Deletion Form →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 