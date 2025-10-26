Game Box

I built Game Box as a small desktop-in-the-browser: a faux Aqua-style OS X environment that runs three lightweight games, Reaction Time Test, Speed Clicker, and Off The Wall, plus a System Preferences app for time/date, user settings and desktop wallpaper choice. It’s a full-stack app with auth, guest mode, persistence, and a simple windowing system (dock, menubar, modals, z-ordering) so I could practice “product-y” engineering beyond the individual games.

---

## High-Level Overview

- **What it is:** A React + Express + MongoDB app that mimics a desktop UI and ships three games with saved history per user.
- **Why it matters:** I didn’t want another “single page + single game” toy. I wanted the operational feel of a small product surface: authentication, state migration from guest to user, persistent preferences, layered UI controls (menus, modals), and some basic hardening on the API.
- **How it runs:** It’s deployed as a live production service on **Heroku** (Node/Express API + static assets) with **MongoDB Atlas** for data and **Cloudflare** in front for caching and TLS. The frontend is built with **React + Vite** using React Router for routing and served by Express.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Core Flow](#core-flow)
   - [Desktop & Windowing](#desktop--windowing)
   - [Auth & Guest Sessions](#auth--guest-sessions)
   - [Game Mechanics](#game-mechanics)
3. [Security / Reliability / Abuse Handling](#security--reliability--abuse-handling)
4. [Operational Notes](#operational-notes)
   - [Environment Variables / Secrets](#environment-variables--secrets)
   - [Local Development](#local-development)
   - [Build & Deploy](#build--deploy)
5. [API Surface](#api-surface)
6. [Data Model](#data-model)
7. [What Makes This Interesting](#what-makes-this-interesting)

---

## Tech Stack

### Frontend
- **React 18 + Vite** (react-router for routing)
- **Context providers** per app/window for local state isolation:
  - `RttContext` (Reaction Time Test)
  - `ScContext` (Speed Clicker)
  - `OtwContext` (Off The Wall)
  - `ModalContext` (global window/modal orchestration)
- **CSS** is hand-rolled for Aqua-style UI (menubar, dock, window chrome, titlebar buttons, resize handles, etc.)
- **Keyboard-first UX** on many actions (space/enter to start, ESC to close modals, arrow keys where relevant)

### Backend
- **Node.js + Express**
- **MongoDB + Mongoose**
- **Auth:** JWT (httpOnly cookie) + bcrypt password hashing
- **Hardening:** helmet, express-mongo-sanitize, cookie-parser, cors (for dev), morgan
- **Static serve:** Express serves the Vite `dist/` build and catches `*` to `index.html`

Packages of note:
    "helmet": "^8", "express-mongo-sanitize": "^2", "jsonwebtoken": "^9", "bcryptjs": "^2", "mongoose": "^8", "morgan": "^1", "cookie-parser": "^1", "cors": "^2"

---

## Core Flow

### Desktop & Windowing

- **Boot sequence**
  - Public routes: Login, Register, Lock/Sleep/Restart/Shutdown screens
  - Private route: Desktop (`/`) guarded by either a valid auth token or an active guest session
- **Window system**
  - Each app lives in a `WindowContainer` component (titlebar, window chrome, resize handle)
  - **Dock** launches/minimizes apps
  - **Menubar** exposes app menus (About, Preferences, History, Quit)
  - **Modals** (About, Instructions, Result History, Pause/End dialogs) use a central `ModalContext` and an “inert” helper so only the active modal is focusable
  - **Z-ordering and focus** are tracked so the active window receives keyboard events
- **System Preferences**
  - **Time**: whether to show date, year, 12/24-hour, seconds, AM/PM
  - **Background**: select a wallpaper; desktop backgrounds are optimized `.webp` thumbnails
  - **User Settings**: change username; change password

### Auth & Guest Sessions

- **Unauthenticated play is allowed** via a **guest session** that persists to `localStorage`. You’ll see a banner: “You are exploring as a guest.”
- On **Register** or **Login**, I call a backend endpoint to **migrate guest data** into the account (game histories, preferences, wallpaper), then clear the guest session. This avoids the “I tried it first, now my data is gone” problem.
- **JWT cookies** (`httpOnly`, `SameSite=Strict`) are set on auth; the frontend also stores a small token stub in `localStorage` for the route guard.

### Game Mechanics

#### 1) Reaction Time Test
- **Goal:** Measure the delay between a “now” signal and the user’s click.
- **Flow:**
    1. Press the button (or space/enter) to arm the test.
    2. After a randomized delay, the UI flips to “go”.
    3. First click (or space/enter) captures the delta in milliseconds.
    4. I append the result and display a running average.
- **Anti-cheat:** Early clicks (before “go”), spammy keypress patterns, or clicking the button area during the wait phase trigger an **Anticheat** warning modal and the run is discarded.
- **Persistence:** Results are appended to `User.rttResults` (or the guest profile). There are menu actions to **Sort** and **Clear** history.

#### 2) Speed Clicker
- **Goal:** Click as many times as possible during a short, fixed-length round.
- **Flow:**
    1. Press the button (or space) to start a round.
    2. The test window counts clicks until the round elapses.
    3. I append the round’s total and update the running average.
- **Persistence:** Results go to `User.scResults` (or the guest profile). There are menu actions to **Sort** and **Clear** history.

#### 3) Off The Wall
- **Goal:** Survive as long as possible by keeping the ball away from the walls by using the arrow keys while the ball moves itself in randomized directions; the ball speeds up after every move until it reaches a maximum speed.
- **Flow:**
    1. Start with a movement delay (ms). Each move reduces the delay by a small constant until a minimum threshold.
    2. Use keyboard arrows to reposition; the ball’s CSS position updates in 10% steps. The game ends upon collision with one of the four walls.
    3. I record the **number of moves** you survived and show a Game Over dialog with “Play again”.
- **Persistence:** Results are appended to `User.otwResults` (or the guest profile). There are menu actions to **Sort** and **Clear** history.

---

## Security / Reliability / Abuse Handling

- **Passwords:** I hash with bcrypt before save (salted, 12 rounds). The model exposes `comparePassword` for login.
- **Auth Cookies:** I set JWT as an `httpOnly`, `SameSite=Strict` cookie so scripts can’t read it. Session length is one day (`expiresIn: 86400`).
- **Input Sanitization:** I run `express-mongo-sanitize` on the API to neutralize `$`/`.` operator injection attempts in body/query.
- **Headers:** `helmet()` adds standard security headers.
- **CORS:** Disabled in production; enabled narrowly in dev (Vite on localhost) to simplify local work.
- **API Errors:** Central error handler normalizes Mongoose validation, duplicate key, bad ObjectId, and auth failures into JSON arrays for the client.
- **Bot/abuse on games:** Anti-cheat logic exists in the RTT UI (not as a security barrier, just to keep the results meaningful).

I intentionally didn’t add rate limiting or IP intelligence to this app—the attack surface is minimal and read-heavy—but the server is already structured to accept middleware if I decide to layer that in later.

---

## Operational Notes

### Environment Variables / Secrets

- `REMOTE_DATABASE` — MongoDB Atlas connection string
- `LOCAL_DATABASE` — Local Mongo connection for dev
- `JWT_SECRET` — Secret for signing JWTs
- `PORT` — Express port (defaults to 8000)
- `NODE_ENV` — `production` or `development`

I load env via `dotenv` in non-production. In production, the platform stores secrets.

### Local Development

Prereqs: Node 18+

Install root deps and run both servers with one command:
    npm install
    npm run dev

What happens:
- A small `dev.js` script boots **backend** (Express at `:8000`) and **frontend** (Vite at `:5173` by default).
- Frontend `proxy` is `/api -> http://localhost:8000/api` so API calls just use `/api/...`.
- Vite hot reloads; Express restarts via `nodemon` if you prefer `npm run dev` inside `/backend`.

### Build & Deploy

- The root has a Heroku postbuild hook that runs the frontend build:
    (in Heroku) cd frontend && npm install && npm run build
- Express serves `frontend/dist` and answers `GET *` with `index.html` so React Router can handle deep links.
- Cloudflare sits in front (TLS + caching of static assets).

---

## API Surface

All routes are under `/api`.

### Auth / User
    POST   /api/register                 {username, password} -> {success, user, token}
    POST   /api/login                    {username, password} -> {success, user, token}
    POST   /api/logout                   -> clears auth cookie
    GET    /api/getUser                  -> {success, user} (requires auth cookie)
    POST   /api/updateUser               {newUsername?} -> {success, user} (auth)
    POST   /api/updatePassword           {oldPassword, newPassword} -> {success} (auth)
    POST   /api/changeUserPreferences    {option} -> {success, user} (auth)
    POST   /api/migrateGuestData         {rttResults, scResults, otwResults, preferences, wallpaper} -> merges into account (auth)

### Game Results
    POST   /api/addRttResult             {reactionTime} -> {success, user} (auth)
    POST   /api/clearRttResults          {} -> {success, user} (auth)
    POST   /api/sortRttResults           {} -> {success, user} (auth)

    POST   /api/addScResult              {numberOfClicks} -> {success, user} (auth)
    POST   /api/clearScResults           {} -> {success, user} (auth)
    POST   /api/sortScResults            {} -> {success, user} (auth)

    POST   /api/addOtwResult             {numberOfMoves} -> {success, user} (auth)
    POST   /api/clearOtwResults          {} -> {success, user} (auth)
    POST   /api/sortOtwResults           {} -> {success, user} (auth)

Notes:
- In **guest mode**, I short-circuit these calls in the client and update `localStorage` instead. On login/register, I POST one `migrateGuestData` payload and clear the guest session.

---

## Data Model

`User` (Mongoose)
    username: String (unique, trimmed, <=64)
    password: String (hashed with bcrypt)
    rttResults: [Number]             // ms
    scResults: [Number]              // clicks per round
    otwResults: [Number]             // moves survived
    preferences: {
        showAccountInMenubar: Boolean
        showDateAndTime: Boolean
        showDayName: Boolean
        showMonthName: Boolean
        showDay: Boolean
        showYear: Boolean
        show24HourClock: Boolean
        showSeconds: Boolean
        showPeriod: Boolean
    }
    wallpaper: String                // wallpaper key (thumbnail id)
    createdAt: Date
    updatedAt: Date

Instance methods
    comparePassword(providedPassword) -> Promise<Boolean>
    jwtGenerateToken() -> signed JWT (expires in 1 day)

Pre-save hook
    On password change, re-hash with bcrypt before writing.

---

## What Makes This Interesting

- **A small “OS” around tiny games.** I didn’t ship three isolated routes; I shipped a desktop metaphor with window chrome, menubar, dock, dialogs, z-ordering, keyboard shortcuts, and a System Preferences app. That forced choices about focus, accessibility, and event routing that most game demos ignore.
- **Guest → Auth migration.** I treat guest play as first-class: I persist to `localStorage`, then promote that state server-side on signup/login. No lost progress.
- **Layered UX thinking.** The Reaction Time Test includes anti-cheat (timing + behavior) purely to preserve result quality; Off The Wall speeds up stepwise with a floor to keep difficulty scaling sane; Speed Clicker has a crisp round lifecycle, clear “try again” loop, and running averages across rounds.
- **Pragmatic hardening.** JWTs are httpOnly; I sanitize inputs; I use Helmet headers; error handling returns structured arrays so the UI can make good decisions. Everything is small and readable, but not “demo insecure.”
- **Deployment like a real app.** A single Node process serves the API and assets; Vite builds hashed static files; Heroku’s postbuild compiles the frontend; Cloudflare caches the right things.

---

If you want to review specific parts of the code, start with:
- `frontend/src/components/Desktop/Desktop.jsx` (desktop shell + modal plumbing)
- `frontend/src/components/windows/WindowRttContainer.jsx`, `WindowScContainer.jsx`, `WindowOtwContainer.jsx`
- `frontend/src/components/windowSpComponents/*` (System Preferences)
- `backend/models/userModel.js`, `backend/controllers/*`, `backend/routes/*`