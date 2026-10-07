# Hitesh Kumar - Portfolio

Personal portfolio website for Hitesh Kumar, a Full Stack Web Developer. The portfolio presents skills, services, experience, selected projects, contact links, and resume access in a responsive React interface.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- React Icons
- GSAP

## Features

- Responsive home page with profile, about, skills, services, and experience timeline
- Project page with descriptions, technology tags, GitHub links, live demos, and image sliders
- JSON-driven skills, services, experience, and project metadata
- Resume download through a Vite environment variable
- Contact section with email, clipboard copy, and social profile links

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_RESUME_URL=https://your-domain.com/path/to/resume.pdf
```

The resume URL must use the `VITE_` prefix so Vite can expose it to the frontend.

### Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Routes

- `/` - Home page
- `/projects` - Project showcase page

## Project Structure

```text
src/
├── assets/
│   └── My_details/
│       ├── Home_project.json
│       ├── project_details.json
│       ├── skill.json
│       └── experiance.json
├── components/
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── HomeProject.jsx
│   ├── Navbar.jsx
│   └── RotatingTypewriter.jsx
├── page/
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Project.jsx
├── App.jsx
├── App.css
└── index.css
```

Static images used by public URLs are stored in `public/images`.

## Updating Portfolio Content

- Update skills, services, and experience timeline in `src/assets/My_details/skill.json`.
- Update homepage project previews in `src/assets/My_details/Home_project.json`.
- Update project descriptions, technologies, screenshots, GitHub URLs, and live URLs in `src/assets/My_details/project_details.json`.
- Add public image files to `public/images` when their JSON URL starts with `/images/`.

## Deployment

The project can be deployed to Vercel or another Vite-compatible hosting provider. Configure `VITE_RESUME_URL` in the provider's environment variables before building the project.