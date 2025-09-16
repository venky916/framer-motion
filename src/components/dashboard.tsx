import { Bell } from "lucide-react";
import { Sidebar } from "./sidebar";

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="mb-6 flex items-center justify-between bg-white w-full py-2 px-4 rounded-md">
          <h1 className="text-2xl font-bold text-black">Overview</h1>
          <div className="rounded-full p-2 bg-gray-200">
            <Bell className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            </div>
            <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
              12k
            </span>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            </div>
            <span className="rounded bg-gray-500 px-2.5 py-0.5 text-xs font-medium text-gray-300">
              Increased by 257 since last month
            </span>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Active Sessions
              </h3>
            </div>
            <span className="rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
              3h
            </span>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Conversion Rate
              </h3>
            </div>
            <span className="rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
              Decreased by 1.8% since last week
            </span>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-semibold text-black">
              User Activity
            </h3>
            <div className="flex h-64 items-center justify-center rounded bg-gray-100">
              <p className="text-gray-900">Chart Placeholder</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-semibold">Revenue Overview</h3>
            <div className="flex h-64 items-center justify-center rounded bg-gray-100">
              <p className="text-gray-500">Chart Placeholder</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold text-black">
              Recent Activity
            </h3>
          </div>
          <div className="divide-y">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center p-6 text-neutral-700"
              >
                <div className="mr-4 h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex-1">
                  <p className="font-medium">
                    User #{item} performed an action
                  </p>
                  <p className="text-sm text-gray-900">2 hours ago</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
