import React from "react";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-8">Globopersona</h1>

        <ul className="space-y-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/campaigns">Campaigns</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
