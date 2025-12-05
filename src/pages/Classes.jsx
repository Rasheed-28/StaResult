import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  BookOpen,
  Users,
  GraduationCap,
  Clock,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function Classes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [activeTab, setActiveTab] = useState("classes"); // classes or subjects

  // Sample classes data
  const classes = [
    {
      id: 1,
      name: "Class 10-A",
      grade: "10",
      section: "A",
      teacher: "Prof. Sarah Ahmad",
      students: 35,
      subjects: 8,
      avgGPA: 3.6,
      attendance: 92,
      schedule: "Morning Shift"
    },
    {
      id: 2,
      name: "Class 10-B",
      grade: "10",
      section: "B",
      teacher: "Prof. Ali Hassan",
      students: 32,
      subjects: 8,
      avgGPA: 3.4,
      attendance: 88,
      schedule: "Morning Shift"
    },
    {
      id: 3,
      name: "Class 11-A",
      grade: "11",
      section: "A",
      teacher: "Prof. Fatima Khan",
      students: 30,
      subjects: 9,
      avgGPA: 3.7,
      attendance: 90,
      schedule: "Morning Shift"
    },
    {
      id: 4,
      name: "Class 11-B",
      grade: "11",
      section: "B",
      teacher: "Prof. Ahmed Raza",
      students: 28,
      subjects: 9,
      avgGPA: 3.5,
      attendance: 89,
      schedule: "Afternoon Shift"
    },
    {
      id: 5,
      name: "Class 12-A",
      grade: "12",
      section: "A",
      teacher: "Prof. Ayesha Malik",
      students: 33,
      subjects: 10,
      avgGPA: 3.8,
      attendance: 94,
      schedule: "Morning Shift"
    },
    {
      id: 6,
      name: "Class 12-B",
      grade: "12",
      section: "B",
      teacher: "Prof. Usman Tariq",
      students: 31,
      subjects: 10,
      avgGPA: 3.6,
      attendance: 91,
      schedule: "Afternoon Shift"
    }
  ];

  // Sample subjects data
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      code: "MATH-101",
      teacher: "Prof. Sarah Ahmad",
      classes: ["Class 10-A", "Class 10-B"],
      students: 67,
      avgScore: 78,
      difficulty: "Advanced"
    },
    {
      id: 2,
      name: "Physics",
      code: "PHY-201",
      teacher: "Prof. Ali Hassan",
      classes: ["Class 11-A", "Class 11-B"],
      students: 58,
      avgScore: 76,
      difficulty: "Advanced"
    },
    {
      id: 3,
      name: "Chemistry",
      code: "CHEM-201",
      teacher: "Prof. Fatima Khan",
      classes: ["Class 11-A", "Class 12-A"],
      students: 63,
      avgScore: 80,
      difficulty: "Advanced"
    },
    {
      id: 4,
      name: "English",
      code: "ENG-101",
      teacher: "Prof. Ahmed Raza",
      classes: ["Class 10-A", "Class 10-B", "Class 11-A"],
      students: 95,
      avgScore: 82,
      difficulty: "Intermediate"
    },
    {
      id: 5,
      name: "Computer Science",
      code: "CS-301",
      teacher: "Prof. Ayesha Malik",
      classes: ["Class 12-A", "Class 12-B"],
      students: 64,
      avgScore: 85,
      difficulty: "Advanced"
    },
    {
      id: 6,
      name: "Biology",
      code: "BIO-201",
      teacher: "Prof. Usman Tariq",
      classes: ["Class 11-A", "Class 12-A"],
      students: 60,
      avgScore: 79,
      difficulty: "Intermediate"
    }
  ];

  const grades = ["all", "9", "10", "11", "12"];

  // Filter classes
  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === "all" || cls.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  // Filter subjects
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         subject.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleViewClass = (cls) => {
    console.log("View class:", cls);
  };

  const handleEditClass = (cls) => {
    console.log("Edit class:", cls);
  };

  const handleDeleteClass = (cls) => {
    console.log("Delete class:", cls);
  };

  const handleViewSubject = (subject) => {
    console.log("View subject:", subject);
  };

  const handleEditSubject = (subject) => {
    console.log("Edit subject:", subject);
  };

  const handleDeleteSubject = (subject) => {
    console.log("Delete subject:", subject);
  };

  const handleAdd = () => {
    console.log("Add new", activeTab);
  };

  const handleExport = () => {
    console.log("Export", activeTab);
  };

  const handleImport = () => {
    console.log("Import", activeTab);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Classes & Subjects</h1>
        <p className="text-gray-600">Manage classes, subjects, and course assignments</p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("classes")}
            className={`cursor-pointer px-6 py-3 font-medium transition-all ${
              activeTab === "classes"
                ? "text-sky-600 border-b-2 border-sky-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              Classes
            </div>
          </button>
          <button
            onClick={() => setActiveTab("subjects")}
            className={`cursor-pointer px-6 py-3 font-medium transition-all ${
              activeTab === "subjects"
                ? "text-sky-600 border-b-2 border-sky-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={18} />
              Subjects
            </div>
          </button>
        </div>
      </div>

      {/* Actions */}
      <ClassesActions
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedGrade={selectedGrade}
        onGradeChange={setSelectedGrade}
        grades={grades}
        onAdd={handleAdd}
        onExport={handleExport}
        onImport={handleImport}
        activeTab={activeTab}
      />

      {/* Stats */}
      {activeTab === "classes" ? (
        <ClassesStats classes={classes} />
      ) : (
        <SubjectsStats subjects={subjects} />
      )}

      {/* Table */}
      {activeTab === "classes" ? (
        <ClassesTable
          classes={filteredClasses}
          onViewClass={handleViewClass}
          onEditClass={handleEditClass}
          onDeleteClass={handleDeleteClass}
        />
      ) : (
        <SubjectsTable
          subjects={filteredSubjects}
          onViewSubject={handleViewSubject}
          onEditSubject={handleEditSubject}
          onDeleteSubject={handleDeleteSubject}
        />
      )}
    </div>
  );
}

// ClassesActions Component
function ClassesActions({ 
  searchQuery, 
  onSearchChange, 
  selectedGrade, 
  onGradeChange, 
  grades,
  onAdd,
  onExport,
  onImport,
  activeTab
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 w-full lg:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
          />
        </div>

        {/* Grade Filter and Action Buttons */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          {activeTab === "classes" && (
            <div className="relative flex-1 lg:flex-initial">
              <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedGrade}
                onChange={(e) => onGradeChange(e.target.value)}
                className="w-full lg:w-48 pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 appearance-none cursor-pointer"
              >
                {grades.map(grade => (
                  <option key={grade} value={grade}>
                    {grade === "all" ? "All Grades" : `Grade ${grade}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button onClick={onExport} className="cursor-pointer p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <Download size={18} className="text-gray-600" />
          </button>
          <button onClick={onImport} className="cursor-pointer p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <Upload size={18} className="text-gray-600" />
          </button>
          <button
            onClick={onAdd}
            className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition font-medium"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add {activeTab === "classes" ? "Class" : "Subject"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ClassesStats Component
function ClassesStats({ classes }) {
  const totalClasses = classes.length;
  const totalStudents = classes.reduce((acc, cls) => acc + cls.students, 0);
  const avgGPA = (classes.reduce((acc, cls) => acc + cls.avgGPA, 0) / classes.length).toFixed(2);
  const avgAttendance = Math.round(classes.reduce((acc, cls) => acc + cls.attendance, 0) / classes.length);

  const stats = [
    { label: "Total Classes", value: totalClasses, color: "text-gray-800", icon: BookOpen },
    { label: "Total Students", value: totalStudents, color: "text-sky-600", icon: Users },
    { label: "Avg GPA", value: avgGPA, color: "text-purple-600", icon: TrendingUp },
    { label: "Avg Attendance", value: `${avgAttendance}%`, color: "text-emerald-600", icon: Calendar }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Icon size={20} className={stat.color} />
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

// SubjectsStats Component
function SubjectsStats({ subjects }) {
  const totalSubjects = subjects.length;
  const totalStudents = subjects.reduce((acc, subj) => acc + subj.students, 0);
  const avgScore = Math.round(subjects.reduce((acc, subj) => acc + subj.avgScore, 0) / subjects.length);
  const advancedSubjects = subjects.filter(s => s.difficulty === "Advanced").length;

  const stats = [
    { label: "Total Subjects", value: totalSubjects, color: "text-gray-800", icon: GraduationCap },
    { label: "Total Enrollments", value: totalStudents, color: "text-sky-600", icon: Users },
    { label: "Avg Score", value: `${avgScore}%`, color: "text-emerald-600", icon: TrendingUp },
    { label: "Advanced Courses", value: advancedSubjects, color: "text-purple-600", icon: BookOpen }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <Icon size={20} className={stat.color} />
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

// ClassesTable Component
function ClassesTable({ classes, onViewClass, onEditClass, onDeleteClass }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Subjects
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Avg GPA
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Attendance
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classes.map((cls) => (
              <tr key={cls.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white font-bold text-sm">
                      {cls.section}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{cls.name}</p>
                      <p className="text-sm text-gray-500">Grade {cls.grade}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{cls.teacher}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="font-semibold text-gray-800">{cls.students}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-400" />
                    <span className="font-semibold text-gray-800">{cls.subjects}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-purple-600">{cls.avgGPA}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${cls.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{cls.attendance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-xs font-medium">
                    {cls.schedule}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <button
                      onClick={() => onViewClass(cls)}
                      className="cursor-pointer p-2 hover:bg-sky-50 text-sky-600 rounded-lg transition"
                      title="View Details"
                    >
                      <Eye size={18} className="cursor-pointer" />
                    </button>
                    <button
                      onClick={() => onEditClass(cls)}
                      className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={18} className="cursor-pointer" />
                    </button>
                    <button
                      onClick={() => onDeleteClass(cls)}
                      className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={18} className="cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {classes.length === 0 && (
        <div className="text-center py-12">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium mb-1">No classes found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

// SubjectsTable Component
function SubjectsTable({ subjects, onViewSubject, onEditSubject, onDeleteSubject }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Advanced":
        return "bg-purple-100 text-purple-700";
      case "Intermediate":
        return "bg-sky-100 text-sky-700";
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
                Subject
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Classes
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Avg Score
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {subjects.map((subject) => (
              <tr key={subject.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      {subject.code.split("-")[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{subject.name}</p>
                      <p className="text-sm text-gray-500">{subject.code}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{subject.teacher}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {subject.classes.slice(0, 2).map((cls, idx) => (
                      <span key={idx} className="px-2 py-1 bg-sky-50 text-sky-700 rounded text-xs font-medium">
                        {cls}
                      </span>
                    ))}
                    {subject.classes.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{subject.classes.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="font-semibold text-gray-800">{subject.students}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-emerald-600">{subject.avgScore}%</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(subject.difficulty)}`}>
                    {subject.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewSubject(subject)}
                      className="p-2 hover:bg-sky-50 text-sky-600 rounded-lg transition"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onEditSubject(subject)}
                      className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDeleteSubject(subject)}
                      className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {subjects.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium mb-1">No subjects found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search</p>
        </div>
      )}
    </div>
  );
}