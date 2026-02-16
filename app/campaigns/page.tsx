"use client";

import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Welcome Email", status: "Active" },
    { id: 2, name: "Black Friday Sale", status: "Draft" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Draft");

  const handleCreate = () => {
    if (!name) return;

    const newCampaign = {
      id: campaigns.length + 1,
      name,
      status,
    };

    setCampaigns([...campaigns, newCampaign]);
    setName("");
    setStatus("Draft");
    setShowForm(false);
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Campaigns</h2>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Create Campaign
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-lg">
          <div className="mb-4">
            <label className="block mb-2 font-medium">Campaign Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Status</label>
            <select
              className="w-full border p-2 rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Draft</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>

          <button
            onClick={handleCreate}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Save Campaign
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
        <thead>
  <tr>
    <th className="p-4">Name</th>
    <th className="p-4">Status</th>
    <th className="p-4">Actions</th>
  </tr>
</thead>


<tbody>
  {campaigns.length === 0 ? (
    <tr>
      <td colSpan={3} className="p-6 text-center text-gray-500">
        No campaigns available.
      </td>
    </tr>
  ) : (
    campaigns.map((campaign) => (
      <tr key={campaign.id} className="border-t">
        <td className="p-4">{campaign.name}</td>

        <td className="p-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              campaign.status === "Active"
                ? "bg-green-100 text-green-700"
                : campaign.status === "Draft"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {campaign.status}
          </span>
        </td>

        <td className="p-4">
          <button
            onClick={() =>
              setCampaigns(campaigns.filter((c) => c.id !== campaign.id))
            }
            className="text-red-600 font-medium"
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>


        </table>
      </div>
    </MainLayout>
  );
}
