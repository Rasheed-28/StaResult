import { useState } from "react";
import { 
  Building2,
  Bell,
  Shield,
  Users,
  Palette,
  Database,
  Mail,
  Globe,
  Clock,
  FileText,
  Printer,
  Key,
  Save,
  RefreshCw,
  Upload,
  Check,
  Camera
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: Building2 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "users", label: "User Management", icon: Users },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
    { id: "data", label: "Data & Backup", icon: Database }
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your school management system preferences</p>
      </div>

      {/* Tabs */}
      <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {activeTab === "general" && <GeneralSettings />}
        {activeTab === "notifications" && <NotificationSettings />}
        {activeTab === "users" && <UserManagementSettings />}
        {activeTab === "appearance" && <AppearanceSettings />}
        {activeTab === "security" && <SecuritySettings />}
        {activeTab === "data" && <DataBackupSettings />}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-medium ${
            saved
              ? "bg-emerald-600 text-white"
              : "bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:from-sky-700 hover:to-sky-800 shadow-md hover:shadow-lg"
          }`}
        >
          {saved ? (
            <>
              <Check size={20} />
              <span>Settings Saved!</span>
            </>
          ) : (
            <>
              <Save size={20} />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// General Settings Component
function GeneralSettings() {
  const [schoolInfo, setSchoolInfo] = useState({
    name: "Green Valley High School",
    code: "GVHS-2024",
    email: "info@greenvalley.edu",
    phone: "+92-51-1234567",
    address: "123 Education Street, Islamabad",
    website: "www.greenvalley.edu.pk"
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">School Information</h2>
        <p className="text-gray-600 text-sm">Update your school's basic information</p>
      </div>

      {/* School Logo */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <label className="block text-sm font-semibold text-gray-700 mb-4">School Logo</label>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center shadow-md">
            <Building2 size={40} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-3">Upload your school logo (PNG, JPG up to 2MB)</p>
            <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              <Upload size={16} />
              <span className="text-sm font-medium">Upload New Logo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="School Name"
          value={schoolInfo.name}
          onChange={(val) => setSchoolInfo({...schoolInfo, name: val})}
          icon={Building2}
        />
        <FormField
          label="School Code"
          value={schoolInfo.code}
          onChange={(val) => setSchoolInfo({...schoolInfo, code: val})}
          icon={FileText}
        />
        <FormField
          label="Email Address"
          value={schoolInfo.email}
          onChange={(val) => setSchoolInfo({...schoolInfo, email: val})}
          icon={Mail}
          type="email"
        />
        <FormField
          label="Phone Number"
          value={schoolInfo.phone}
          onChange={(val) => setSchoolInfo({...schoolInfo, phone: val})}
          icon={Bell}
        />
        <FormField
          label="Website"
          value={schoolInfo.website}
          onChange={(val) => setSchoolInfo({...schoolInfo, website: val})}
          icon={Globe}
        />
        <FormField
          label="Address"
          value={schoolInfo.address}
          onChange={(val) => setSchoolInfo({...schoolInfo, address: val})}
          icon={Building2}
          fullWidth
        />
      </div>

      {/* Academic Year */}
      <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Academic Year Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Academic Year</label>
            <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option>2024-2025</option>
              <option>2025-2026</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Default Term</label>
            <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option>1st Term</option>
              <option>2nd Term</option>
              <option>3rd Term</option>
              <option>4th Term</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification Settings Component
function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    examReminders: true,
    feeReminders: true,
    attendanceAlerts: true,
    resultPublished: true,
    eventUpdates: false
  });

  const toggleNotification = (key) => {
    setNotifications({...notifications, [key]: !notifications[key]});
  };

  const notificationItems = [
    { key: "emailNotifications", label: "Email Notifications", desc: "Receive updates via email" },
    { key: "smsNotifications", label: "SMS Notifications", desc: "Receive updates via SMS" },
    { key: "examReminders", label: "Exam Reminders", desc: "Get notified about upcoming exams" },
    { key: "feeReminders", label: "Fee Reminders", desc: "Receive fee payment reminders" },
    { key: "attendanceAlerts", label: "Attendance Alerts", desc: "Get alerts for attendance issues" },
    { key: "resultPublished", label: "Result Published", desc: "Notification when results are published" },
    { key: "eventUpdates", label: "Event Updates", desc: "Stay informed about school events" }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Notification Preferences</h2>
        <p className="text-gray-600 text-sm">Choose how you want to receive notifications</p>
      </div>

      <div className="space-y-4">
        {notificationItems.map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-sky-300 transition">
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.label}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <button
              onClick={() => toggleNotification(item.key)}
              className={`cursor-pointer relative w-14 h-7 rounded-full transition-all ${
                notifications[item.key] ? "bg-sky-600" : "bg-gray-300"
              }`}
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                notifications[item.key] ? "translate-x-7" : "translate-x-0"
              }`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// User Management Settings Component
function UserManagementSettings() {
  const roles = [
    { name: "Administrator", count: 3, color: "from-red-500 to-red-600" },
    { name: "Teachers", count: 45, color: "from-sky-500 to-sky-600" },
    { name: "Students", count: 1250, color: "from-emerald-500 to-emerald-600" },
    { name: "Parents", count: 980, color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">User Roles & Permissions</h2>
        <p className="text-gray-600 text-sm">Manage user access and permissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {roles.map((role) => (
          <div key={role.name} className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center shadow-sm`}>
                <Users size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{role.count}</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{role.name}</h3>
            <button className="cursor-pointer text-sm text-sky-600 hover:text-sky-700 font-medium">
              Manage Permissions →
            </button>
          </div>
        ))}
      </div>

      {/* Access Control */}
      <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Key size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to user accounts</p>
            <button className="cursor-pointer px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-medium text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Appearance Settings Component
function AppearanceSettings() {
  const [theme, setTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("sky");

  const themes = [
    { id: "light", label: "Light Mode", bg: "bg-white", border: "border-gray-300" },
    { id: "dark", label: "Dark Mode", bg: "bg-gray-900", border: "border-gray-700" },
    { id: "auto", label: "Auto", bg: "bg-gradient-to-r from-white to-gray-900", border: "border-gray-400" }
  ];

  const colors = [
    { id: "sky", label: "Sky Blue", color: "bg-sky-600" },
    { id: "emerald", label: "Emerald", color: "bg-emerald-600" },
    { id: "purple", label: "Purple", color: "bg-purple-600" },
    { id: "orange", label: "Orange", color: "bg-orange-600" },
    { id: "pink", label: "Pink", color: "bg-pink-600" }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Appearance Customization</h2>
        <p className="text-gray-600 text-sm">Customize the look and feel of your dashboard</p>
      </div>

      {/* Theme Selection */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Theme Mode</h3>
        <div className="grid grid-cols-3 gap-4">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                theme === t.id
                  ? "border-sky-500 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-full h-20 ${t.bg} ${t.border} border-2 rounded-lg mb-3`} />
              <p className="font-medium text-gray-800 text-sm">{t.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Accent Color</h3>
        <div className="grid grid-cols-5 gap-4">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setAccentColor(c.id)}
              className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                accentColor === c.id
                  ? "border-gray-800 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-full h-12 ${c.color} rounded-lg mb-2`} />
              <p className="font-medium text-gray-800 text-xs">{c.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Security Settings Component
function SecuritySettings() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Security Settings</h2>
        <p className="text-gray-600 text-sm">Manage your account security and privacy</p>
      </div>

      <div className="space-y-4">
        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <Key size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Change Password</p>
                <p className="text-sm text-gray-600">Update your account password</p>
              </div>
            </div>
            <button className="cursor-pointer px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition font-medium text-sm">
              Change
            </button>
          </div>
        </div>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Session Management</p>
                <p className="text-sm text-gray-600">View and manage active sessions</p>
              </div>
            </div>
            <button className="cursor-pointer px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
              View Sessions
            </button>
          </div>
        </div>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Clock size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Activity Log</p>
                <p className="text-sm text-gray-600">Review your account activity</p>
              </div>
            </div>
            <button className="cursor-pointer px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
              View Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data & Backup Settings Component
function DataBackupSettings() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Data Management & Backup</h2>
        <p className="text-gray-600 text-sm">Manage your data and backup settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shadow-sm">
              <Database size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Database Size</p>
              <p className="text-sm text-gray-600">2.4 GB / 10 GB</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-sky-600 h-2 rounded-full" style={{width: "24%"}} />
          </div>
        </div>

        <div className="p-5 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
              <RefreshCw size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-800">Last Backup</p>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
          </div>
          <button className="cursor-pointer w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium text-sm">
            Backup Now
          </button>
        </div>
      </div>

      {/* Export Options */}
      <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Export Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
            <FileText size={18} />
            <span>Student Data</span>
          </button>
          <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
            <Printer size={18} />
            <span>Results</span>
          </button>
          <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
            <Database size={18} />
            <span>Full Backup</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Form Field Component
function FormField({ label, value, onChange, icon: Icon, type = "text", fullWidth = false }) {
  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
        />
      </div>
    </div>
  );
}