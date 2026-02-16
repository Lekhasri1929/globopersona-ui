export default function Topbar() {
    return (
      <div className="h-16 bg-white border-b flex items-center justify-between px-6">
        <div className="text-lg font-semibold">Welcome Back 👋</div>
  
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Admin</span>
          <div className="w-8 h-8 rounded-full bg-indigo-500" />
        </div>
      </div>
    );
  }
  