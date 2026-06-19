<div align="center">

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║          ✨ SUBHANSH - INTERACTIVE PORTFOLIO ✨               ║
║                                                                ║
║     🚀 Full-Stack Developer | Creative Problem Solver         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

<br />

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 30px;">
  <a href="#about" style="text-decoration: none;">
    <img alt="About" src="https://img.shields.io/badge/About-FF6B9D?style=for-the-badge&logo=readme&logoColor=white" />
  </a>
  <a href="#features" style="text-decoration: none;">
    <img alt="Features" src="https://img.shields.io/badge/Features-4ECDC4?style=for-the-badge&logo=sparkles&logoColor=white" />
  </a>
  <a href="#tech-stack" style="text-decoration: none;">
    <img alt="Tech Stack" src="https://img.shields.io/badge/Tech%20Stack-FFE66D?style=for-the-badge&logo=code&logoColor=black" />
  </a>
  <a href="#getting-started" style="text-decoration: none;">
    <img alt="Getting Started" src="https://img.shields.io/badge/Get%20Started-95E1D3?style=for-the-badge&logo=rocket&logoColor=black" />
  </a>
</div>

</div>

---

<h2 id="about">🎯 About This Portfolio</h2>

Welcome to **Subhansh** — a cutting-edge, interactive portfolio showcasing modern web development excellence. Built with the latest technologies and design practices, this project demonstrates:

- **⚡ High Performance** - Lightning-fast load times with TanStack Start
- **🎨 Beautiful Design** - Crafted with Tailwind CSS and Radix UI components
- **🌓 Dark Mode Support** - Smooth theme switching for comfortable viewing
- **📱 Fully Responsive** - Perfect experience on all devices
- **✨ Interactive Elements** - Custom animations including cursor trails and smooth transitions
- **🔧 Production Ready** - Optimized build process with Vite

---

<h2 id="features">✨ Key Features</h2>

<table>
  <tr>
    <td width="50%">
      <h4>🎭 Dynamic Theme System</h4>
      <p>Seamlessly toggle between light and dark modes with persistent preferences</p>
    </td>
    <td width="50%">
      <h4>🖱️ Cursor Trail Animation</h4>
      <p>Delightful cursor tracking effects that follow your mouse movement</p>
    </td>
  </tr>
  <tr>
    <td>
      <h4>🚀 TanStack Router</h4>
      <p>Type-safe, file-based routing for smooth navigation</p>
    </td>
    <td>
      <h4>📦 Component Library</h4>
      <p>Rich collection of Radix UI components for consistent UX</p>
    </td>
  </tr>
  <tr>
    <td>
      <h4>🎯 Error Handling</h4>
      <p>Robust error capture and reporting system</p>
    </td>
    <td>
      <h4>⚙️ Boot Loader</h4>
      <p>Smooth loading experience with custom boot sequence</p>
    </td>
  </tr>
</table>

---

<h2 id="tech-stack">🛠️ Technology Stack</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">

**Frontend Framework**
- React 19
- TypeScript
- TanStack Start
- TanStack Router v1
- TanStack React Query v5

**Styling & UI**
- Tailwind CSS v4
- Radix UI Components
- CSS Modules
- Responsive Design

**Build & Tooling**
- Vite
- Bun Package Manager
- ESLint
- Prettier
- PostCSS

**Additional Libraries**
- React Hook Form
- Class Variance Authority
- CMDK
- Sonner (Toast notifications)
- Date FNS

</div>

---

<h2 id="project-structure">📁 Project Architecture</h2>

```
subhansh/
├── src/
│   ├── components/
│   │   ├── BootLoader.tsx          # Loading component
│   │   ├── CursorTrail.tsx         # Cursor animation effect
│   │   ├── Portfolio.tsx           # Main portfolio component
│   │   ├── ThemeToggle.tsx         # Dark/Light mode switcher
│   │   └── ui/                     # Radix UI components library
│   ├── routes/
│   │   ├── __root.tsx             # Root layout wrapper
│   │   └── index.tsx              # Home page
│   ├── hooks/
│   │   └── use-mobile.tsx         # Mobile detection hook
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   ├── error-capture.ts       # Error handling
│   │   └── error-page.ts          # Error display
│   ├── assets/
│   ├── router.tsx                 # Router configuration
│   ├── server.ts                  # Server entry point
│   └── styles.css                 # Global styles
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

---

<h2 id="getting-started">🚀 Getting Started</h2>

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/subhansh.git
cd subhansh

# 2. Install dependencies
bun install
# OR
npm install

# 3. Start the development server
bun run dev
# OR
npm run dev

# 4. Open your browser
# Navigate to http://localhost:5173
```

### Available Scripts

```bash
# Development server with hot reload
bun run dev

# Build for production
bun run build

# Development build
bun run build:dev

# Preview production build
bun run preview

# Lint code
bun run lint

# Format code with Prettier
bun run format
```

---

<h2 id="file-based-routing">📍 File-Based Routing Guide</h2>

This project uses **TanStack Start's file-based routing**. Every `.tsx` file in `src/routes/` automatically becomes a route.

| File Path | URL Route |
|-----------|-----------|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `portfolio.tsx` | `/portfolio` |
| `contact.tsx` | `/contact` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` |
| `posts/{-$category}.tsx` | `/posts/:category?` |
| `_layout.tsx` | Layout wrapper |
| `__root.tsx` | Root app shell |

> **Important:** The `routeTree.gen.ts` file is auto-generated. Never edit it manually!

---

<h2 id="customization">🎨 Customization Guide</h2>

### Adding New Components

1. Create your component in `src/components/`
2. Import Radix UI components from `src/components/ui/`
3. Style with Tailwind CSS classes

### Creating New Routes

1. Create a `.tsx` file in `src/routes/`
2. Export a React component as default
3. Routes are automatically generated!

### Theming

The theme toggle is powered by a custom hook. Modify `ThemeToggle.tsx` and `styles.css` to customize colors:

```tsx
// Example: Adding custom theme colors
// Update Tailwind config in tailwind.config.js
```

---

<h2 id="performance">⚡ Performance Metrics</h2>

- 🚀 **Vite builds** in milliseconds
- 📦 **Optimized bundle** size with tree-shaking
- 🎯 **Type-safe routing** prevents runtime errors
- 🔄 **Hot Module Reload** for instant feedback
- 📱 **Mobile-optimized** responsive design

---

<h2 id="error-handling">🛡️ Error Handling</h2>

The project includes comprehensive error handling:

- **Error Capture System** - Automatically catches and logs errors
- **Custom Error Pages** - Beautiful error UI for different scenarios
- **Lovable Integration** - Error reporting to external services
- **Type Safety** - TypeScript prevents common errors at compile time

---

<h2 id="contributing">🤝 Contributing</h2>

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="license">📄 License</h2>

This project is licensed under the MIT License - see the LICENSE file for details.

---

<h2 id="contact">📧 Get In Touch</h2>

<div align="center">

**Anadi Gupta**

Have questions or want to collaborate? Reach out!

[Email](mailto:your.email@example.com) • [LinkedIn](https://linkedin.com/in/yourprofile) • [Twitter](https://twitter.com/yourprofile) • [GitHub](https://github.com/yourprofile)

</div>

---

<div align="center">

### Made with ❤️ by Anadi Gupta

⭐ If you found this project helpful, please consider giving it a star! ⭐

</div>
