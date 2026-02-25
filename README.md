# Inventory Management System (MERN)

## Overview
This is a basic full-stack Inventory Management System built using the MERN stack.

## Features
- Admin & Employee Login
- Add / Delete Products
- View Stock
- JWT Authentication

## Tech Stack
- React (Frontend)
- Node.js & Express (Backend)
- MongoDB (Database)

## Project Structure

Inventory-Management-System/
│
├── inventory-backend/
│   ├── config/              # Database connection (db.js)
│   ├── middleware/          # Authentication middleware
│   ├── models/              # Mongoose models (User, Product, Purchase)
│   ├── routes/              # API routes (authRoutes, productRoutes, purchaseRoutes)
│   ├── server.js            # Backend entry point
│   ├── package.json
│   └── .env                 # Environment variables (not pushed to GitHub)
│
└── inventory-frontend/
    ├── public/
    ├── src/
    │   ├── components/      # Navbar, ProtectedRoute
    │   ├── context/         # AuthContext
    │   ├── pages/           # Products, Sales, Purchase, Register, etc.
    │   ├── api.js           # API configuration & requests
    │   ├── App.js
    │   └── index.js
    └── package.json
