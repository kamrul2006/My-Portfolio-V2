<div align="center">

# ✦ ANIMATED PORTFOLIO V2

### A modern, immersive portfolio built to bring creativity to life.

**React · Vite · GSAP · Motion · Lenis · Tailwind CSS**

<br />

[![MIT License](https://img.shields.io/badge/License-MIT-22c55e.svg?style=for-the-badge)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br />

<!-- Replace the image path below with your own portfolio screenshot -->
<!-- <img src="public/preview.png" alt="Animated Portfolio Preview" width="100%" /> -->

</div>

---

## ◈ Overview

**Animated Portfolio V2** is a personal portfolio project focused on expressive motion, polished interactions, and a modern frontend experience.

Built with React and Vite, the project brings together animation tools, smooth scrolling, and a utility-first styling workflow to create an engaging digital portfolio.

> Designed to showcase work, creativity, and frontend development skills through motion and interaction.

## ✨ Highlights

- **Motion-rich experience** — Build expressive interfaces with GSAP and Motion.
- **Smooth scrolling** — Create fluid page navigation with Lenis.
- **Modern React foundation** — Component-based development with React 19.
- **Utility-first styling** — Style layouts quickly with Tailwind CSS 4.
- **Icon system** — Use clean, consistent icons from Lucide React.
- **Media optimization** — Process image assets with Sharp.
- **Video frame workflow** — Extract and optimize video frames with FFmpeg and the included script.
- **Production-ready tooling** — Develop and build with Vite.

## 🧰 Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vite.dev/) | Development server and build tool |
| [GSAP](https://gsap.com/) | Advanced animation timelines |
| [@gsap/react](https://www.npmjs.com/package/@gsap/react) | GSAP integration for React |
| [Motion](https://motion.dev/) | Declarative UI animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Sharp](https://sharp.pixelplumbing.com/) | Image processing |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Linting |
| FFmpeg | Video and frame processing |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Requirements

Make sure you have installed:

- [Node.js](https://nodejs.org/) — preferably a current LTS release
- npm — included with Node.js
- FFmpeg — required only for the video frame extraction workflow

Verify your setup:

```bash
node -v
npm -v
ffmpeg -version
```

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Enter the project directory

```bash
cd animated-portfolio-main
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

## 📜 Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `npm run frames` | Run the frame optimization script |

## 🎞️ Video Frame Workflow

The project includes a frame-processing workflow for video assets.

To extract 24 frames per second from `public/hero.mp4`, create an output folder:

```bash
mkdir raw-frames
```

Then run:

```bash
ffmpeg -i public/hero.mp4 -vf "fps=24" raw-frames/frame_%04d.png
```

This creates numbered PNG frames inside `raw-frames/`.

To run the project's optimization script:

```bash
npm run frames
```

The script is located at:

```text
scripts/optimize-frames.mjs
```

### Windows FFmpeg note

The npm dependency named `ffmpeg` does **not** necessarily install the FFmpeg command-line program. If Windows displays `'ffmpeg' is not recognized`, install a Windows FFmpeg build and add its `bin` folder (the folder containing `ffmpeg.exe`) to your system `PATH`. Then close and reopen your terminal and check:

```bash
ffmpeg -version
```

## 📦 Production Build

Create the production bundle:

```bash
npm run build
```

Vite generates the optimized output in:

```text
dist/
```

Preview it locally:

```bash
npm run preview
```

## 🗂️ Project Structure

A possible structure for this project:

```text
animated-portfolio-main/
├── public/
│   └── hero.mp4
├── scripts/
│   └── optimize-frames.mjs
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

*Your actual folders and filenames may differ. Adjust this tree to reflect the current project structure.*

## 🎨 Customization

Make the portfolio your own:

- Update personal information, project details, and page content in the relevant React components.
- Add or replace static assets and videos in `public/`.
- Customize colors, spacing, and responsive layouts with Tailwind CSS.
- Adjust GSAP timelines and Motion effects to shape the interaction experience.
- Optimize image assets with Sharp and prepare video frames with FFmpeg.

## 👨‍💻 Author

<div align="center">

### Kamrul Islam Apurba

**Frontend Developer · React.js · Next.js · JavaScript**

Building modern, responsive, and user-friendly web experiences.

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://kiapurba.vercel.app/)

</div>

## 📄 License

This project is licensed under the **MIT License**. See the [`LICENSE`](./LICENSE) file for details.

---

<div align="center">

**Made with creativity and code by Kamrul Islam Apurba.**

⭐ If you like this project, consider giving the repository a star.

</div>
