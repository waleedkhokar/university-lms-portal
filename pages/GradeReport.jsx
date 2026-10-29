import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// Same proper line icons as the dashboard sidebar — no emojis.
function SidebarIcon({ name }) {
  const paths = {
    dashboard: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>),
    profile: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>),
    current: (<><path d="M12 6c-2-1.5-5-2-8-2v16c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z" /><path d="M12 6v16" /></>),
    history: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
    attendance: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M9 16l2 2 4-4" /></>),
    grand: (<><path d="M3 21h18" /><path d="M6 21V11M11 21V6M16 21v-9M21 21v-5" /></>),
    logout: (<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5M21 12H9" /></>),
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      {paths[name]}
    </svg>
  );
}

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
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const goTab = (tab) => { setSidebarOpen(false); router.push(`/dashboard?tab=${tab}`); };
  const sidebarItems = [
    { label: "Dashboard", icon: "dashboard", onClick: () => goTab("dashboard") },
    { label: "My Profile", icon: "profile", onClick: () => goTab("profile") },
    { label: "Current Courses", icon: "current", onClick: () => goTab("current") },
    { label: "Academic History", icon: "history", onClick: () => goTab("history") },
    { label: "Attendance", icon: "attendance", onClick: () => goTab("attendance") },
  ];
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Head>
        <title>Grand Report | MIU LMS</title>
      </Head>

      {/* MIU LMS header + sidebar, same as the dashboard — hidden when printing */}
      <header className="text-white shadow-lg print:hidden" style={{ backgroundColor: '#007B66' }}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-white/20 text-white shrink-0"
            >
              {sidebarOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>
            <Image src="/miu-logo.png" alt="University Logo" width={40} height={40} className="rounded shrink-0" />
            <div className="leading-tight">
              <h1 className="font-bold text-base sm:text-xl"><span className="sm:hidden">MIU LMS</span><span className="hidden sm:inline">MIU Learning Management System</span></h1>
              <p className="hidden sm:block text-xs text-white/80 mt-0.5">Mohi-ud-Din Islamic University</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image src="/student.jpg" alt="Student" width={40} height={40} className="rounded-full border-2 border-white" />
              <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3"></span>
            </div>
            <div className="hidden sm:block">
              <p className="font-medium">Waleed Khokhar</p>
              <p className="text-xs text-blue-100">22-APH-27426</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <aside className={`bg-white rounded-xl shadow-md p-4 h-fit lg:sticky lg:top-6 lg:w-64 print:hidden ${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <nav>
            <div className="flex items-center justify-between mb-3 lg:hidden">
              <span className="font-semibold text-gray-900">Menu</span>
              <button type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <ul className="space-y-1">
              {sidebarItems.map(({ label, icon, onClick }) => (
                <li key={label}>
                  <button onClick={onClick} className="w-full text-left flex items-center space-x-3 p-3 rounded-lg font-sans hover:bg-gray-100 text-gray-900" style={{ fontSize: '1rem' }}>
                    <SidebarIcon name={icon} />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button className="w-full text-left flex items-center space-x-3 p-3 rounded-lg font-sans text-white font-medium" style={{ fontSize: '1rem', backgroundColor: '#007B66' }}>
                  <SidebarIcon name="grand" />
                  <span>Grand Report</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSidebarOpen(false); localStorage.removeItem('loggedIn'); localStorage.removeItem('student'); router.push('/'); }}
                  className="w-full text-left flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg text-red-600 font-sans"
                  style={{ fontSize: '1rem' }}
                >
                  <SidebarIcon name="logout" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="mb-6 print:hidden">
            <h2 className="text-2xl font-bold text-gray-900">Grand Report</h2>
            <p className="text-sm text-gray-500 mt-1">Full grade report, as issued by the university.</p>
          </div>

    <div className="w-full p-4 sm:p-6 bg-white rounded-xl font-sans text-gray-900 shadow-lg">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-gray-700">Jump to:</span>
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

          <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse border border-gray-300 text-base">
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
          </div>
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
        </main>
      </div>
    </div>
  );
}
