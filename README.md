# Heritage Joysagar Restaurant Website

A modern, responsive, and performance-optimized website for **Heritage Joysagar Restaurant**, built with Next.js and Tailwind CSS.

---

## 🚀 Tech Stack

*   **Next.js** (App Router)
*   **React 18**
*   **TypeScript**
*   **Tailwind CSS**
*   **Static Site Generation (SSG)** for optimal performance.

---

## 📂 Project Structure

```
Heritage/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MenuPageClient.tsx
│   ├── ContactPageClient.tsx
│   └── ... (other reusable components)
│
├── public/
│   └── Images/
│
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## ✨ Features

*   Fully responsive design (mobile, tablet, desktop).
*   Extremely fast loading times via Static Site Generation.
*   Modular and reusable React components.
*   SEO-friendly with metadata support for each page.
*   Easy to update content and add new pages.

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Build for Production

To create a production-ready static version of the site, run:

```bash
npm run build
```

This command generates a static export of the website in the `out/` directory. This `out/` directory is what gets deployed for hosting.

---

## 🎨 Styling

*   **Tailwind CSS** is used for all styling.
*   Global styles and Tailwind directives are in `app/globals.css`.
*   Theme customizations (colors, fonts) are defined in `tailwind.config.ts`.

---

## 📄 License

This project is proprietary and developed exclusively for **Heritage Joysagar Restaurant**.

