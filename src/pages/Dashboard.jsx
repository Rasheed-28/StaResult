import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Award,
  AlertTriangle,
  Calendar,
  Target,
  Activity
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  // Sample data for charts
  const performanceData = [
    { month: "Jan", average: 72, passed: 85 },
    { month: "Feb", average: 75, passed: 88 },
    { month: "Mar", average: 73, passed: 82 },
    { month: "Apr", average: 78, passed: 90 },
    { month: "May", average: 80, passed: 92 },
    { month: "Jun", average: 82, passed: 94 }
  ];

  const gradeDistribution = [
    { name: "A+", value: 120, color: "#0ea5e9" },
    { name: "A", value: 180, color: "#06b6d4" },
    { name: "B", value: 240, color: "#14b8a6" },
    { name: "C", value: 150, color: "#fbbf24" },
    { name: "D", value: 80, color: "#f97316" },
    { name: "F", value: 30, color: "#ef4444" }
  ];

  const subjectPerformance = [
    { subject: "Math", score: 78 },
    { subject: "Science", score: 82 },
    { subject: "English", score: 85 },
    { subject: "History", score: 76 },
    { subject: "Physics", score: 80 },
    { subject: "Chemistry", score: 79 }
  ];

  const stats = [
    {
      icon: Users,
      label: "Total Students",
      value: "1,248",
      change: "+12%",
      isPositive: true,
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600"
    },
    {
      icon: BookOpen,
      label: "Active Classes",
      value: "42",
      change: "+3",
      isPositive: true,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Award,
      label: "Pass Rate",
      value: "89.5%",
      change: "+4.2%",
      isPositive: true,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: AlertTriangle,
      label: "At Risk",
      value: "87",
      change: "-8%",
      isPositive: true,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const recentActivity = [
    { action: "New result added", class: "Class 10-A", time: "2 hours ago" },
    { action: "Student promoted", class: "Class 9-B", time: "5 hours ago" },
    { action: "Exam scheduled", class: "Class 12-C", time: "1 day ago" },
    { action: "Report generated", class: "All Classes", time: "2 days ago" }
  ];

  const upcomingExams = [
    { subject: "Mathematics", class: "Class 10-A", date: "Dec 10, 2025" },
    { subject: "Physics", class: "Class 11-B", date: "Dec 12, 2025" },
    { subject: "Chemistry", class: "Class 12-A", date: "Dec 15, 2025" }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your school today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <Icon size={24} className={stat.iconColor} />
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  stat.isPositive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}>
                  {stat.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Performance Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
              <Activity size={20} className="text-sky-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Performance Trend</h3>
              <p className="text-sm text-gray-500">Last 6 months overview</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="average" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', r: 4 }}
                name="Average Score"
              />
              <Line 
                type="monotone" 
                dataKey="passed" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 4 }}
                name="Pass Rate %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <Target size={20} className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Grade Distribution</h3>
              <p className="text-sm text-gray-500">Current semester breakdown</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={gradeDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {gradeDistribution.map((grade, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: grade.color }}></div>
                <span className="text-xs text-gray-600 font-medium">{grade.name}: {grade.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Performance & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Subject Performance */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <BookOpen size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Subject Performance</h3>
              <p className="text-sm text-gray-500">Average scores by subject</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="subject" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Bar dataKey="score" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Activity size={20} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <p className="text-sm text-gray-500">Latest updates</p>
            </div>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.class}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <Calendar size={20} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Exams</h3>
            <p className="text-sm text-gray-500">Scheduled assessments</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingExams.map((exam, index) => (
            <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100">
              <p className="font-semibold text-gray-800 mb-2">{exam.subject}</p>
              <p className="text-sm text-gray-600 mb-3">{exam.class}</p>
              <div className="flex items-center gap-2 text-xs text-sky-700 font-medium">
                <Calendar size={14} />
                {exam.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}