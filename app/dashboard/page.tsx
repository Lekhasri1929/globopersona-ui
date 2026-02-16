import MainLayout from "../components/layout/MainLayout";


export default function Dashboard() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Campaigns</p>
          <h3 className="text-3xl font-bold mt-2">24</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Contacts</p>
          <h3 className="text-3xl font-bold mt-2">1,240</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Open Rate</p>
          <h3 className="text-3xl font-bold mt-2">32%</h3>
        </div>
      </div>
    </MainLayout>
  );
}
