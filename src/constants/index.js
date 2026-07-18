export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Angular", color: "#DD0031" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Framer Motion", color: "#BB4AF1" },
  { name: "C#", color: "#239120" },
  { name: "ASP.NET Core", color: "#512BD4" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "SQL Server", color: "#CC2927" },
  { name: "REST API", color: "#FF6C37" },
  { name: "SEO", color: "#34D399" },
];

export const projects = [
  {
    id: 1,
    name: "Smart Vibe",
    tagline: "E-Commerce for Smart Home Devices",
    description:
      "A production-ready full-stack e-commerce platform built for smart home appliances. Covers the complete shopping experience — from browsing and filtering to checkout — backed by a powerful admin panel to manage everything.",
    features: [
      "Product Listings with Multi-category Filter",
      "Cart, Wishlist & Reviews System",
      "Full Admin Dashboard (products, orders, users)",
      "Payment Integration",
      "Secure Auth with JWT",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "PostgreSQL"],
    color: "#06b6d4",
    image: "/smartvibe.png",
    live: "https://smartbayt-frontend-eight.vercel.app/",
    github: "https://github.com/Mohamed-Elsayedd1/smart-vibe-frontend",
  },
  {
    id: 2,
    name: "HireFlow",
    tagline: "Multi-Tenant Applicant Tracking System",
    description:
      "A multi-tenant SaaS ATS built as an Angular monorepo of three independently-deployed portals — Company, Candidate, and Admin — backed by a .NET Clean Architecture API. Every company's data is isolated by two independent layers, so a bug in one handler still can't leak another tenant's records.",
    features: [
      "3 Independent Angular Portals (Company, Candidate, Admin)",
      "Dual-Layer Multi-Tenant Data Isolation",
      ".NET Clean Architecture + CQRS (151 Handlers)",
      "Google OAuth & TOTP 2FA Authentication",
      "Rate-Limited Auth + Authenticated CV Storage",
    ],
    tags: ["Angular", "TypeScript", "Tailwind CSS", "ASP.NET Core", "PostgreSQL"],
    color: "#f5530d",
    image: "/hireflow.png",
    status: "live",
    live: "https://hire-flow-frontend-henna.vercel.app/",
    github: null,
  },
  {
    id: 3,
    name: "ClinIQ",
    tagline: "Smart Doctor Booking System",
    description:
      "A healthcare platform that connects patients with verified doctors through a seamless booking experience. Features 3 fully independent dashboards — each tailored to Admin, Doctor, and Patient needs — with bilingual support.",
    features: [
      "3 Independent Role Dashboards",
      "Real-time Appointment Booking",
      "Doctor Search, Filter & Profiles",
      "Appointment History & Management",
      "Full Arabic & English Support",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "PostgreSQL"],
    color: "#8b5cf6",
    image: "/cliniq.png",
    live: "https://clin-iq-frontend.vercel.app/",
    github: "https://github.com/Mohamed-Elsayedd1/ClinIQ-Frontend",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mohamed-elsayedd1/",
  github: "https://github.com/Mohamed-Elsayedd1",
  whatsapp: "https://wa.me/201004354231",
};
