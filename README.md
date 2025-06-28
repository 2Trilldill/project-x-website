# Project X Construction Co.

A professional, responsive marketing website built for **Project X Construction**, a residential construction company based in Lenoir, North Carolina.

## 🚧 Overview

This project showcases the services, story, and contact information for Project X Construction. The site is designed to reflect the company’s strong visual identity and communicate trust, professionalism, and craftsmanship.

## 🛠️ Tech Stack

- **Next.js 15** – App Router, Server Components, Image Optimization
- **Tailwind CSS** – Utility-first CSS styling
- **TypeScript** – Safer, scalable development
- **Mobile-First Design** – Responsive and accessible

## 🧩 Features

- Fixed transparent navbar with logo and navigation
- Fullscreen hero sections with image overlays
- Pages: Home, About, Services, Contact
- Custom `PageHero` component reused across internal pages
- Styled with a custom Tailwind theme (steel-gray and safety-yellow palette)
- Reusable Footer and Navbar components
- Fully responsive layout across devices
- Optimized images and performance enhancements

## 📁 Project Structure

projectx-website/
├── public/ # Static assets (logo, hero images)
├── src/
│ ├── app/ # Pages using Next.js App Router
│ │ ├── page.tsx # Home page
│ │ ├── about/ # About page
│ │ ├── services/ # Services page
│ │ └── contact/ # Contact page
│ ├── components/ # Shared UI components
│ └── styles/ # Global Tailwind styles
└── tailwind.config.js # Theme and utility configuration

## 🧪 Getting Started

```bash
git clone https://github.com/Trilldill/projectx-website.git
cd projectx-website
npm install
npm run dev
