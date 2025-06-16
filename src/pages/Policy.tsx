import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{title}</h2>
    <p className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap">{children}</p>
    <div className="border-b border-gray-200 my-4" />
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f9fbfe] px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">🔐 Frendor Privacy Policy</h1>
        <p className="text-sm italic text-gray-500 mb-6">📅 Last Updated: June 9, 2025</p>

        <Section title="🔍 1. Information We Collect">
          {`• Account & Profile: Mobile/email, real photo, availability, and interests.
• Preferences: Content filters, cuss word settings.
• Communication: Abuse reports, in-app messages.
• Location & Usage: Country/zip, groups, favorites.
• Ads & Devices: Device IDs for ad targeting.`}
        </Section>

        <Section title="⚙️ 2. How We Use Your Information">
          {`• Manage your account and show your profile.
• Connect users based on location and interests.
• Enable Google Meet / Teams calls.
• Push notifications based on preferences.
• Ensure platform safety and deliver ads.`}
        </Section>

        <Section title="🔄 3. How We Share Your Information">
          {`• With other users: Profile, status, location.
• With third parties:
  - Google/Microsoft for calls.
  - Admob for ads.
• For legal compliance when required.`}
        </Section>

        <Section title="🔒 4. Privacy and Safety">
          {`• No recordings or external sharing allowed.
• Personal details must stay within the app.
• No commercial reuse or impersonation.
• Abuse reports are taken seriously.
• Real photos only; cameras can be disabled.`}
        </Section>

        <Section title="🎛️ 5. Your Controls">
          {`• Update profile/status anytime.
• Manage feature toggles and push alerts.
• Disable camera if desired.`}
        </Section>

        <Section title="📄 6. Policy Changes">
          {`We may update this policy and notify users on changes. Continued use confirms acceptance.`}
        </Section>

        <Section title="📬 7. Contact Us">
          {`Have privacy questions? Reach out via the app.`}
        </Section>

        <p className="text-sm text-blue-600 hover:underline text-center">
          📄 Read our <Link to="/terms-of-use">Terms of Use</Link>
        </p>

        <p className="text-sm text-center italic text-gray-500 mt-6">
          ✅ This document reflects the latest privacy practices as of June 9, 2025.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
