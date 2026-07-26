# 🌺 Pushpa Fabrics — Full-Stack Business Website

A modern, elegant, responsive, and SEO-friendly web platform built for **Pushpa Fabrics**, a premium textile, saree, and fashion store in Coimbatore.

---

## 🌟 Features

- **Luxury Aesthetics**: Theme designed with Deep Crimson (`#8B0000`), Gold Gradients (`#D4AF37`), Warm Cream Background (`#FFF8F3`), and Playfair Display typography.
- **9 Specialized Pages**: Home, About, Collections, Customized Blouses, Wedding Dresses, Rental Dresses, Tailoring Classes, Gallery, Contact.
- **Interactive Product Catalog**: Live search bar, tag filtering, and instant WhatsApp inquiry generation.
- **Customized Blouse Studio**: Neck pattern showcase, 7-point measurement guide, and order booking.
- **Rental & Bridal Hub**: Transparent rental deposit breakdown and VIP bridal consultation booking.
- **Tailoring Academy**: Course syllabus, fee breakdown, and online admission form.
- **Filterable Gallery**: Masonry grid with category filter tabs and Lightbox modal viewer.
- **MERN Backend API**: REST API storing customer enquiries in MongoDB with automated email notifications via Nodemailer.
- **Security & Performance**: Helmet HTTP security headers, CORS, rate limiting, and lazy-loading code splitting with React.lazy.

---

## 📁 Project Structure

```
pushpa-fabrics-website/
├── client/                     # React 19 + Vite Frontend
│   ├── public/                 # Static assets & robots.txt
│   ├── src/
│   │   ├── components/         # Reusable UI Components
│   │   │   ├── common/         # Header, Footer, WhatsAppButton, ScrollToTop
│   │   │   ├── home/           # Hero, AboutPreview, FeaturedCollections, Services, WhyChooseUs, CTA
│   │   │   ├── collections/    # CategoryCard, ProductCard, CollectionGrid
│   │   │   ├── gallery/        # GalleryGrid, Lightbox
│   │   │   └── contact/        # ContactForm, MapSection, ContactInfo
│   │   ├── pages/              # 9 Full Pages
│   │   ├── data/               # Collections, Services, Gallery mock data
│   │   ├── hooks/              # Custom hooks (useScrollToTop)
│   │   ├── layouts/            # MainLayout wrapper
│   │   ├── routes/             # AppRoutes with lazy loading
│   │   ├── utils/              # Constants and WhatsApp builders
│   │   ├── index.css           # Global luxury CSS theme
│   │   └── App.jsx
│   └── vite.config.js
├── server/                     # Node.js + Express Backend API
│   ├── src/
│   │   ├── config/             # MongoDB connection (db.js)
│   │   ├── controllers/        # Enquiry CRUD handlers
│   │   ├── models/             # Mongoose Enquiry Schema
│   │   ├── routes/             # Express API routes
│   │   ├── services/           # Nodemailer email service
│   │   ├── middleware/         # Centralized error handler
│   │   └── app.js
│   └── server.js
├── docs/                       # System requirements & project notes
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally OR MongoDB Atlas URI

### 1. Backend Setup
```bash
cd server
npm install
```
Configure environment variables:
Copy `.env.example` to `.env` and fill in your details:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pushpa-fabrics
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
OWNER_EMAIL=owner@pushpafabrics.com
CLIENT_URL=http://localhost:5173
```
Run the development server:
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install
```
Configure environment variables (Optional, defaults provided):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=91**********
```
Run Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/enquiry` | Submit contact/inquiry form & trigger email notification |
| `GET` | `/api/enquiry` | Fetch all submitted enquiries (sorted by newest) |
| `DELETE` | `/api/enquiry/:id` | Delete an enquiry entry |

---

## 📜 License
This project is created for Pushpa Fabrics. All rights reserved.
