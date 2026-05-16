import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy – C2 Club</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Effective Date:</strong> 10 February 2026<br />
              <strong>Owner / Data Controller:</strong> Yuvaapricity Tech Solutions Pvt Ltd<br />
              <strong>App Name:</strong> C2 Club<br />
              <strong>Contact:</strong> <a href="mailto:theyuva2024@gmail.com" className="text-blue-600 hover:underline">theyuva2024@gmail.com</a><br />
              <strong>Country of Operation:</strong> India
            </p>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="mb-4">
                This Privacy Policy explains what information C2 Club collects, how it is used, how it is protected, and the choices available to users. By using C2 Club, you agree to the collection and use of information as described in this policy.
              </p>
              <p className="mb-4">
                Users must be <strong>at least 13 years old</strong> to create an account. Users <strong>between 13 and 18 years</strong> should use the platform with parental or guardian guidance.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Information You Provide</h3>
              <p className="mb-2">We may collect the following information when you create and use an account:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Phone number (used for OTP authentication; not publicly visible)</li>
                <li>Name, gender, and date of birth (DOB)</li>
                <li>College name, course, and academic details</li>
                <li>Location (GPS location collected during registration or when edited by the user)</li>
                <li>Optional public profile links such as Instagram ID, LinkedIn ID, or email address</li>
                <li>Posts, comments, images, videos, and other content shared by users</li>
                <li>Information submitted when participating in community activities, challenges, or promotional programs</li>
              </ul>
              <p className="mb-4"><strong>DOB and phone numbers are private and not visible to other users.</strong></p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Information Collected Automatically</h3>
              <p className="mb-2">We may automatically collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Device information (device model, operating system)</li>
                <li>Usage activity such as likes, views, and interactions</li>
                <li>Crash logs and performance data</li>
                <li>Analytics data through Firebase / Google Cloud services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Hubs</h3>
              <p className="mb-4">
                C2 Club allows users to create or join community hubs based on interests, institutions, courses, or locations. When users join or interact within hubs, the platform may record hub membership, participation activity, posts, comments, and interaction data to provide community functionality, moderation, recommendations, and service improvements.
              </p>
              <p className="mb-4">
                Certain hubs may be open for all users to join, while others may require approval from hub administrators. Depending on hub settings, certain profile information and shared content may be visible to other hub members.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
              <p className="mb-2">We use collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and operate the C2 Club platform</li>
                <li>Authenticate users and maintain account security</li>
                <li>Personalize content feeds and recommendations</li>
                <li>Improve performance, reliability, and user experience</li>
                <li>Prevent abuse, fraud, and policy violations</li>
                <li>Send service notifications and updates</li>
                <li>Administer community challenges, campaigns, or promotional programs</li>
              </ul>
              <p className="mb-4"><strong>We do not sell personal data.</strong></p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Public Content and Anonymous Posting</h2>
              <p className="mb-4">
                Posts, comments, images, and other publicly shared content are visible to other users within the app.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Anonymity Protection</h3>
              <p className="mb-4">
                When you choose to post or comment anonymously, C2 Club uses an internal <strong>Ghost Identity architecture</strong> designed to protect your identity from other users:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your real account identifier is removed from publicly visible content and replaced with a system-generated anonymous reference.</li>
                <li>The mapping between the anonymous reference and the real user identity is stored in a restricted, access-controlled administrative system used only for moderation, abuse prevention, safety investigations, and legal compliance.</li>
                <li>Access to identity-mapping records is strictly limited to authorized platform administrators and is protected by security controls and audit logging.</li>
                <li>System notifications generated from anonymous interactions are identity-scrubbed, meaning no identifying personal metadata is transmitted to other users’ devices through notification payloads.</li>
                <li>Anonymous content remains anonymous to other users; however, the platform may internally identify the account responsible for such content if required to enforce platform rules, investigate abuse, or comply with legal obligations.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Messaging and Communication Features</h3>
              <p className="mb-4">
                C2 Club provides in-app communication features that allow users to exchange messages after a mutual connection is established. Messaging features may also be used to communicate regarding listings, marketplace interactions, or community activities.
              </p>
              <p className="mb-4">
                When users send messages through the platform, message content, attachments, timestamps, and related interaction data may be stored and processed to deliver the service, maintain system security, prevent spam or abuse, and enable user support functions. Messaging data is accessible only to the communicating users and authorized system processes, except where limited access is required for safety investigations, abuse reporting, or legal compliance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketplace Listings and Transactions</h3>
              <p className="mb-4">
                C2 Club may allow users to post listings for buying, selling, or exchanging goods and services. When users create listings, the platform may collect and display information necessary to facilitate transactions, including item descriptions, images, pricing information, and general location details.
              </p>
              <p className="mb-4">
                Location information displayed in listings is limited to general location information provided by users and is intended solely to help facilitate user-to-user transactions. C2 Club does not act as a buyer, seller, or payment intermediary unless explicitly stated within the service. Users are responsible for verifying transaction details and interacting with other users safely.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing</h2>
              <p className="mb-2">We may share information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With trusted service providers such as cloud hosting, storage, and analytics providers (e.g., Firebase / Google Cloud)</li>
                <li>With authorized campaign or promotional partners solely for administering sponsored programs, judging submissions, or campaign moderation where applicable</li>
                <li>When required by law or legal processes</li>
                <li>To protect the safety, rights, or integrity of users and the platform</li>
                <li>During company restructuring, merger, or acquisition</li>
              </ul>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Account Deletion</h2>
              <p className="mb-4">Users may delete their account at any time through the app. During deletion, users may be provided options to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Permanently delete their account along with posts, comments, profile data, and uploaded media; or</li>
                <li>Delete the account while anonymizing previously shared public content, in which case posts and comments remain visible but are no longer associated with the user’s identity.</li>
              </ul>
              <p className="mb-2">After deletion:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Authentication credentials are removed.</li>
                <li>Active profile data is deleted from operational systems.</li>
                <li>Temporary encrypted backup copies may remain for a limited period (typically up to 30 days) before automatic removal.</li>
                <li>Limited security or audit logs may be retained temporarily for fraud prevention or legal compliance.</li>
                <li>Financial or reward-related transaction records may be retained where required for accounting, fraud prevention, or regulatory compliance.</li>
              </ul>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Reward Programs and Incentive Payments</h2>
              <p className="mb-4">
                C2 Club may introduce promotional challenges, competitions, or incentive programs in which users may receive rewards based on participation or performance.
              </p>
              <p className="mb-4">
                If users participate in such programs, we may collect additional information necessary to administer the program, verify eligibility, prevent fraud, and process reward payments. This information may include payment identifiers (such as UPI ID, bank account details, or similar payout information) and legally required verification information where applicable.
              </p>
              <p className="mb-4">
                Certain reward programs may have additional eligibility requirements, including age-related eligibility conditions, geographic restrictions, or campaign-specific rules. Where required, reward-related transaction records may be retained for accounting, legal, and regulatory compliance even if the user later deletes their account.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
              <p className="mb-4">
                We implement reasonable technical and organizational safeguards to protect user data, including secure storage, restricted access, and encrypted communication. However, no digital system can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children’s Privacy</h2>
              <p className="mb-4">
                C2 Club is not intended for children under 13 years of age. Accounts identified as belonging to users under 13 may be removed from our systems. Users aged 13–17 should use the platform with parental or guardian guidance.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically to reflect service changes or legal requirements. Updated versions will be posted within the app or website with a revised effective date.
              </p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="mb-4">
                For any privacy-related questions, requests, or concerns, contact:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:theyuva2024@gmail.com" className="text-blue-600 hover:underline">theyuva2024@gmail.com</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Company:</strong> Yuvaapricity Tech Solutions Pvt Ltd
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
            <Link 
              href="https://c2-hubs-privacy.vercel.app/data-deletion" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Data Deletion Form
            </Link>
            <Link 
              href="https://c2-hubs-privacy.vercel.app/account-deletion" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Account Deletion Guide
            </Link>
            <Link 
              href="https://c2-hubs-privacy.vercel.app/safety-standards" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Safety Standards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
