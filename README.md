# Book Shop Application

## 🚀 Live Demo

[Click here to visit the live application](https://book-bliss-alpha.vercel.app)

---

## 📌 Overview & Objective

The **Book Bliss** is a fully functional e-commerce platform for buying books. It includes secure authentication, product management, filtering, and role-based access for users and admins. The application is designed to be responsive, user-friendly, and visually appealing.

---

## 🎯 Features

### 🔐 **Authentication & Authorization**

- User registration with **secure password hashing**.
- Login with JWT-based authentication.
- Role-based access (`admin` and `user`).
- Logout functionality.

### 🛍 **Public Routes**

- **Home Page:**
  - Navbar with navigation and authentication buttons.
  - Banner with featured promotions.
  - Featured products (max 6) with a "View All" button.
  - Additional section (testimonials/blogs).
  - Footer with social media links and contact details.
- **All Products Page:**
  - Search functionality by `title`, `author`, and `category`.
  - Filters for `price range`, `author`, `category`, and `availability`.
  - Dynamic product listing with details and a "View Details" button.
- **Product Details Page:**
  - Displays book image, name, author, category, price, and description.
  - "Buy Now" button leading to checkout.
- **About Page:**
  - Information about the book shop and its mission.

### 🔒 **Private Routes**

- **Checkout Page:**
  - Users can place orders (ensuring stock availability).
  - Order form with product/user details, total price, and payment method.
  - **Payment Integration with SurjoPay**.
- **Dashboard (Role-Based Access):**
  - **Admin Dashboard:** Manage users, products (CRUD), and orders (CRUD).
  - **User Dashboard:** View orders and manage profile settings.
  - Password update functionality (requires current password).

### 🎨 **UI/UX Enhancements**

- **Responsive design** for all screen sizes.
- **Error handling** for login, registration, and failed operations.
- **Loading states** for API calls.
- **Toasts for notifications** (e.g., login success, order placed, etc.).

---

## 🛠️ Technologies Used

- **Frontend:** React.js, TypeScript, Tailwind CSS, Ant Design
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit
- **Payment Gateway:** SurjoPay
- **Deployment:** Vercel 

---




