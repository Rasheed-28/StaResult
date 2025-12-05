import { 
  Home, 
  Users, 
  BookOpen, 
  FileText, 
  AlertTriangle, 
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Students", path: "/students" },
    { icon: BookOpen, label: "Classes", path: "/classes" },
    { icon: FileText, label: "Results", path: "/results" },
    { icon: AlertTriangle, label: "Failure Data", path: "/failure-data" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const currentPath = location.pathname;

  return (
    <div className="w-64 bg-gradient-to-b from-sky-600 to-sky-800 text-white h-screen flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 cursor-pointer">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/logo.png" 
            alt="GradeMaster" 
            className="w-12 h-12 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">StaReport</h1>
            <p className="text-sky-200 text-xs">Result System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path || 
                          (item.path !== "/" && currentPath.startsWith(item.path));

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group cursor-pointer ${
                isActive
                  ? "bg-white text-sky-700 shadow-lg font-semibold"
                  : "hover:bg-sky-700/60 hover:translate-x-1"
              }`}
            >
              <Icon size={20} className={isActive ? "text-sky-600" : "text-sky-200"} />
              <span className="flex-1 text-left">{item.label}</span>
              {isActive && <ChevronRight size={18} className="text-sky-600" />}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sky-700">
        <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-sky-700/60 transition-all duration-200 group cursor-pointer">
          <LogOut size={20} className="text-sky-200 group-hover:text-white cursor-pointer" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}