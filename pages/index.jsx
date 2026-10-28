import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { studentData } from "../data/studentData";

// MIU LMS — Login only.
// Layout follows the LearnG reference Waleed sent: split screen, left
// illustration panel, right white login form. Adapted to MIU only:
// MIU logo, MIU green button, a MALE student illustration (drawn in
// code, so no image file can break), and MIU wording.
// NOT added, on purpose: no sign-up page, no social login, no
// forgot-password link, no email-only field.
// Login logic is UNCHANGED from the original page: it checks the LMS ID
// against the student's regNo / email / username and the password
// against studentData.password, then goes to /dashboard?tab=dashboard
// (the Dashboard overview, the first page inside the portal).
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const u = user.trim();
    const p = pass.trim();

    const okUsers = [studentData.regNo, studentData.email, studentData.username].filter(Boolean);

    setTimeout(() => {
      if (okUsers.includes(u) && p === studentData.password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("student", JSON.stringify(studentData));
        router.replace("/dashboard?tab=dashboard");
      } else {
        setError("Invalid username or password");
        setLoading(false);
        setTimeout(() => setError(""), 4000);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 lg:grid lg:grid-cols-2">
      <Head>
        <title>LMS Login | MIU Learning Management System</title>
      </Head>

      {/* Left panel: MIU branding + male student illustration */}
      <aside className="bg-[#e8f4f0] px-6 py-6 sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:py-8">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white p-1 shadow ring-4 ring-white/70">
            <Image
              src="/miu-logo.png"
              alt="MIU Official University Logo"
              width={56}
              height={56}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-xl font-extrabold leading-none text-gray-900">MIU</p>
            <p className="mt-1 text-xs font-medium leading-tight text-gray-600">
              Mohi-ud-Din Islamic University
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md py-6 lg:py-0">
          {/* Flat illustration, drawn in code: a male student sitting
              at a desk with a laptop, like the reference composition. */}
          <svg
            viewBox="0 0 640 420"
            className="h-auto w-full"
            role="img"
            aria-label="A male student sitting at a desk, working on a laptop"
          >
            <defs>
              <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f6c89a" />
                <stop offset="100%" stopColor="#e3a06d" />
              </linearGradient>
              <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0aa08a" />
                <stop offset="100%" stopColor="#007B66" />
              </linearGradient>
              <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c89b6d" />
                <stop offset="100%" stopColor="#a67c52" />
              </linearGradient>
            </defs>
            {/* Soft floor shadow */}
            <ellipse cx="320" cy="388" rx="230" ry="12" fill="#000000" opacity="0.08" />
            {/* Wall frames with simple pictures */}
            <rect x="430" y="55" width="70" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M438 120 L462 92 L478 108 L492 94 L500 120 Z" fill="#a7d8c5" />
            <circle cx="488" cy="70" r="7" fill="#fbbf24" />
            <rect x="520" y="85" width="55" height="70" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M528 140 L544 112 L560 140 Z" fill="#7fbfa5" />
            {/* Cabinet with books */}
            <rect x="90" y="270" width="120" height="110" rx="6" fill="#d1d5db" />
            <rect x="100" y="282" width="10" height="42" rx="2" fill="#007B66" />
            <rect x="112" y="282" width="10" height="42" rx="2" fill="#b45309" />
            <rect x="124" y="282" width="10" height="42" rx="2" fill="#334155" />
            <rect x="136" y="282" width="10" height="42" rx="2" fill="#059669" />
            <rect x="105" y="338" width="90" height="28" rx="4" fill="#e5e7eb" />
            <rect x="145" y="349" width="14" height="5" rx="2" fill="#9ca3af" />
            {/* Lamp with a soft glow */}
            <circle cx="151" cy="195" r="26" fill="#fde68a" opacity="0.35" />
            <rect x="148" y="215" width="6" height="55" fill="#374151" />
            <path d="M128 215 L174 215 L186 175 L116 175 Z" fill="#007B66" />
            <ellipse cx="151" cy="272" rx="22" ry="5" fill="#374151" />
            {/* Wooden chair: back slats, seat, legs */}
            <rect x="252" y="168" width="12" height="98" rx="5" fill="#8b5a2b" />
            <rect x="272" y="168" width="12" height="98" rx="5" fill="#8b5a2b" />
            <rect x="292" y="168" width="12" height="98" rx="5" fill="#8b5a2b" />
            <rect x="248" y="252" width="70" height="14" rx="6" fill="#a67c52" />
            <rect x="256" y="266" width="9" height="112" fill="#8b5a2b" />
            <rect x="300" y="266" width="9" height="112" fill="#8b5a2b" />
            {/* Male student: neck, head with ears, side-parted hair, face */}
            <rect x="306" y="158" width="20" height="18" rx="6" fill="#e3a06d" />
            <circle cx="288" cy="138" r="7" fill="url(#skin)" />
            <circle cx="342" cy="138" r="7" fill="url(#skin)" />
            <circle cx="315" cy="132" r="28" fill="url(#skin)" />
            <path d="M287 130 a28 28 0 0 1 56 0 l-3 -16 a25 25 0 0 0 -50 0 Z" fill="#111827" />
            <path d="M292 122 q12 -8 24 -2" fill="none" stroke="#111827" strokeWidth="2" />
            <ellipse cx="305" cy="136" rx="3" ry="4" fill="#1f2937" />
            <ellipse cx="326" cy="136" rx="3" ry="4" fill="#1f2937" />
            <path d="M314 142 q2 6 0 8" fill="none" stroke="#c98a5a" strokeWidth="2" strokeLinecap="round" />
            <path d="M306 152 q9 5 18 0" fill="none" stroke="#9c6644" strokeWidth="2" strokeLinecap="round" />
            {/* Shirt with collar, sleeves and shading */}
            <path d="M283 172 q32 -10 64 0 l4 86 -72 0 Z" fill="url(#shirt)" />
            <path d="M303 172 l12 18 12 -18" fill="#ffffff" />
            <path d="M283 200 q10 30 4 58" fill="none" stroke="#005a4a" strokeWidth="3" opacity="0.5" />
            <path d="M338 182 L402 212" stroke="#007B66" strokeWidth="15" strokeLinecap="round" fill="none" />
            <circle cx="404" cy="214" r="9" fill="url(#skin)" />
            {/* Seated legs: trousers with a crease, shoes with soles */}
            <rect x="283" y="256" width="108" height="22" rx="10" fill="#1f2937" />
            <path d="M290 256 h96" stroke="#374151" strokeWidth="2" />
            <rect x="372" y="256" width="20" height="92" rx="8" fill="#1f2937" />
            <rect x="366" y="344" width="48" height="15" rx="7" fill="#7c2d12" />
            <rect x="366" y="356" width="48" height="5" rx="2" fill="#111827" />
            {/* Wooden desk */}
            <rect x="380" y="260" width="180" height="12" rx="4" fill="url(#desk)" />
            <rect x="392" y="272" width="10" height="108" fill="#8b5a2b" />
            <rect x="540" y="272" width="10" height="108" fill="#8b5a2b" />
            {/* Coffee cup with steam */}
            <path d="M398 226 q4 -8 0 -14 M408 226 q4 -8 0 -14" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            <rect x="392" y="232" width="24" height="28" rx="3" fill="#ffffff" stroke="#9ca3af" strokeWidth="2" />
            <path d="M416 238 a8 8 0 0 1 0 16" fill="none" stroke="#9ca3af" strokeWidth="2" />
            {/* Laptop with a code screen */}
            <rect x="432" y="192" width="92" height="62" rx="5" fill="#0f766e" />
            <rect x="440" y="200" width="76" height="46" rx="3" fill="#ecfdf5" />
            <rect x="448" y="208" width="40" height="5" rx="2" fill="#007B66" />
            <rect x="448" y="220" width="58" height="5" rx="2" fill="#34d399" />
            <rect x="448" y="232" width="30" height="5" rx="2" fill="#007B66" />
            <path d="M420 254 L536 254 L546 262 L410 262 Z" fill="#334155" />
            {/* Plant with several leaves */}
            <path d="M512 232 L548 232 L542 260 L518 260 Z" fill="#b45309" />
            <ellipse cx="522" cy="214" rx="10" ry="22" fill="#007B66" transform="rotate(-20 522 214)" />
            <ellipse cx="538" cy="210" rx="10" ry="24" fill="#059669" transform="rotate(15 538 210)" />
            <ellipse cx="530" cy="200" rx="9" ry="20" fill="#10b981" />
            <ellipse cx="514" cy="206" rx="8" ry="18" fill="#34d399" transform="rotate(-35 514 206)" />
          </svg>

          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-left">
            Your MIU journey,
            <br />
            in one place
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed text-gray-600 sm:text-base lg:text-left">
            Your courses, grades and attendance — all in your student portal.
          </p>
        </div>

        <p className="hidden text-xs text-gray-500 lg:block">
          MIU Learning Management System
        </p>
      </aside>

      {/* Right panel: white login form only */}
      <main className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-16">
        <p className="mb-8 text-right text-sm font-medium text-gray-500">
          MIU Student Portal
        </p>

        <div className="mx-auto w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hello! Welcome back
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
            Log in with your LMS ID and password to open your student portal.
          </p>

          {error && (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
            >
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="mt-8 space-y-5" aria-label="Login Form">
            <div>
              <label htmlFor="user" className="mb-1.5 block text-sm font-medium text-gray-700">
                LMS ID
              </label>
              <input
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#007B66] focus:outline-none focus:ring-2 focus:ring-[#007B66]/40"
                placeholder="e.g. 22-APH-27426"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label htmlFor="pass" className="mb-1.5 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="pass"
                  type={showPass ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  disabled={loading}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 focus:border-[#007B66] focus:outline-none focus:ring-2 focus:ring-[#007B66]/40"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg py-3.5 px-4 font-bold text-white shadow transition ${
                loading
                  ? "cursor-not-allowed bg-emerald-800/70"
                  : "bg-[#007B66] hover:bg-[#006455]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "LOGIN"
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-xs tracking-wide text-gray-400">
            &copy; 2025 MIU LEARNING MANAGEMENT SYSTEM
          </p>
        </div>
      </main>
    </div>
  );
}
