import { useEffect, useState } from "react";
import axios from "axios";
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

/*
ADMIN FRONTEND UI + PAGES (STEP BY STEP)

1. Admin Login Page
   - Email + Password
   - Login Button
   - Token Save in localStorage

2. Dashboard Page
   - Sidebar
   - Top Welcome Section
   - Stats Cards
   - Recent Activity

3. Users Management Page
   - Users Table
   - Search User
   - Delete User

4. Blog Management Page
   - Add Blog
   - Edit Blog
   - Delete Blog

5. Contact Messages Page
   - Inbox UI
   - Reply/Delete

6. Tools Management Page
   - Add New Tool
   - Edit Tool
   - Tool Analytics

7. Settings Page
   - Admin Profile
   - Password Change
   - SEO Settings

8. Logout
   - Remove token
   - Redirect to login page
*/

export default function AdminDashboard() {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAdminData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Blogs", icon: FileText },
    { name: "Messages", icon: Mail },
    { name: "Settings", icon: Settings },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          JVToolsHub Admin
        </h1>

        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 text-gray-700 font-medium transition"
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600 mt-2">
            {adminData?.name || "Admin"} Dashboard Overview
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            "Total Users",
            "Total Blogs",
            "Contact Messages",
            "Tools Active",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
              <p className="text-3xl font-bold text-gray-900">120+</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>

          <div className="space-y-4 text-gray-600">
            <p>• New user registered today</p>
            <p>• Blog post published successfully</p>
            <p>• Contact form message received</p>
            <p>• Tool usage analytics updated</p>
          </div>
        </div>
      </main>
    </section>
  );
}
