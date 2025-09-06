# 📌 GitHub Showcase  

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![State Management](https://img.shields.io/badge/Zustand-Store-orange)
![Build](https://img.shields.io/github/actions/workflow/status/your-username/github-showcase/ci.yml?branch=main)
![Lighthouse Performance](https://img.shields.io/badge/Performance-95-brightgreen)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-92-brightgreen)
![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/SEO-98-brightgreen)

## 📖 Deskripsi
Aplikasi **GitHub Showcase** untuk mencari user GitHub, menampilkan daftar repository, dan membaca isi README dalam format markdown yang rapi.  
Dibuat dengan **React + TypeScript** dengan state management menggunakan **Zustand**.


## 🎯 User Flow
1. Cari username GitHub.  
2. Lihat daftar repository user.  
3. Buka detail repository untuk membaca README dengan format yang indah.  

## ⚙️ Fitur Utama
- 🔍 Search user GitHub  
- 📂 List repository terbaru  
- 📑 Render README dengan **Markdown + GFM**  
- 🗂️ State management dengan **Zustand**  
- 🎨 Custom CSS tanpa framework (no Tailwind/Bootstrap)  
- 📱 Responsive design  
- 🌐 Deploy ke **Vercel/Netlify**  

## 🛠️ Tech Stack
- **React 18 + TypeScript**
- **Vite** (development bundler)
- **Zustand** (state management)
- **React Query** (data fetching & caching)
- **React Markdown + Remark GFM**
- **SCSS** 

## 📦 Instalasi
```bash
# Clone repository
git clone https://github.com/your-username/github-showcase.git
cd github-showcase

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```


## Setup environment variables

Create `.env` file:
```bash
GITHUB_TOKEN=your_personal_github_token
```
⚠️ Note: For security, don’t commit your GitHub token to public repo.
If deploying, use serverless function proxy for better security.

## Run the app locally
```bash
npm run dev
```
App will be running at http://localhost:5173/

## 🏗️ Project Structure
```bash
src/
├── components/        # Reusable UI components
│   ├── github/        # GitHub-related components (UserCard, RepositoryList, etc)
│   └── ui/            # Shared UI (Modal, Button, etc)
├── hooks/             # Custom React hooks (e.g., React Query hooks)
├── pages/             # Application pages (routing level)
├── services/          # API services (Octokit wrapper, etc.)
├── stores/            # Global state management (Zustand store)
├── types/             # TypeScript type definitions
├── utils/             # Utilities (date formatter, etc)
└── main.tsx           # Main entry point
```

## 📦 Deployment
- **Vercel**: Just push to GitHub and import repo on vercel.com
- **Netlify**: Run netlify deploy or connect your repo.

## 📝 License

MIT License © 2025 — Created by Andi Sultan
