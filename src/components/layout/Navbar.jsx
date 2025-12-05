import { Search, Bell, User, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
      {/* Left: Search Bar */}
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students, results, classes..."
            className="w-full pl-12 pr-5 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all duration-200 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right: Notifications + User Menu */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="cursor-pointer relative p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 group">
          <Bell size={20} className="text-gray-600 group-hover:text-sky-600" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="cursor-pointer flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">admin@school.edu</p>
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100">
                  <p className="font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-500">admin@school.edu</p>
                </div>
                <button
                  onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-sky-50 text-gray-700 transition"
                >
                  <User size={18} />
                  <span>View Profile</span>
                </button>
                <button
                  onClick={() => {
                    navigate("/settings");
                    setDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-sky-50 text-gray-700 transition"
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <div className="border-t border-gray-100 my-2"></div>
                <button
                  onClick={() => navigate("/login")}
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 text-red-600 transition font-medium"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}