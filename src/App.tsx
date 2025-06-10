import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-blue-900 mb-2">{title}</h2>
    <p className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap">{children}</p>
    <div className="border-b border-gray-200 my-4" />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#f9fbfe] px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">📘 Frendor Privacy Policy</h1>
        <p className="text-sm italic text-gray-500 mb-6">📅 Last Updated: June 9, 2025</p>

        <Section title="🔍 1. Information We Collect">
          {`We collect information that you provide directly to us and information that is collected automatically through your use of the App.

A. Information You Provide
• Account and Profile Information: When you register, we collect your mobile number or email for validation purposes. To build your profile, you must provide an actual photograph of yourself. You may also add information regarding your status and interests through flags and indicators (e.g., "need a lift," "need company").

• Availability and Preferences: You can set your availability status to "Available & open (Green)" or "Not-Available (Red)". You can also manage your content preferences through profile checkboxes (e.g., filtering cuss words or explicit language).

• Communications: We collect information you provide when you report abuse, including any comments, and the content of real-time chats within groups.

• Third-Party Accounts: To use certain call features, you may need to validate your Gmail for Google Meets or your Outlook account for Microsoft Teams calls.

B. Information Collected Automatically
• Location Information: We collect your country and zip/postal code to show you available users nearby.

• Usage Information: We collect data related to your interactions with the App, such as which groups you join, your favorites, and your call status (e.g., if you are in a meeting).

• Device and Ad Information: Our app is ad-based. We work with ad partners like Admob and may collect device identifiers to serve ads, which may appear as bottom banners, full-page, or timed ads.`}
        </Section>

        <Section title="⚙️ 2. How We Use Your Information">
          {`• Create and manage your account.
• Display your profile to other users and connect you based on interests and location.
• Facilitate calls, which may be routed through Google Meet or Teams.
• Provide personalized content, such as suggesting groups or channels based on your profile.
• Send you push notifications based on your subscriptions to keywords, categories, or date ranges.
• Ensure the safety and security of our community by validating users and responding to abuse reports.
• Deliver relevant advertisements.`}
        </Section>

        <Section title="🔄 3. How We Share Your Information">
          {`• With Other Frendor Users: Your profile information, including your photo, availability status, and general location (country/zip code), is visible to other users to enable connections. Any user who is "open" can be seen by another open user if their interests align.

• With Third-Party Services:
  ○ Call Providers: When you initiate a call, we may share information with Google or Microsoft to produce and share a meeting link. Their use of your data is governed by their own privacy policies.
  ○ Advertising Partners: We share data with advertising networks like Admob to show you ads within the App.

• For Legal Compliance: We may share information to comply with a legal obligation or to protect the rights, property, or safety of Frendor, our users, or others.`}
        </Section>

        <Section title="🔒 4. Protecting User Privacy and Safety">
          {`• No Recording of Communications: To protect the privacy of all parties, you are strictly prohibited from recording or saving any calls, video chats, or text chats that occur on the Frendor platform.

• Confidentiality of Shared Details: Any personal information, photos, or conversations shared by users within the App are to be considered confidential. You are prohibited from sharing these details outside the Frendor platform in any form whatsoever. Violation of this rule will result in account termination.

• Prohibition on Data Misuse: You may not sell, reuse, scrape, or otherwise exploit user information obtained from the App for any commercial or personal gain.

• Platform Enforcement:
  ○ The requirement of a real photograph helps ensure authenticity.
  ○ The ability to report abuse with comments allows us to investigate and act on violations.
  ○ Users have the ability to disable their camera for calls.`}
        </Section>

        <Section title="🎛️ 5. Your Choices and Controls">
          {`• Profile Visibility and Status: You can update your profile information and availability status at any time.
• Feature Management: You can turn specific app features on or off from your profile.
• Notifications: You have control over your push notification subscriptions.
• Camera: You have the option to disable your camera during calls.`}
        </Section>

        <Section title="📄 6. Changes to This Privacy Policy">
          {`We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`}
        </Section>

        <Section title="📬 7. Contact Us">
          {`If you have any questions about this Privacy Policy, please contact us.`}
        </Section>

        <p className="text-sm text-center italic text-gray-500 mt-8">
          ✅ This document reflects the latest policies as of June 9, 2025.
        </p>
      </div>
    </div>
  );
};

export default App;