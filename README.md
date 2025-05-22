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
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit
- **Payment Gateway:** SurjoPay
- **Deployment:** Vercel / Netlify (Frontend), Render / Heroku (Backend)

---

## 📖 Installation & Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+)
- **MongoDB** (or use a cloud database like MongoDB Atlas)

### 🔧 **Backend Setup**

```bash
# Clone the repository https://github.com/Fahmudul/Book-Bliss-Server
cd book-shop/server

# Install dependencies
npm install

# Create a .env file and add the following variables:
PORT=5000
NODE_ENV
PORT
DATABASE_URL
BCRYPT_SALT_ROUNDS
JWT_ACCESS_SECRET
JWT_ACCESS_EXPIRES_IN
SP_ENDPOINT
SP_USERNAME
SP_PASSWORD
SP_PREFIX
SP_RETURN_URL

# Run the server
npm start
```

### 🎨 **Frontend Setup**

```bash
cd ../client

# Install dependencies
npm install


# Start the frontend
npm run dev
```

---

## 📌 Usage Instructions

- **Sign up or log in** to access the platform.
- **Browse books**, apply filters, and search for specific titles.
- **View product details** and proceed to checkout.
- **Admins** can **add, update, delete products** and **manage users**.
- **Users** can **place orders and manage their profiles**.

## 🔗 API Documentation

| Endpoint            | Method | Description                   |
| ------------------- | ------ | ----------------------------- |
| `/api/auth/register`  | `POST` | Register a new user           |
| `/api/auth/login`   | `POST` | User login and JWT generation |
| `/api/get-all-books`     | `GET`  | Get all books                 |
| `/api/get-book/:id` | `GET`  | Get book details              |
| `/api/orders/create-order`       | `POST` | Place an order                |


---

## 🏗️ Future Improvements

- **Super Admin Role**
- **Advanced Order Tracking**
- **User Reviews & Ratings**
- **Wishlist & Favorites**
- **More Payment Options**

- Credentials: admin: admin@gmail.com, Password: 123456

---

## 👨‍💻 Contributors

- **Fahmudul Hassan Siam** ([GitHub](https://github.com/Fahmudul))

---



