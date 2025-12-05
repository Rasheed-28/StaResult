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
  User
} from "lucide-react";

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  // Sample student data
  const students = [
    {
      id: 1,
      name: "Ahmed Ali",
      rollNo: "2024-001",
      class: "Class 10-A",
      email: "ahmed.ali@school.edu",
      phone: "+92 300 1234567",
      joinDate: "Jan 15, 2024",
      gpa: 3.8,
      attendance: 95,
      status: "Active",
      avatar: "AA"
    },
    {
      id: 2,
      name: "Fatima Khan",
      rollNo: "2024-002",
      class: "Class 10-A",
      email: "fatima.khan@school.edu",
      phone: "+92 300 2345678",
      joinDate: "Jan 15, 2024",
      gpa: 3.9,
      attendance: 98,
      status: "Active",
      avatar: "FK"
    },
    {
      id: 3,
      name: "Hassan Raza",
      rollNo: "2024-003",
      class: "Class 10-B",
      email: "hassan.raza@school.edu",
      phone: "+92 300 3456789",
      joinDate: "Jan 16, 2024",
      gpa: 3.5,
      attendance: 88,
      status: "Active",
      avatar: "HR"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      rollNo: "2024-004",
      class: "Class 11-A",
      email: "ayesha.malik@school.edu",
      phone: "+92 300 4567890",
      joinDate: "Jan 16, 2024",
      gpa: 3.7,
      attendance: 92,
      status: "Active",
      avatar: "AM"
    },
    {
      id: 5,
      name: "Usman Tariq",
      rollNo: "2024-005",
      class: "Class 11-B",
      email: "usman.tariq@school.edu",
      phone: "+92 300 5678901",
      joinDate: "Jan 17, 2024",
      gpa: 3.2,
      attendance: 85,
      status: "Active",
      avatar: "UT"
    },
    {
      id: 6,
      name: "Zainab Ahmed",
      rollNo: "2024-006",
      class: "Class 12-A",
      email: "zainab.ahmed@school.edu",
      phone: "+92 300 6789012",
      joinDate: "Jan 17, 2024",
      gpa: 4.0,
      attendance: 99,
      status: "Active",
      avatar: "ZA"
    },
    {
      id: 7,
      name: "Bilal Shah",
      rollNo: "2024-007",
      class: "Class 12-B",
      email: "bilal.shah@school.edu",
      phone: "+92 300 7890123",
      joinDate: "Jan 18, 2024",
      gpa: 3.6,
      attendance: 90,
      status: "Active",
      avatar: "BS"
    },
    {
      id: 8,
      name: "Sana Iqbal",
      rollNo: "2024-008",
      class: "Class 9-A",
      email: "sana.iqbal@school.edu",
      phone: "+92 300 8901234",
      joinDate: "Jan 18, 2024",
      gpa: 3.4,
      attendance: 87,
      status: "Active",
      avatar: "SI"
    }
  ];

  const classes = ["all", "Class 9-A", "Class 10-A", "Class 10-B", "Class 11-A", "Class 11-B", "Class 12-A", "Class 12-B"];

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleViewStudent = (student) => {
    console.log("View student:", student);
  };

  const handleEditStudent = (student) => {
    console.log("Edit student:", student);
  };

  const handleDeleteStudent = (student) => {
    console.log("Delete student:", student);
  };

  const handleAddStudent = () => {
    console.log("Add new student");
  };

  const handleExport = () => {
    console.log("Export students");
  };

  const handleImport = () => {
    console.log("Import students");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Students</h1>
        <p className="text-gray-600">Manage and view all student information</p>
      </div>
      
      {/* Actions */}
      <StudentsActions
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedClass={selectedClass}
        onClassChange={setSelectedClass}
        classes={classes}
        onAddStudent={handleAddStudent}
        onExport={handleExport}
        onImport={handleImport}
      />

      {/* Stats */}
      <StudentsStats students={students} />

      {/* Table */}
      <StudentsTable
        students={filteredStudents}
        onViewStudent={handleViewStudent}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
}

// StudentsActions Component
function StudentsActions({ 
  searchQuery, 
  onSearchChange, 
  selectedClass, 
  onClassChange, 
  classes,
  onAddStudent,
  onExport,
  onImport
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 w-full lg:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, roll number, or email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
          />
        </div>

        {/* Class Filter and Action Buttons */}
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

          <button onClick={onExport} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <Download size={18} className="text-gray-600" />
          </button>
          <button onClick={onImport} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <Upload size={18} className="text-gray-600" />
          </button>
          <button
            onClick={onAddStudent}
            className="flex items-center gap-2 px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition font-medium"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add Student</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// StudentsStats Component
function StudentsStats({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "Active").length;
  const avgAttendance = Math.round(students.reduce((acc, s) => acc + s.attendance, 0) / students.length);
  const avgGPA = (students.reduce((acc, s) => acc + s.gpa, 0) / students.length).toFixed(2);

  const stats = [
    { label: "Total Students", value: totalStudents, color: "text-gray-800" },
    { label: "Active", value: activeStudents, color: "text-emerald-600" },
    { label: "Avg Attendance", value: `${avgAttendance}%`, color: "text-sky-600" },
    { label: "Avg GPA", value: avgGPA, color: "text-purple-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

// StudentsTable Component
function StudentsTable({ students, onViewStudent, onEditStudent, onDeleteStudent }) {
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
                Roll No
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                GPA
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
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white font-semibold text-sm">
                      {student.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.rollNo}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-sm font-medium">
                    {student.class}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-gray-800">{student.gpa}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{student.attendance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium">
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewStudent(student)}
                      className="p-2 hover:bg-sky-50 text-sky-600 rounded-lg transition"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => onEditStudent(student)}
                      className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDeleteStudent(student)}
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
      {students.length === 0 && (
        <div className="text-center py-12">
          <User size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium mb-1">No students found</p>
          <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}