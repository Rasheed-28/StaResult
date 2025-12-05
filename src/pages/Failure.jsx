import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  AlertTriangle,
  Eye,
  TrendingDown,
  Calendar,
  UserX,
  BookOpen,
  Target,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";

export default function FailureData() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedTerm, setSelectedTerm] = useState("1st");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const terms = [
    { id: "1st", label: "1st Term", number: "1", color: "from-sky-500 to-sky-600", date: "Oct 2024" },
    { id: "2nd", label: "2nd Term", number: "2", color: "from-emerald-500 to-emerald-600", date: "Dec 2024" },
    { id: "3rd", label: "3rd Term", number: "3", color: "from-purple-500 to-purple-600", date: "Mar 2025" },
    { id: "4th", label: "4th Term", number: "4", color: "from-orange-500 to-orange-600", date: "May 2025" }
  ];

  const classes = ["all", "Class 9-A", "Class 10-A", "Class 10-B", "Class 11-A", "Class 11-B", "Class 12-A", "Class 12-B"];
  
  const categories = [
    { id: "all", label: "All Students" },
    { id: "failed", label: "Failed (Below 33%)" },
    { id: "at-risk", label: "At Risk (33-50%)" },
    { id: "multiple", label: "Multiple Subject Failures" }
  ];

  // Sample failure data
  const failureData = [
    {
      id: 1,
      name: "Ali Hassan",
      rollNo: "2024-015",
      class: "Class 10-A",
      totalMarks: 500,
      obtainedMarks: 145,
      percentage: 29,
      grade: "F",
      status: "Failed",
      failedSubjects: 3,
      category: "failed",
      contact: {
        phone: "+92 300 1234567",
        email: "parent.ali@email.com"
      },
      subjects: [
        { name: "English", total: 100, obtained: 25, failed: true },
        { name: "Mathematics", total: 100, obtained: 30, failed: true },
        { name: "Science", total: 100, obtained: 35, failed: false },
        { name: "Social Studies", total: 100, obtained: 28, failed: true },
        { name: "Urdu", total: 100, obtained: 27, failed: true }
      ],
      attendance: 65,
      previousPerformance: 45
    },
    {
      id: 2,
      name: "Sara Noor",
      rollNo: "2024-023",
      class: "Class 10-B",
      totalMarks: 500,
      obtainedMarks: 220,
      percentage: 44,
      grade: "E",
      status: "At Risk",
      failedSubjects: 2,
      category: "at-risk",
      contact: {
        phone: "+92 301 9876543",
        email: "parent.sara@email.com"
      },
      subjects: [
        { name: "English", total: 100, obtained: 45, failed: false },
        { name: "Mathematics", total: 100, obtained: 30, failed: true },
        { name: "Science", total: 100, obtained: 50, failed: false },
        { name: "Social Studies", total: 100, obtained: 28, failed: true },
        { name: "Urdu", total: 100, obtained: 67, failed: false }
      ],
      attendance: 72,
      previousPerformance: 38
    },
    {
      id: 3,
      name: "Bilal Ahmed",
      rollNo: "2024-031",
      class: "Class 11-A",
      totalMarks: 500,
      obtainedMarks: 155,
      percentage: 31,
      grade: "F",
      status: "Failed",
      failedSubjects: 4,
      category: "multiple",
      contact: {
        phone: "+92 302 5551234",
        email: "parent.bilal@email.com"
      },
      subjects: [
        { name: "English", total: 100, obtained: 28, failed: true },
        { name: "Mathematics", total: 100, obtained: 25, failed: true },
        { name: "Science", total: 100, obtained: 30, failed: true },
        { name: "Social Studies", total: 100, obtained: 40, failed: false },
        { name: "Urdu", total: 100, obtained: 32, failed: true }
      ],
      attendance: 58,
      previousPerformance: 35
    },
    {
      id: 4,
      name: "Hina Malik",
      rollNo: "2024-042",
      class: "Class 11-B",
      totalMarks: 500,
      obtainedMarks: 185,
      percentage: 37,
      grade: "E",
      status: "At Risk",
      failedSubjects: 1,
      category: "at-risk",
      contact: {
        phone: "+92 303 7778888",
        email: "parent.hina@email.com"
      },
      subjects: [
        { name: "English", total: 100, obtained: 45, failed: false },
        { name: "Mathematics", total: 100, obtained: 28, failed: true },
        { name: "Science", total: 100, obtained: 38, failed: false },
        { name: "Social Studies", total: 100, obtained: 40, failed: false },
        { name: "Urdu", total: 100, obtained: 34, failed: false }
      ],
      attendance: 78,
      previousPerformance: 42
    },
    {
      id: 5,
      name: "Kamran Raza",
      rollNo: "2024-056",
      class: "Class 12-A",
      totalMarks: 500,
      obtainedMarks: 140,
      percentage: 28,
      grade: "F",
      status: "Failed",
      failedSubjects: 5,
      category: "multiple",
      contact: {
        phone: "+92 304 1112222",
        email: "parent.kamran@email.com"
      },
      subjects: [
        { name: "English", total: 100, obtained: 25, failed: true },
        { name: "Mathematics", total: 100, obtained: 22, failed: true },
        { name: "Science", total: 100, obtained: 30, failed: true },
        { name: "Social Studies", total: 100, obtained: 32, failed: true },
        { name: "Urdu", total: 100, obtained: 31, failed: true }
      ],
      attendance: 52,
      previousPerformance: 32
    }
  ];

  // Filter results
  const filteredData = failureData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    const matchesCategory = selectedCategory === "all" || student.category === selectedCategory;
    return matchesSearch && matchesClass && matchesCategory;
  });

  const handleViewDetails = (student) => {
    console.log("View details:", student);
  };

  const handleContactParent = (student) => {
    console.log("Contact parent:", student);
  };

  const handleExportReport = () => {
    console.log("Export failure report");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle size={28} className="text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Failure Analysis</h1>
        </div>
        <p className="text-gray-600">Monitor and support students requiring additional attention</p>
      </div>
      
      {/* Term Selection */}
      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {terms.map((term) => (
            <button
              key={term.id}
              onClick={() => setSelectedTerm(term.id)}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${
                selectedTerm === term.id
                  ? "border-red-500 bg-white shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-center">
                <div className="relative w-14 h-14 mx-auto mb-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    className={`w-14 h-14 bg-gradient-to-br ${term.color} rounded-xl p-2 shadow-md`}
                    style={{ stroke: 'white' }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" 
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-0.5">
                    <span className="text-white font-bold text-xl leading-none">{term.number}</span>
                  </div>
                </div>
                <p className={`font-semibold text-sm mb-1 ${
                  selectedTerm === term.id ? "text-red-700" : "text-gray-800"
                }`}>
                  {term.label}
                </p>
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <Calendar size={12} />
                  {term.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <FailureActions
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedClass={selectedClass}
        onClassChange={setSelectedClass}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        classes={classes}
        categories={categories}
        onExportReport={handleExportReport}
      />

      {/* Stats */}
      <FailureStats data={filteredData} />

      {/* Table */}
      <FailureTable
        data={filteredData}
        onViewDetails={handleViewDetails}
        onContactParent={handleContactParent}
      />
    </div>
  );
}

// FailureActions Component
function FailureActions({ 
  searchQuery, 
  onSearchChange, 
  selectedClass, 
  onClassChange,
  selectedCategory,
  onCategoryChange,
  classes,
  categories,
  onExportReport
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or roll number..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
          />
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => onClassChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === "all" ? "All Classes" : cls}
                </option>
              ))}
            </select>
          </div>

          <div className="relative flex-1 w-full">
            <Target size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onExportReport}
            className="cursor-pointer w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-medium"
          >
            <Download size={18} />
            <span>Export Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// FailureStats Component
function FailureStats({ data }) {
  const totalFailed = data.length;
  const criticalCases = data.filter(s => s.percentage < 33).length;
  const atRiskStudents = data.filter(s => s.percentage >= 33 && s.percentage < 50).length;
  const avgAttendance = data.length > 0 
    ? Math.round(data.reduce((acc, s) => acc + s.attendance, 0) / data.length)
    : 0;

  const stats = [
    { 
      label: "Total At Risk", 
      value: totalFailed, 
      color: "text-red-600", 
      bg: "bg-red-50",
      icon: UserX,
      iconColor: "text-red-600"
    },
    { 
      label: "Critical (<33%)", 
      value: criticalCases, 
      color: "text-orange-600", 
      bg: "bg-orange-50",
      icon: AlertTriangle,
      iconColor: "text-orange-600"
    },
    { 
      label: "At Risk (33-50%)", 
      value: atRiskStudents, 
      color: "text-yellow-600", 
      bg: "bg-yellow-50",
      icon: TrendingDown,
      iconColor: "text-yellow-600"
    },
    { 
      label: "Avg Attendance", 
      value: `${avgAttendance}%`, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      icon: Calendar,
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className={`${stat.bg} rounded-xl p-5 border border-gray-100`}>
            <div className="flex items-start justify-between mb-3">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <Icon size={20} className={stat.iconColor} />
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

// FailureTable Component
function FailureTable({ data, onViewDetails, onContactParent }) {
  const getCategoryBadge = (category) => {
    switch(category) {
      case "failed":
        return "bg-red-100 text-red-700";
      case "at-risk":
        return "bg-yellow-100 text-yellow-700";
      case "multiple":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Failed Subjects
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Attendance
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.rollNo}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-sm font-medium">
                    {student.class}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-lg ${
                      student.percentage < 33 ? "text-red-600" : 
                      student.percentage < 50 ? "text-yellow-600" : 
                      "text-orange-600"
                    }`}>
                      {student.percentage}%
                    </span>
                    <TrendingDown size={16} className="text-red-500" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div 
                      className={`h-1.5 rounded-full ${
                        student.percentage < 33 ? "bg-red-500" : 
                        student.percentage < 50 ? "bg-yellow-500" : 
                        "bg-orange-500"
                      }`}
                      style={{ width: `${student.percentage}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-red-500" />
                    <span className="font-semibold text-red-600">
                      {student.failedSubjects}/5
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-medium ${
                    student.attendance < 60 ? "text-red-600" :
                    student.attendance < 75 ? "text-yellow-600" :
                    "text-gray-700"
                  }`}>
                    {student.attendance}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getCategoryBadge(student.category)}`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewDetails(student)}
                      className="cursor-pointer p-2 hover:bg-sky-50 text-sky-600 rounded-lg transition"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onContactParent(student)}
                      className="cursor-pointer p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition"
                      title="Contact Parent"
                    >
                      <Phone size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-12">
          <AlertTriangle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium mb-1">No students found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}