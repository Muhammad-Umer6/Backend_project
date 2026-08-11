# 📸 Post Feed App

A simple full-stack social media style application where users can create posts with an image and caption, view them in a scrollable feed, and delete posts. Built with a MERN-based stack and image hosting via ImageKit.

## 🚀 Features

- **Create Post** — Upload an image with a caption
- **Feed View** — Scrollable, Instagram-style feed showing all posts
- **Delete Post** — Remove a post directly from the feed
- **Cloud Image Storage** — Images are uploaded and served via ImageKit
- **Responsive UI** — Optimized for mobile screens with a clean, card-based design

## 🛠️ Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- CSS (custom, mobile-first)

**Backend**
- Node.js
- Express.js
- Multer (in-memory file handling)
- MongoDB with Mongoose
- ImageKit (image storage & CDN)

## 📂 Project Structure

```
project-root/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── post.models.js
│   │   └── service/
│   │       └── storage.service.js
│   ├── index.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── CreatePost.jsx
    │   │   └── Feed.jsx
    │   ├── App.jsx
    │   └── index.css
    └── package.json
```

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd project-root
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend root:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔌 API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|---------------------------|
| POST   | `/create-post`     | Create a new post (image + caption) |
| GET    | `/posts`           | Fetch all posts           |
| DELETE | `/posts/:id`       | Delete a post by ID       |

## 📱 Screenshots

### Feed Page
![Feed Page](./screenshots/feed.png)

### Create Post Page
![Create Post Page](./screenshots/create-post.png)

## 🧑‍💻 Author

Made by **Muhammad Umer**

## 📄 License

This project is open source and available for personal/educational use.