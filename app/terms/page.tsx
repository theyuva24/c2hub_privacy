import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions – C2 Club</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Effective Date:</strong> 10 February 2026<br />
              <strong>Company:</strong> Yuvaapricity Tech Solutions Pvt Ltd<br />
              <strong>Contact:</strong> <a href="mailto:theyuva2024@gmail.com" className="text-blue-600 hover:underline">theyuva2024@gmail.com</a>
            </p>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility</h2>
              <p className="mb-4">Users must be at least 13 years old to create an account.</p>
              <p className="mb-4">Users aged 13-17 may use the Platform under parental or guardian guidance.</p>
              <p className="mb-4">By registering, you confirm that the information provided is accurate and that you meet the eligibility requirements.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts and Responsibility</h2>
              <p className="mb-4">Users are responsible for all activity conducted through their accounts.</p>
              <p className="mb-4">Users must maintain the confidentiality of login credentials and phone verification access.</p>
              <p className="mb-4">The Platform is not responsible for unauthorized activity resulting from user negligence in protecting account access.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Content and Ownership</h2>
              <p className="mb-4">Users retain ownership of the content they create and upload.</p>
              <p className="mb-4">By posting content, users grant C2 Club a non-exclusive, worldwide, royalty-free license to host, display, distribute, promote, and use the content for service operation and promotional purposes.</p>
              <p className="mb-4">Content may continue to appear in anonymized form if the user deletes their account and chooses anonymization during deletion.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Anonymous Posting</h2>
              <p className="mb-4">Anonymous posts are anonymous to other users but may be internally traceable by the Platform for safety, moderation, and legal compliance purposes.</p>
              <p className="mb-4">Abuse of anonymous posting features may result in content removal, suspension, or permanent account termination.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="mb-4">Users agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Post illegal, harmful, abusive, defamatory, threatening, or hateful content</li>
                <li>Impersonate another individual or organization</li>
                <li>Engage in fraud, scam activity, or manipulation of listings or rewards</li>
                <li>Upload copyrighted material without authorization</li>
                <li>Distribute spam, malware, or unauthorized advertisements</li>
              </ul>
              <p className="mb-4"><strong>Violation may result in content removal, suspension, or permanent ban.</strong></p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Moderation and Enforcement</h2>
              <p className="mb-4">C2 Club reserves the right, at its sole discretion, to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remove or restrict any content</li>
                <li>Temporarily suspend or permanently terminate accounts</li>
                <li>Investigate violations and take necessary enforcement actions</li>
                <li>Modify or discontinue features where necessary for safety or operational reasons</li>
              </ul>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Messaging and Connections</h2>
              <p className="mb-4">Messaging features are available only after mutual connection acceptance.</p>
              <p className="mb-4">Marketplace or listing-related communications occur directly between users.</p>
              <p className="mb-4">The Platform is not responsible for agreements, negotiations, or outcomes resulting from user-to-user communications.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Community Hubs and Group Participation</h2>
              <p className="mb-4">Users may create, join, or participate in community hubs subject to platform policies.</p>
              <p className="mb-4">Hubs may be configured as open-access or approval-based communities.</p>
              <p className="mb-4">Hub creators or designated hub administrators may manage membership, approve or reject join requests, remove content within the hub, and restrict or remove members who violate hub rules or platform policies.</p>
              <p className="mb-4">C2 Club retains the right to review hub activities, moderate content, restrict hub functionality, or suspend hub-related privileges where necessary for safety, legal compliance, or policy enforcement.</p>
              <p className="mb-4">The platform is not responsible for the actions, conduct, or content shared by hub members.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Marketplace and Listings Disclaimer</h2>
              <p className="mb-4">C2 Club may allow users to post listings for buying, selling, or exchanging goods or services.</p>
              <p className="mb-4">The Platform acts only as a listing and connection service and is not a buyer, seller, payment intermediary, or delivery agent.</p>
              <p className="mb-4">Transactions occur solely between users, and users are responsible for verifying item authenticity, pricing, legality, and transaction safety.</p>
              <p className="mb-4">The Platform does not guarantee product quality, delivery, or transaction completion.</p>
              <p className="mb-4">Fraudulent listings or misuse may result in account termination.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Challenges, Promotions, and Rewards</h2>
              <p className="mb-4">The Platform may conduct promotional challenges or campaigns offering rewards based on participation or performance.</p>
              <p className="mb-4">Eligibility, rules, and evaluation criteria may vary for each campaign.</p>
              <p className="mb-4">Fraudulent participation or manipulation may result in disqualification.</p>
              <p className="mb-4">Where legally permissible, platform decisions regarding campaign administration and eligibility are final.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Fees and Payments</h2>
              <p className="mb-4">Use of the Platform is currently free unless otherwise specified.</p>
              <p className="mb-4">The Platform does not process peer-to-peer marketplace payments unless explicitly stated.</p>
              <p className="mb-4">Users are responsible for any tax or legal obligations related to rewards or transactions where applicable.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Account Termination</h2>
              <p className="mb-4">Accounts may be suspended or terminated if:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Terms are violated</li>
                <li>Fraud, abuse, or illegal activity is detected</li>
                <li>Listings or transactions are manipulated</li>
                <li>Required information is falsified</li>
              </ul>
              <p className="mb-4">Inactive accounts may be deactivated after extended inactivity.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Platform Availability</h2>
              <p className="mb-4">The Platform may be modified, updated, temporarily unavailable, or discontinued at any time due to maintenance, upgrades, or operational reasons. The Platform is not liable for temporary service interruptions.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Limitation of Liability</h2>
              <p className="mb-4">C2 Club is not responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>User-generated content</li>
                <li>Disputes between users</li>
                <li>Marketplace transactions conducted between users</li>
                <li>Losses arising from user interactions or misuse of the Platform</li>
              </ul>
              <p className="mb-4">Services are provided on an &quot;as available&quot; basis without warranties of uninterrupted availability.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="mb-4">These Terms may be updated periodically. Continued use of the Platform after updates constitutes acceptance of the revised Terms.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Governing Law</h2>
              <p className="mb-4">These Terms shall be governed by the laws of India.</p>
              <p className="mb-4">Any disputes shall be subject to the jurisdiction of the courts located in Bengaluru, Karnataka.</p>
            </section>

            <section className="mb-8 border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Us</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  For support or legal inquiries, contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Email:</strong> <a href="mailto:theyuva2024@gmail.com" className="text-blue-600 hover:underline">theyuva2024@gmail.com</a>
                </p>
              </div>
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
