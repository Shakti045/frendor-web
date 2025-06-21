import React from "react";

const AccountDeletionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        🗑️ Account & Data Deletion Request
      </h1>

      <div className="mb-8">
        <p>
          <strong>App Name:</strong> Frendor
        </p>
        <p>
          <strong>Developer:</strong> Frendor Technologies
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          🔧 How to Request Deletion
        </h2>
        <p>To request deletion of your account and associated data:</p>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Send an email to <strong>1manhelper22@gmail.com</strong></li>
          <li>Use the subject line: <strong>“Delete My Account”</strong></li>
          <li>Include the following in your email:</li>
        </ol>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-4 font-mono whitespace-pre-wrap">
{`To: 1manhelper22@gmail.com
Subject: Delete My Account

Dear Frendor Support Team,

I would like to request the deletion of my account and all associated data from your systems.

Registered Email Address: [Your Registered Email Address]
User ID (if available): [Your User ID]

Please confirm once the deletion has been completed.

Thank you,
[Your Name]`}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          🗂️ What Data Will Be Deleted
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your profile information (name, email, birth details)</li>
          <li>Usage data related to your activities</li>
          <li>Any associated preferences and saved data</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          📁 What Data May Be Retained
        </h2>
        <p>
          Some data may be retained for a limited time due to legal, billing,
          or fraud prevention obligations:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <strong>Billing records:</strong> Retained for <strong>30 days</strong>
          </li>
          <li>
            <strong>Audit logs:</strong> Retained only as required by applicable
            laws
          </li>
        </ul>
        <p className="mt-2">
          No data will be used for any other purpose after deletion is requested.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          📌 Important Notes
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Once your account is deleted, the action is <strong>permanent and
            cannot be undone</strong>.
          </li>
          <li>
            If you reinstall the app later, a <strong>new account</strong> will be
            created automatically.
          </li>
        </ul>
      </div>

      <div className="text-sm text-gray-600">
        If you have any questions, feel free to contact us at <strong>1manhelper22@gmail.com</strong>
      </div>
    </div>
  );
};

export default AccountDeletionPage;
