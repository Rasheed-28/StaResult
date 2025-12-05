import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  FileText,
  Eye,
  TrendingUp,
  TrendingDown,
  Award,
  Calendar,
  CreditCard,
  Trophy
} from "lucide-react";

export default function Results() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedTerm, setSelectedTerm] = useState("1st");

  const terms = [
    { id: "1st", label: "1st Term Result", number: "1", color: "from-sky-500 to-sky-600", date: "Oct 2024", isAnnual: false },
    { id: "2nd", label: "2nd Term Result", number: "2", color: "from-emerald-500 to-emerald-600", date: "Dec 2024", isAnnual: false },
    { id: "3rd", label: "3rd Term Result", number: "3", color: "from-purple-500 to-purple-600", date: "Mar 2025", isAnnual: false },
    { id: "4th", label: "4th Term Result", number: "4", color: "from-orange-500 to-orange-600", date: "May 2025", isAnnual: false },
    { id: "annual", label: "Annual Result", number: "A", color: "from-amber-500 to-amber-600", date: "Jun 2025", isAnnual: true }
  ];

  const classes = ["all", "Class 9-A", "Class 10-A", "Class 10-B", "Class 11-A", "Class 11-B", "Class 12-A", "Class 12-B"];

  // Sample results data
  const results = [
    {
      id: 1,
      name: "Ahmed Ali",
      rollNo: "2024-001",
      class: "Class 10-A",
      totalMarks: 500,
      obtainedMarks: 425,
      percentage: 85,
      grade: "A",
      rank: 3,
      status: "Pass",
      trend: "up",
      subjects: [
        { name: "English", total: 100, obtained: 85 },
        { name: "Mathematics", total: 100, obtained: 90 },
        { name: "Science", total: 100, obtained: 88 },
        { name: "Social Studies", total: 100, obtained: 80 },
        { name: "Urdu", total: 100, obtained: 82 }
      ]
    },
    {
      id: 2,
      name: "Fatima Khan",
      rollNo: "2024-002",
      class: "Class 10-A",
      totalMarks: 500,
      obtainedMarks: 465,
      percentage: 93,
      grade: "A+",
      rank: 1,
      status: "Pass",
      trend: "up",
      subjects: [
        { name: "English", total: 100, obtained: 95 },
        { name: "Mathematics", total: 100, obtained: 98 },
        { name: "Science", total: 100, obtained: 92 },
        { name: "Social Studies", total: 100, obtained: 90 },
        { name: "Urdu", total: 100, obtained: 90 }
      ]
    },
    {
      id: 3,
      name: "Hassan Raza",
      rollNo: "2024-003",
      class: "Class 10-B",
      totalMarks: 500,
      obtainedMarks: 375,
      percentage: 75,
      grade: "B",
      rank: 8,
      status: "Pass",
      trend: "down",
      subjects: [
        { name: "English", total: 100, obtained: 75 },
        { name: "Mathematics", total: 100, obtained: 70 },
        { name: "Science", total: 100, obtained: 78 },
        { name: "Social Studies", total: 100, obtained: 75 },
        { name: "Urdu", total: 100, obtained: 77 }
      ]
    },
    {
      id: 4,
      name: "Ayesha Malik",
      rollNo: "2024-004",
      class: "Class 11-A",
      totalMarks: 500,
      obtainedMarks: 410,
      percentage: 82,
      grade: "A",
      rank: 5,
      status: "Pass",
      trend: "up",
      subjects: [
        { name: "English", total: 100, obtained: 82 },
        { name: "Mathematics", total: 100, obtained: 85 },
        { name: "Science", total: 100, obtained: 80 },
        { name: "Social Studies", total: 100, obtained: 83 },
        { name: "Urdu", total: 100, obtained: 80 }
      ]
    },
    {
      id: 5,
      name: "Usman Tariq",
      rollNo: "2024-005",
      class: "Class 11-B",
      totalMarks: 500,
      obtainedMarks: 340,
      percentage: 68,
      grade: "C",
      rank: 12,
      status: "Pass",
      trend: "same",
      subjects: [
        { name: "English", total: 100, obtained: 68 },
        { name: "Mathematics", total: 100, obtained: 65 },
        { name: "Science", total: 100, obtained: 70 },
        { name: "Social Studies", total: 100, obtained: 68 },
        { name: "Urdu", total: 100, obtained: 69 }
      ]
    },
    {
      id: 6,
      name: "Zainab Ahmed",
      rollNo: "2024-006",
      class: "Class 12-A",
      totalMarks: 500,
      obtainedMarks: 480,
      percentage: 96,
      grade: "A+",
      rank: 1,
      status: "Pass",
      trend: "up",
      subjects: [
        { name: "English", total: 100, obtained: 98 },
        { name: "Mathematics", total: 100, obtained: 100 },
        { name: "Science", total: 100, obtained: 95 },
        { name: "Social Studies", total: 100, obtained: 94 },
        { name: "Urdu", total: 100, obtained: 93 }
      ]
    }
  ];

  // Filter results
  const filteredResults = results.filter(result => {
    const matchesSearch = result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         result.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "all" || result.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleViewResult = (result) => {
    console.log("View result:", result);
  };

  const handleDownloadResult = (result) => {
    console.log("Download result:", result);
  };

  const handleExportAll = () => {
    console.log("Export all results");
  };

  const handleViewResultCards = () => {
    console.log("View result cards");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Examination Results</h1>
        <p className="text-gray-600">View and manage student examination results</p>
      </div>
      
      {/* Term Selection */}
      <div className="mb-6 cursor-pointer">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4 cursor-pointer">
          {terms.map((term) => (
            <button
              key={term.id}
              onClick={() => setSelectedTerm(term.id)}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${
                selectedTerm === term.id
                  ? "border-sky-500 bg-white shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-center">
                {term.isAnnual ? (
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br ${term.color} flex items-center justify-center shadow-md`}>
                    <Trophy size={28} className="text-white" />
                  </div>
                ) : (
                  <div className="relative w-14 h-14 mx-auto mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="1.5" 
                      className={`w-14 h-14 bg-gradient-to-br ${term.color} rounded-xl p-2 shadow-md`}
                      style={{
                        stroke: 'white'
                      }}
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
                )}
                <p className={`font-semibold text-sm mb-1 ${
                  selectedTerm === term.id ? "text-sky-700" : "text-gray-800"
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

        {/* Result Cards Button */}
        <div className="flex justify-center">
          <button
            onClick={handleViewResultCards}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg font-medium"
          >
            <CreditCard size={20} />
            <span>View Result Cards</span>
          </button>
        </div>
      </div>

      {/* Actions */}
      <ResultsActions
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedClass={selectedClass}
        onClassChange={setSelectedClass}
        classes={classes}
        onExportAll={handleExportAll}
      />

      {/* Stats */}
      <ResultsStats results={filteredResults} selectedTerm={selectedTerm} />

      {/* Table */}
      <ResultsTable
        results={filteredResults}
        onViewResult={handleViewResult}
        onDownloadResult={handleDownloadResult}
      />
    </div>
  );
}

// ResultsActions Component
function ResultsActions({ 
  searchQuery, 
  onSearchChange, 
  selectedClass, 
  onClassChange, 
  classes,
  onExportAll
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 w-full lg:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or roll number..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
          />
        </div>

        {/* Class Filter and Actions */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-initial">
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => onClassChange(e.target.value)}
              className="w-full lg:w-48 pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 appearance-none cursor-pointer"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === "all" ? "All Classes" : cls}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onExportAll}
            className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition font-medium"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Export Results</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ResultsStats Component
function ResultsStats({ results, selectedTerm }) {
  const totalStudents = results.length;
  const passedStudents = results.filter(r => r.status === "Pass").length;
  const avgPercentage = results.length > 0 
    ? Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length)
    : 0;
  const topPerformer = results.length > 0 
    ? results.reduce((prev, current) => (prev.percentage > current.percentage) ? prev : current)
    : null;

  const stats = [
    { label: "Total Students", value: totalStudents, color: "text-gray-800", bg: "bg-gray-50" },
    { label: "Passed", value: passedStudents, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Pass Rate", value: totalStudents > 0 ? `${Math.round((passedStudents/totalStudents)*100)}%` : "0%", color: "text-sky-600", bg: "bg-sky-50" },
    { label: "Avg Percentage", value: `${avgPercentage}%`, color: "text-purple-600", bg: "bg-purple-50" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.bg} rounded-xl p-4 border border-gray-100`}>
          <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

// ResultsTable Component
function ResultsTable({ results, onViewResult, onDownloadResult }) {
  const getGradeColor = (grade) => {
    switch(grade) {
      case "A+": return "bg-emerald-100 text-emerald-700";
      case "A": return "bg-sky-100 text-sky-700";
      case "B": return "bg-blue-100 text-blue-700";
      case "C": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Total Marks
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Obtained
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Grade
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
            {results.map((result) => (
              <tr key={result.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {result.rank <= 3 && (
                      <Award size={18} className={
                        result.rank === 1 ? "text-yellow-500" :
                        result.rank === 2 ? "text-gray-400" :
                        "text-orange-600"
                      } />
                    )}
                    <span className="font-semibold text-gray-700">#{result.rank}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">{result.name}</p>
                    <p className="text-sm text-gray-500">{result.rollNo}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-sm font-medium">
                    {result.class}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {result.totalMarks}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {result.obtainedMarks}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{result.percentage}%</span>
                    {result.trend === "up" && <TrendingUp size={16} className="text-emerald-600" />}
                    {result.trend === "down" && <TrendingDown size={16} className="text-red-600" />}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getGradeColor(result.grade)}`}>
                    {result.grade}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium">
                    {result.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewResult(result)}
                      className="cursor-pointer p-2 hover:bg-sky-50 text-sky-600 rounded-lg transition"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onDownloadResult(result)}
                      className="cursor-pointer p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition"
                      title="Download Result"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {results.length === 0 && (
        <div className="text-center py-12">
          <FileText size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium mb-1">No results found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}