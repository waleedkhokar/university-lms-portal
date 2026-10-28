import Image from "next/image";

// Updated semester 7 courses GP for your requirement
const semesters = [
  {
    title: "Spring 2022",
    dateRange: "01-Apr-2022 - 15-Sep-2022",
    semesterNumber: "Semester - 1",
    courses: [
      { code: "MTS-111", name: "Calculus & Analytical Geometry", credit: 3, grade: "B", gp: 3.3 },
      { code: "CS-111", name: "Introduction to Computers", credit: 3, grade: "A", gp: 4 },
      { code: "HUM-114", name: "Islamic Studies/Ethics", credit: 3, grade: "B", gp: 3.7 },
      { code: "CS-113", name: "Programming Fundamentals", credit: 4, grade: "A", gp: 4 },
      { code: "ELL101", name: "Reading & Writing Skill", credit: 3, grade: "B", gp: 3.6 },
    ],
    sgpa: 3.74,
    cgpa: 3.74,
    status: "Good",
    creditHours: 16,
  },
  {
    title: "Fall 2022",
    dateRange: "01-Oct-2022 - 31-Mar-2023",
    semesterNumber: "Semester - 2",
    courses: [
      { code: "CS-116", name: "Basic Electronics", credit: 3, grade: "D", gp: 1.7 },
      { code: "ELL 104", name: "Composition Writing", credit: 3, grade: "C", gp: 2.4 },
      { code: "CS-114", name: "Discrete Structures", credit: 3, grade: "D", gp: 1.9 },
      { code: "CS-112", name: "Object Oriented Programming", credit: 4, grade: "C", gp: 2.4 },
      { code: "HUM-120", name: "Pakistan Studies", credit: 3, grade: "B", gp: 3 },
      { code: "MTS-112", name: "Probability and Statistics", credit: 3, grade: "A", gp: 4 },
    ],
    sgpa: 2.56,
    cgpa: 3.1,
    status: "Good",
    creditHours: 19,
  },
  {
    title: "Spring 2023",
    dateRange: "01-Apr-2023 - 15-Sep-2023",
    semesterNumber: "Semester - 3",
    courses: [
      { code: "EDU-0202", name: "Applied Physics", credit: 3, grade: "D", gp: 1 },
      { code: "CS-213", name: "Data Communication and Computer Networks", credit: 3, grade: "D", gp: 1.9 },
      { code: "CS-211", name: "Data Structure & Algorithms", credit: 3, grade: "C", gp: 2.9 },
      { code: "CS-215", name: "Digital Logic & Design", credit: 3, grade: "A", gp: 4 },
      { code: "SE-211", name: "Software Engineering", credit: 3, grade: "D", gp: 1.3 },
      { code: "EDU-0201", name: "Urdu Language", credit: 3, grade: "C", gp: 2.2 },
    ],
    sgpa: 2.22,
    cgpa: 2.8,
    status: "Fair",
    creditHours: 18,
  },
  {
    title: "Fall 2023",
    dateRange: "01-Oct-2023 - 31-Mar-2024",
    semesterNumber: "Semester - 4",
    courses: [
      { code: "CS-226", name: "Computer Architecture & Organization", credit: 3, grade: "B", gp: 3 },
      { code: "MTS-222", name: "Linear Algebra", credit: 3, grade: "B", gp: 3.1 },
      { code: "MTS-224", name: "Multivariable Calculus", credit: 3, grade: "C", gp: 2.2 },
      { code: "CS-222", name: "Operating System", credit: 4, grade: "C", gp: 2.3 },
      { code: "MGT-290", name: "Psychology", credit: 3, grade: "B", gp: 3 },
      { code: "CS-311", name: "Theory of Automata", credit: 3, grade: "A", gp: 4 },
    ],
    sgpa: 2.9,
    cgpa: 2.83,
    status: "Fair",
    creditHours: 19,
  },
  {
    title: "Spring 2024",
    dateRange: "01-Apr-2024 - 15-Sep-2024",
    semesterNumber: "Semester - 5",
    courses: [
      { code: "CS-214", name: "Database System", credit: 4, grade: "C", gp: 2.1 },
      { code: "MTS-311", name: "Differential Equations", credit: 3, grade: "D", gp: 1 },
      { code: "CS-0485", name: "IT Project Management", credit: 3, grade: "C", gp: 2.6 },
      { code: "CS-315", name: "Microprocessor & Assembly Language", credit: 3, grade: "A", gp: 4 },
      { code: "MGT-211", name: "Principles of Management", credit: 3, grade: "B", gp: 3 },
      { code: "CS-313", name: "Web Design and Development", credit: 3, grade: "D", gp: 1.9 },
    ],
    sgpa: 2.42,
    cgpa: 2.74,
    status: "Fair",
    creditHours: 19,
  },
  {
    title: "Fall 2024",
    dateRange: "20-Sep-2024 - 01-Jun-2025",
    semesterNumber: "Semester - 6",
    courses: [
      { code: "CS-424", name: "Artificial Intelligence", credit: 3, grade: "D", gp: 1.5 },
      { code: "CS-326", name: "Compiler Construction", credit: 3, grade: "A", gp: 4 },
      { code: "CS-413", name: "Design and Analysis of Algorithms", credit: 3, grade: "A", gp: 4 },
      { code: "CS-417", name: "Information Security", credit: 3, grade: "A", gp: 4 },
      { code: "CS-485", name: "Introduction to Neural Networks", credit: 3, grade: "D", gp: 1.3 },
      { code: "CS-317", name: "Visual Programming", credit: 4, grade: "A", gp: 4 },
    ],
    sgpa: 3.18,
    cgpa: 2.82,
    status: "Fair",
    creditHours: 19,
  },
  {
    title: "Spring 2025",
    dateRange: "03-Jan-2025 - 31-Jul-2025",
    semesterNumber: "Semester - 7",
    courses: [
      { code: "CS-452", name: "Data Encryption and Security", credit: 3, grade: "C+", gp: 2.6 }, // Updated GPA
      { code: "CS-332", name: "Human Computer Interaction", credit: 3, grade: "B", gp: 3 },
      { code: "CS-473", name: "Machine Learning Techniques", credit: 3, grade: "C", gp: 2 },
      { code: "CS-415", name: "Numerical Computing", credit: 3, grade: "D", gp: 1.6 },
      { code: "CS-422", name: "Professional Practices", credit: 3, grade: "B", gp: 3.4 },
      { code: "ISL-601", name: "Quran o Hadith", credit: 3, grade: "C+", gp: 2.6 },          // Updated GPA
    ],
    sgpa: 2.7,
    cgpa: 2.8,
    status: "Fair",
    creditHours: 18,
  },
];

export default function GrandReport() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl my-10 font-sans text-gray-900 shadow-lg">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <a key={n} href={`#sem-${n}`} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">Sem {n}</a>
          ))}
        </div>
        <button onClick={() => window.print()} className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#007B66' }}>Print Report</button>
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-300 pb-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">MIU Main Campus Nerian Sharif AJ&K</h1>
          <p className="italic text-lg">Grade Report</p>
          <p className="font-semibold mt-1 text-lg">Bachelor of Science (Computer Science) BS (CS)</p>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-right text-sm leading-snug">
            <p><strong>Reg.No:</strong> 22-APH-27426</p>
          </div>
          <div className="w-24 h-24 relative border border-gray-300 rounded-md overflow-hidden">
            <Image src="/miu-logo.png" alt="MIU Logo" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </header>

      {/* Student Info */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-lg bg-gray-50">
        <div className="space-y-1">
          <p><strong>Name:</strong> Waleed Khokhar</p>
          <p><strong>Session:</strong> 2022-26</p>
          <p><strong>Father's Name:</strong> Sadaqat Hussain</p>
          <p><strong>Date Of Birth:</strong> 26-Jul-2004</p>
          <p><strong>Campus:</strong> MIU Main Campus Nerian Sharif AJ&K</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-32 h-40 relative border border-gray-300 rounded-md overflow-hidden">
            <Image src="/student.jpg" alt="Student Picture" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Semesters */}
      {semesters.map(({ title, dateRange, semesterNumber, courses, sgpa, cgpa, status, creditHours }, i) => (
        <section key={i} id={`sem-${i + 1}`} className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">{title} <span className="text-gray-600 text-sm font-normal">{dateRange}</span> <span className="ml-3 text-gray-700 font-normal">{semesterNumber}</span></h2>

          <table className="w-full border-collapse border border-gray-300 text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Code</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Course</th>
                <th className="border border-gray-300 px-3 py-2 text-center">Cr. Hrs</th>
                <th className="border border-gray-300 px-3 py-2 text-center">Grade</th>
                <th className="border border-gray-300 px-3 py-2 text-center">GP</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(({ code, name, credit, grade, gp }, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-3 py-1">{code}</td>
                  <td className="border border-gray-300 px-3 py-1">{name}</td>
                  <td className="border border-gray-300 px-3 py-1 text-center">{credit}</td>
                  <td className="border border-gray-300 px-3 py-1 text-center">{grade}</td>
                  <td className="border border-gray-300 px-3 py-1 text-center">{gp}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-blue-50 font-semibold">
              <tr>
                <td colSpan={2} className="border border-gray-300 px-3 py-2 text-right">SGPA: {sgpa}</td>
                <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">CGPA: {cgpa}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{status}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-300 px-3 py-2 text-right font-normal">
                  Credit Hours: {creditHours}
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      ))}

      {/* Footer Summary */}
      <section className="border-t border-gray-300 pt-6 mt-10 text-right text-base font-semibold">
        <p>CGPA: 2.8</p>
        <p>Credit Hours (Completed): 125</p>
        <p>Total Credit Hours: 128</p>
        <p>Degree Status: Incomplete</p>
        <p className="mt-6 italic text-gray-600 text-sm">
          Prepared On: 10 Aug 2025<br />
        
        </p>
      </section>
    </div>
  );
}
