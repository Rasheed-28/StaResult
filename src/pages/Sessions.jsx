import { useState } from "react";
import { 
  Calendar,
  Plus,
  Edit,
  Trash2,
  Clock,
  BookOpen,
  Users,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  XCircle,
  Play,
  Pause,
  Archive,
  Copy,
  FileText,
  Settings,
  Eye,
  BarChart3
} from "lucide-react";

export default function Sessions() {
  const [selectedView, setSelectedView] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const views = [
    { id: "all", label: "All Sessions", count: 8 },
    { id: "active", label: "Active", count: 2 },
    { id: "upcoming", label: "Upcoming", count: 3 },
    { id: "archived", label: "Archived", count: 3 }
  ];

  const sessions = [
    {
      id: 1,
      name: "2024-2025",
      startDate: "Aug 15, 2024",
      endDate: "Jun 30, 2025",
      status: "active",
      isDefault: true,
      totalStudents: 1250,
      totalClasses: 24,
      terms: 4,
      completionRate: 45,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 2,
      name: "2023-2024",
      startDate: "Aug 10, 2023",
      endDate: "Jun 25, 2024",
      status: "archived",
      isDefault: false,
      totalStudents: 1180,
      totalClasses: 22,
      terms: 4,
      completionRate: 100,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: 3,
      name: "2025-2026",
      startDate: "Aug 20, 2025",
      endDate: "Jun 28, 2026",
      status: "upcoming",
      isDefault: false,
      totalStudents: 0,
      totalClasses: 0,
      terms: 4,
      completionRate: 0,
      color: "from-sky-500 to-sky-600"
    },
    {
      id: 4,
      name: "Summer Session 2024",
      startDate: "Jul 1, 2024",
      endDate: "Aug 10, 2024",
      status: "active",
      isDefault: false,
      totalStudents: 320,
      totalClasses: 8,
      terms: 1,
      completionRate: 80,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "2022-2023",
      startDate: "Aug 15, 2022",
      endDate: "Jun 20, 2023",
      status: "archived",
      isDefault: false,
      totalStudents: 1050,
      totalClasses: 20,
      terms: 4,
      completionRate: 100,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: 6,
      name: "Winter Session 2024",
      startDate: "Dec 15, 2024",
      endDate: "Feb 28, 2025",
      status: "upcoming",
      isDefault: false,
      totalStudents: 0,
      totalClasses: 0,
      terms: 1,
      completionRate: 0,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const filteredSessions = sessions.filter(session => {
    if (selectedView === "all") return true;
    return session.status === selectedView;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Session Management</h1>
          <p className="text-gray-600">Manage academic sessions and terms</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-xl hover:from-sky-700 hover:to-sky-800 transition-all shadow-md hover:shadow-lg font-medium"
        >
          <Plus size={20} />
          <span>Create New Session</span>
        </button>
      </div>

      {/* Stats */}
      <SessionStats sessions={sessions} />

      {/* View Filters */}
      <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
                selectedView === view.id
                  ? "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium">{view.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                selectedView === view.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}>
                {view.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sessions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      {/* Add Session Modal */}
      {showAddModal && (
        <AddSessionModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
}

// Session Stats Component
function SessionStats({ sessions }) {
  const activeCount = sessions.filter(s => s.status === "active").length;
  const totalStudents = sessions.reduce((acc, s) => acc + s.totalStudents, 0);
  const avgCompletion = Math.round(
    sessions.reduce((acc, s) => acc + s.completionRate, 0) / sessions.length
  );

  const stats = [
    {
      label: "Total Sessions",
      value: sessions.length,
      icon: BookOpen,
      color: "from-sky-500 to-sky-600",
      bg: "bg-sky-50",
      textColor: "text-sky-700"
    },
    {
      label: "Active Sessions",
      value: activeCount,
      icon: Play,
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
      textColor: "text-emerald-700"
    },
    {
      label: "Total Students",
      value: totalStudents.toLocaleString(),
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      label: "Avg Completion",
      value: `${avgCompletion}%`,
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className={`${stat.bg} rounded-xl p-5 border border-gray-100`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                <Icon size={24} className="text-white" />
              </div>
              <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
            <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}

// Session Card Component
function SessionCard({ session }) {
  const getStatusBadge = (status) => {
    switch(status) {
      case "active":
        return <span className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold">
          <Play size={12} /> Active
        </span>;
      case "upcoming":
        return <span className="flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-xs font-bold">
          <Clock size={12} /> Upcoming
        </span>;
      case "archived":
        return <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
          <Archive size={12} /> Archived
        </span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
      {/* Header */}
      <div className={`bg-gradient-to-r ${session.color} p-6 text-white`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">{session.name}</h3>
              {session.isDefault && (
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold">
                  DEFAULT
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Calendar size={16} />
              <span>{session.startDate} - {session.endDate}</span>
            </div>
          </div>
          {getStatusBadge(session.status)}
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium opacity-90">Session Progress</span>
            <span className="text-sm font-bold">{session.completionRate}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500" 
              style={{width: `${session.completionRate}%`}}
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <Users size={20} className="mx-auto text-gray-600 mb-2" />
            <p className="text-xl font-bold text-gray-800">{session.totalStudents}</p>
            <p className="text-xs text-gray-600">Students</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <GraduationCap size={20} className="mx-auto text-gray-600 mb-2" />
            <p className="text-xl font-bold text-gray-800">{session.totalClasses}</p>
            <p className="text-xs text-gray-600">Classes</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-xl">
            <BookOpen size={20} className="mx-auto text-gray-600 mb-2" />
            <p className="text-xl font-bold text-gray-800">{session.terms}</p>
            <p className="text-xs text-gray-600">Terms</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition font-medium text-sm">
            <Eye size={16} />
            <span>View Details</span>
          </button>
          <button className="cursor-pointer p-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            <Edit size={16} />
          </button>
          <button className="cursor-pointer p-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            <Copy size={16} />
          </button>
          <button className="cursor-pointer p-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            <Settings size={16} />
          </button>
          {session.status !== "active" && (
            <button className="cursor-pointer p-2.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
              <Trash2 size={16} />
            </button>
          )}
        </div>

        {/* Quick Actions */}
        {session.status === "upcoming" && (
          <div className="mt-4 p-3 bg-sky-50 border border-sky-200 rounded-lg">
            <p className="text-sm text-sky-700 mb-2 font-medium">Quick Actions</p>
            <div className="flex gap-2">
              <button className="cursor-pointer flex-1 px-3 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition text-xs font-medium">
                Activate Session
              </button>
              <button className="cursor-pointer flex-1 px-3 py-2 bg-white border border-sky-300 text-sky-700 rounded-lg hover:bg-sky-50 transition text-xs font-medium">
                Setup Classes
              </button>
            </div>
          </div>
        )}

        {session.status === "active" && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-700 mb-2 font-medium">Session is Live</p>
            <div className="flex gap-2">
              <button className="cursor-pointer flex-1 px-3 py-2 bg-white border border-emerald-300 text-emerald-700 rounded-lg hover:bg-emerald-50 transition text-xs font-medium">
                View Reports
              </button>
              <button className="cursor-pointer flex-1 px-3 py-2 bg-white border border-emerald-300 text-emerald-700 rounded-lg hover:bg-emerald-50 transition text-xs font-medium">
                Manage Terms
              </button>
            </div>
          </div>
        )}

        {session.status === "archived" && (
          <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-700 mb-2 font-medium">Archived Session</p>
            <div className="flex gap-2">
              <button className="cursor-pointer flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition text-xs font-medium">
                <BarChart3 size={14} className="inline mr-1" />
                View Analytics
              </button>
              <button className="cursor-pointer flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition text-xs font-medium">
                <FileText size={14} className="inline mr-1" />
                Export Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Add Session Modal Component
function AddSessionModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    terms: "4",
    isDefault: false
  });

  const handleSubmit = () => {
    console.log("Creating session:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Plus size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Create New Session</h2>
                <p className="text-sm opacity-90">Set up a new academic session</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer w-8 h-8 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center justify-center"
            >
              <XCircle size={20} />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="space-y-5">
            {/* Session Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Session Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g., 2024-2025"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Number of Terms */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Terms *
              </label>
              <select
                value={formData.terms}
                onChange={(e) => setFormData({...formData, terms: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              >
                <option value="1">1 Term</option>
                <option value="2">2 Terms</option>
                <option value="3">3 Terms</option>
                <option value="4">4 Terms</option>
              </select>
            </div>

            {/* Default Session */}
            <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <input
                type="checkbox"
                id="isDefault"
                checked={formData.isDefault}
                onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                className="w-5 h-5 text-sky-600 rounded cursor-pointer"
              />
              <label htmlFor="isDefault" className="flex-1 cursor-pointer">
                <p className="font-semibold text-gray-800">Set as Default Session</p>
                <p className="text-sm text-gray-600">This will be the primary active session</p>
              </label>
            </div>

            {/* Info Box */}
            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">What happens next?</p>
                  <p className="text-sm text-gray-600">
                    After creating the session, you'll be able to set up classes, assign teachers, 
                    and configure term dates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="cursor-pointer flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="cursor-pointer flex-1 px-4 py-3 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-xl hover:from-sky-700 hover:to-sky-800 transition font-medium shadow-md"
            >
              Create Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}