<div align="center">

# Fablet

**A modern, AI-powered writing platform for authors.**

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-6c63ff?style=for-the-badge&logo=vercel&logoColor=white)](https://fablet.vercel.app)
[![Backend API](https://img.shields.io/badge/Backend%20API-Online-46c77d?style=for-the-badge&logo=render&logoColor=white)](https://fablet.onrender.com/health)
[![GitHub Stars](https://img.shields.io/github/stars/itsrajdeep/Fablet?style=for-the-badge&logo=github&color=f9c74f)](https://github.com/itsrajdeep/Fablet/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/itsrajdeep/Fablet?style=for-the-badge&logo=github&color=43aa8b)](https://github.com/itsrajdeep/Fablet/network)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

> Fablet is a distraction-free, web-based writing application that helps authors create, edit, and publish their stories — powered by an integrated AI writing assistant named **Ink**.

<br/>

[🌐 Live Demo](https://fablet.vercel.app) &nbsp;&nbsp;•&nbsp;&nbsp; [⚙️ API Health](https://fablet.onrender.com/health) &nbsp;&nbsp;•&nbsp;&nbsp; [Report Bug](https://github.com/itsrajdeep/Fablet/issues) &nbsp;&nbsp;•&nbsp;&nbsp; [Request Feature](https://github.com/itsrajdeep/Fablet/issues)

</div>

---

## Screenshots

<table>
  <tr>
    <td align="center"><b>📚 Dashboard</b></td>
    <td align="center"><b>✍️ Editor</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/dashboard.png" alt="Dashboard" width="100%"/></td>
    <td><img src="docs/screenshots/editor.png" alt="Editor" width="100%"/></td>
  </tr>
  <tr>
    <td align="center"><b>🤖 Ink AI Assistant</b></td>
    <td align="center"><b>🌍 Explore Stories</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/ink-assistant.png" alt="Ink AI Assistant" width="100%"/></td>
    <td><img src="docs/screenshots/explore.png" alt="Explore Stories" width="100%"/></td>
  </tr>
</table>

---

## Features

| Feature | Description |
|---|---|
| **Authentication** | Secure registration, login & logout with JWT-based sessions and bcrypt password hashing |
| **Smart Dashboard** | Centralized hub showing all drafts & published stories with word counts and quick actions |
| **Ink AI Assistant** | Integrated AI chat panel for plot suggestions, thematic ideas, and editing feedback |
| **Distraction-free Editor** | Real-time auto-saving, manual draft saving, and a clean full-focus writing canvas |
| **Persistent Theming** | Global Light / Dark mode that remembers your preference across all sessions |
| **Media Uploads** | Profile picture and cover image support via Cloudinary |
| **Story Exploration** | Browse and read published stories from other authors |
| **User Settings** | Full profile management including username, bio, and avatar |

---

## Tech Stack

### Frontend
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/Vanilla_CSS-264de4?style=flat-square&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)

### Services
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=flat-square&logo=mongodb&logoColor=white)

---

## Project Structure

```
Fablet/
├── client/                 # React frontend
│   └── src/
│       ├── pages/          # All page components (Editor, Dashboard, etc.)
│       ├── styles/         # Global and component CSS
│       ├── App.jsx         # Root component with routing
│       └── ThemeContext.jsx # Global theme (light/dark) provider
│
└── server/                 # Node.js + Express backend
    └── src/
        ├── routes/         # API route handlers (auth, stories, settings...)
        ├── mongoose/       # Mongoose models & schemas
        ├── middleware/     # JWT auth & validation middleware
        └── utils/          # Helper utilities
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Cloudinary](https://cloudinary.com/) account

### 1. Clone the repository

```bash
git clone https://github.com/itsrajdeep/Fablet.git
cd Fablet
```

### 2. Configure the backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the server:

```bash
npm run dev
```

### 3. Configure the frontend

```bash
cd ../client
npm install
npm start
```

The app will open at `http://localhost:3000`. The React dev server proxies API calls to `http://localhost:5000` automatically.

---

## Deployment

| Layer | Platform | Live URL |
|---|---|---|
| **Frontend** | [Vercel](https://vercel.com) | [fablet.vercel.app](https://fablet.vercel.app) |
| **Backend** | [Render](https://render.com) | [fablet.onrender.com](https://fablet.onrender.com) |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) | Free M0 cluster |
| **Media** | [Cloudinary](https://cloudinary.com) | Free tier for uploads |

---

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with love by [itsrajdeep](https://github.com/itsrajdeep)

Star this repo if you find it useful!

</div>
