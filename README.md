### SimplerPC (Discord Selfbot Rich Presence) — Render Free Tier Ready

This project sets a custom Discord Rich Presence using `discord.js-selfbot-v13`, with a lightweight HTTP server suitable for Render free tier and UptimeRobot pings.

> Warning: Selfbots violate Discord's Terms of Service. Use at your own risk.

### Features
- **Keep-alive HTTP server**: `/` and `/healthz` endpoints
- **Port handling**: Auto-detects Render `PORT`
- **Environment-first config**: `.env` support for local dev
- **Render-ready**: Includes `render.yaml`

### Prerequisites
- **Node.js**: 18+
- **Discord self token**: For the account you control (not recommended; demo/educational use only)

### Local Setup
- **Install dependencies**:
  ```bash
  npm install
  ```
- **Create `.env`** (or copy `env.example` to `.env`) with:
  ```bash
  TOKEN=your_discord_self_token_here
  # Optional for local dev
  # PORT=3000
  ```
- **Run**:
  ```bash
  npm start
  ```
  - A small web server starts on `PORT` (default 3000 locally)
  - The Discord client logs in and applies your Rich Presence

### Configuration
- Edit presence details in `config.js` using `RichPresence` setters (name, details, images, buttons, etc.).
- The HTTP server is in `keep_alive.js` and binds to `process.env.PORT` (required by Render).

### Deploy to Render (Free Tier)
- **Push** this repo to GitHub.
- **Create** a new Web Service in Render from your repo.
- Render will detect and use `render.yaml`:
  - Build: `npm install`
  - Start: `npm start`
  - Node: 18
- **Add environment variable** in Render Dashboard:
  - `TOKEN`: your Discord self token
- **Deploy**. After it’s live, copy the service URL, e.g. `https://your-app.onrender.com/`.

### UptimeRobot Ping
- Create a new HTTPS monitor in UptimeRobot.
- **URL**: `https://your-app.onrender.com/healthz`
- **Interval**: 5 minutes (or the minimum allowed on your plan)
- This will periodically ping your instance to keep it responsive on the free tier.

### Endpoints
- `/`: Plain-text liveness message
- `/healthz`: JSON health state, includes uptime seconds

### Common Issues
- **TOKEN not set**: The app will exit with an error. Set `TOKEN` in `.env` locally or in Render environment variables.
- **Port conflicts locally**: Change `PORT` in `.env` to a free port.
- **Discord policy**: Selfbots violate Discord ToS; accounts can be banned. Proceed at your own risk.

### License
ISC
