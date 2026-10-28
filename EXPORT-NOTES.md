# MIU LMS Portal — Export Notes (export note only, not part of the original site)

This ZIP is the exact Next.js project from the workspace, with no redesign or
refactoring. It is NOT the static preview page shown in chat — that preview
is a separate rendering. See the differences note below.

## Run it locally

npm install
npm run dev
# then open http://localhost:3000

## Production

npm run build
npm start

## What is inside

- Next.js 15.4.6 + React 19, pages-router, Tailwind CSS 4
- pages/index.jsx — LearnG-style login (LMS ID + password, Show/Hide)
- pages/dashboard.jsx — Dashboard first page, then My Profile, Current
  Courses, Academic History, Attendance, Grand Report, Logout
- pages/GradeReport.jsx — full Grade Report, Sem 1-7, Print button
- pages/login.jsx — the original old simple login page, left untouched
- data/studentData.js — student data, including the login password in
  plain text, exactly as the original site stored it
- public/miu-logo.png — official MIU logo; public/student.jpg — student photo

## Login

Log in with the LMS ID / username and password that were set in
data/studentData.js. Only a correct ID + correct password opens the
Dashboard; anything else shows "Invalid username or password".

## Security warning

data/studentData.js stores the login password in plain text, as the
original site did. Do NOT share this ZIP publicly and do NOT push it to a
public repo without changing that password storage first.

## Known preview vs project differences (honest, not hidden)

- Academic History filters in this project: All / Passed / Failed.
  The chat preview also showed an Enrolled filter.
- Attendance tab summary cards in this project keep the portal's original
  numbers (85% overall, 80% current, 4 missed). The chat preview showed a
  calculated current-semester figure instead.
- Grade Report Print button is present in this project; printing is
  blocked inside the chat preview frame, so it was missing there only.
- No external services, API keys, or environment variables are needed.
  There is no .env file in this project.
