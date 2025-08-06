import Link from 'next/link';

export default function ChildSafetyStandards() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Child Safety Standards (CSAE Policy)
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">1. Our Commitment</h2>
              <p>
                C2 Hubs is committed to ensuring the safety of all users, especially minors.
                We maintain a strict zero-tolerance policy against child sexual abuse material (CSAM)
                and any form of child exploitation.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">2. Moderation and Detection</h2>
              <ul className="list-disc pl-6">
                <li>We use automated systems to detect and flag inappropriate content.</li>
                <li>All user-generated content is monitored using both AI and human moderators.</li>
                <li>We promptly remove any content or account involved in suspected CSAM.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">3. Reporting and Enforcement</h2>
              <p>
                Users can report suspicious behavior or content directly within the app using the
                built-in reporting tools. We take all reports seriously and investigate them promptly.
              </p>
              <p>
                When required, we report cases to relevant authorities including local law enforcement
                and cybercrime units in compliance with Indian IT laws and global CSAE standards.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">4. Contact for Child Safety</h2>
              <p>
                For urgent child safety concerns, please contact our designated safety officer:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> marjunsm@gmail.com<br />
                  <strong>Location:</strong> Bangalore, India
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">5. Compliance</h2>
              <p>
                We comply with child safety laws including the POCSO Act, IT Act 2000, and
                Google Play’s CSAE policy. We are committed to protecting vulnerable users and
                fostering a safe online community.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
