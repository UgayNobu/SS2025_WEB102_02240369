# Social Media API (Practical 1)

## Objective
This project is about designing and implementing RESTful API endpoints using Node.js and Express. The goal is to build a simple social media platform API with CRUD operations for posts, users, comments, likes, and followers.

---

## 📁 Project Setup

1. **Create project folder**
   ```bash
   mkdir social-media-api
   cd social-media-api
Initialize Node.js

npm init -y
Install dependencies

npm install express morgan cors helmet
npm install nodemon --save-dev
Project structure

controllers/
routes/
middleware/
utils/
server.js
.env
🔧 API Endpoints
🧑 Users
GET /users - Get all users

GET /users/:id - Get a specific user

POST /users - Create a user

PUT /users/:id - Update user

DELETE /users/:id - Delete user

📸 Posts
GET /posts - Get all posts

GET /posts/:id - Get a specific post

POST /posts - Create a post

PUT /posts/:id - Update post

DELETE /posts/:id - Delete post

(Same for comments, likes, followers)

📄 Content Negotiation
Middleware added in middleware/formatResponse.js to support response in:

application/json

text/html

🧪 Mock Data
Mock data for users and posts placed in:

utils/mockData.js

📂 API Documentation
Basic HTML docs page located at:

arduino
public/docs.html
🖥️ Run the Server
bash
npm run dev









