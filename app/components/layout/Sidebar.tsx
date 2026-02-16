import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-6 hidden md:block">
      <h1 className="text-2xl font-bold text-indigo-600 mb-8">
        Globopersona
      </h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-indigo-600">
          Dashboard
        </Link>

        <Link href="/campaigns" className="block hover:text-indigo-600">
          Campaigns
        </Link>

        <Link href="/campaigns/create" className="block hover:text-indigo-600">
          Create Campaign
        </Link>
      </nav>
    </div>
  );
}
