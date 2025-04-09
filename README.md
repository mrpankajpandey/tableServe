# 🍽️ Restaurant Food Ordering System

A full-stack restaurant ordering system where customers can scan a QR code to view the menu, place orders, and restaurant owners can manage KYC, menu, and receive orders with analytics.

---

## 📂 Tech Stack

- **Frontend:** React.js / Next.js (can be added)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, Bcrypt

---

## 🚀 Features

### 👤 Authentication

- Owner Signup/Login
- Admin Login (Hardcoded)
- JWT-based token authentication

### 🏪 Restaurant Management

- Owner can create their restaurant after login
- KYC Document Upload (Pending by default)
- Admin can approve/reject KYC

### 📋 Menu Management

- Owner can create and update menu items (veg/non-veg, half/full, price, description)

### 🧾 Order System

- Customers can view menu (QR code support optional)
- Select items and place order
- Orders are linked to table & restaurant
- Order status: `pending`, `confirmed`, `served`, `completed`

---

## 📘 API Documentation

### ✅ **Auth Routes**

#### POST `/api/auth/signup`

- Register new owner

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

#### POST `/api/auth/login`

- Login as owner

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### POST `/api/auth/admin`

- Admin login

```json
{
  "email": "admin@restaurant.com",
  "password": "admin123"
}
```

---

### 🍴 **Restaurant Routes**

#### POST `/api/restaurant`

- Create a restaurant (Protected: Owner only)

```json
{
  "name": "Pankaj's Dhaba",
  "address": "Barabanki, UP",
  "location": "26.93, 81.18",
  "aadhaar": "123456789012",
  "gst": "29ABCDE1234F2Z5"
}
```

#### PUT `/api/restaurant/kyc`

- Update KYC documents (Protected)

#### GET `/api/restaurant`

- Get logged-in owner's restaurant

#### PATCH `/api/restaurant/approve/:id`

- Admin approves KYC

---

### 🧾 **Menu Routes**

#### POST `/api/menu`

- Create menu for a restaurant (Protected: Owner)

```json
{
  "restaurantId": "<restaurant_id>",
  "items": [
    {
      "name": "Paneer Butter Masala",
      "category": "veg",
      "price": 250,
      "type": "full",
      "description": "Delicious creamy paneer."
    }
  ]
}
```

#### GET `/api/menu/:restaurantId`

- Get menu for a restaurant

---

### 📦 **Order Routes**

#### POST `/api/order`

- Place an order

```json
{
  "restaurantId": "<restaurant_id>",
  "tableId": "T1",
  "customerName": "Rohit Sharma",
  "customerPhone": "9876543210",
  "items": [
    {
      "itemId": "<menu_item_id>",
      "quantity": 2
    },
    {
      "itemId": "<menu_item_id>",
      "quantity": 1
    }
  ]
}
```

#### GET `/api/order/:restaurantId`

- Get all orders for a restaurant (Protected: Owner/Admin)

---

## 🔐 JWT Auth Middleware

Use `Authorization: Bearer <token>` in headers for protected routes.

---

## 📌 To-Do Features

- QR Code for each table
- Live order updates (Socket.io)
- Order analytics dashboard
- Waiter confirmation flow
- Payment gateway integration

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/yourusername/restaurant-ordering-system.git
cd backend
npm install
npm run dev
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🧑‍💻 Developed by

**Pankaj Kumar Pandey**\
[GitHub](https://github.com/mrpankajpandey) | [LinkedIn](https://linkedin.com/in/mrpankajpandey)

