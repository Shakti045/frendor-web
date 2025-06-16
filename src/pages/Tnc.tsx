import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{title}</h2>
    <p className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap">{children}</p>
    <div className="border-b border-gray-200 my-4" />
  </div>
);

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-[#f9fbfe] px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">📘 Frendor App - Terms of Use</h1>
        <p className="text-sm italic text-gray-500 mb-6">📅 Last Updated: June 9, 2025</p>

        <Section title="🚀 1. Welcome">
          {`These Terms govern your use of Frendor services. By registering or using the app, you agree to abide by them.`}
        </Section>

        <Section title="🛠️ 2. Our Service">
          {`• Join interest-based groups (2–10 users).
• Discover users by country/postal code.
• Chat and call in real-time.
• Use flags like "need a lift" or "ready now".`}
        </Section>

        <Section title="👤 3. User Accounts">
          {`• Register with verified mobile/email.
• Upload a real, unaltered photo.
• Choose availability status (Green/Red).
• You're responsible for your account security.
• Google/Outlook integration for calls.`}
        </Section>

        <Section title="🧑‍⚖️ 4. Conduct & Content">
          {`• No recording or screenshotting calls/chats.
• No sharing of private user data externally.
• Commercial reuse is forbidden.
• Impersonation, abuse, and harassment are prohibited.
• Report abuse via the in-app system.`}
        </Section>

        <Section title="📡 5. Using the Platform">
          {`• Search users by status and location.
• Join interest-based groups.
• Subscribe to keyword/date/category notifications.
• Ads may appear as banners or timed screens.`}
        </Section>

        <Section title="🔒 6. User Protection">
          {`• No external sharing or recordings.
• Real photos only = real users.
• Abuse reporting and content filters available.
• Unified standards ensure privacy and trust.`}
        </Section>

        <Section title="❌ 7. Termination">
          {`Frendor may terminate accounts for violating terms or at our discretion. You can stop using the service anytime.`}
        </Section>

        <Section title="⚠️ 8. Disclaimers">
          {`We are not responsible for user actions. Use caution. The app is provided “as-is” with no guarantees.`}
        </Section>

        <Section title="🔁 9. Updates to Terms">
          {`These Terms may be revised. Continued usage indicates your acceptance of updates.`}
        </Section>

        <p className="text-sm text-blue-600 hover:underline text-center">
          🔐 Read our <Link to="/privacy-policy">Privacy Policy</Link>
        </p>

        <p className="text-sm text-center italic text-gray-500 mt-6">
          ✅ These Terms apply from June 9, 2025 onward.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
