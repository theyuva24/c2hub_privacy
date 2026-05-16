import Link from 'next/link';

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Guidelines – C2 Club</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-green-800 leading-relaxed">
              C2 Club is a student-focused community built for learning, collaboration, networking, and healthy discussions. These guidelines explain the behavior expected from all users to keep the platform safe, respectful, and productive.
            </p>
            <p className="text-green-900 font-semibold mt-4">
              Failure to follow these guidelines may result in content removal, temporary suspension, or permanent account termination.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Be Respectful</h2>
              <p className="mb-4">Treat all users with respect, regardless of their background, college, opinions, or achievements.</p>
              <p className="mb-4">Disagreements are allowed, but harassment, bullying, insults, or personal attacks are not.</p>
              <p className="mb-4">Avoid language intended to humiliate, threaten, or intimidate others.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Hate, Harassment, or Toxic Behavior</h2>
              <p className="mb-4">The following are strictly prohibited:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hate speech targeting religion, caste, ethnicity, gender, nationality, or identity</li>
                <li>Threats of violence or encouragement of harmful acts</li>
                <li>Repeated unwanted contact or harassment</li>
                <li>Content intended to shame, humiliate, or provoke individuals or groups</li>
              </ul>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use Anonymous Posting Responsibly</h2>
              <p className="mb-4">Anonymous posting exists to encourage open expression, not misuse.</p>
              <p className="mb-4">Do not use anonymity to spread hate, harassment, rumors, or false accusations.</p>
              <p className="mb-4">Severe misuse of anonymous features may lead to enforcement actions, including account suspension.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Share Authentic and Honest Content</h2>
              <p className="mb-4">Do not post misleading, false, or manipulated information.</p>
              <p className="mb-4">Do not impersonate another individual, organization, or institution.</p>
              <p className="mb-4">Do not create fake listings, fake opportunities, or fraudulent offers.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Marketplace and Transactions Safety</h2>
              <p className="mb-4">If using marketplace or exchange features:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Share accurate item descriptions and honest pricing</li>
                <li>Do not post illegal or unsafe items</li>
                <li>Communicate clearly and transact responsibly</li>
                <li>Report suspicious listings or fraudulent behavior immediately</li>
              </ul>
              <p className="mb-4">C2 Club provides a connection platform; users are responsible for verifying transaction details.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Challenge Participation and Rewards</h2>
              <p className="mb-4">Participate fairly in challenges and competitions.</p>
              <p className="mb-4">Do not manipulate results, submit stolen content, or attempt fraud.</p>
              <p className="mb-4">Follow the specific rules provided for each campaign or challenge.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Protect Privacy — Yours and Others&apos;</h2>
              <p className="mb-4">Do not share sensitive personal information of others without consent.</p>
              <p className="mb-4">Avoid posting phone numbers, addresses, or financial information publicly.</p>
              <p className="mb-4">Report any attempt at scams, impersonation, or identity misuse.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. No Spam or Unwanted Promotions</h2>
              <p className="mb-4">Avoid repetitive promotional posts, referral spam, or unrelated advertisements.</p>
              <p className="mb-4">Do not use automated tools, bots, or scripts to manipulate engagement.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Follow the Law</h2>
              <p className="mb-4">Content or activities that violate local laws or regulations are not permitted. This includes illegal goods, piracy, fraud, or harmful activities.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Hub Participation</h2>
              <p className="mb-4">Follow both platform-wide community guidelines and any additional rules established by the hub administrators.</p>
              <p className="mb-4">Hub administrators may remove posts, comments, or members who violate hub-specific rules or community standards.</p>
              <p className="mb-4">Repeated violations within hubs may result in platform-level moderation actions, including account restrictions.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Reporting and Enforcement</h2>
              <p className="mb-4">If you encounter content that violates these guidelines:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the in-app reporting tools or contact support</li>
                <li>The moderation team may review reports and take necessary actions, including content removal or account restrictions</li>
                <li>Repeated or severe violations may result in permanent account removal</li>
              </ul>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Our Community Commitment</h2>
              <p className="mb-4">C2 Club aims to build a supportive, growth-oriented student network. These guidelines are designed to ensure a safe, positive environment where ideas can be shared constructively and opportunities can be explored responsibly.</p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
            <Link 
              href="https://c2-hubs-privacy.vercel.app/" 
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
