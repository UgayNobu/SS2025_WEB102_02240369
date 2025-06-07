### Practical 2 – TikTok REST API Design and Implementation

```markdown
# Practical 2: TikTok - REST API Design and Implementation

## Objective
Design and implement a TikTok-style REST API using Node.js and Express with in-memory data.

## Key Resources
- Users
- Videos
- Comments
- Likes
- Followers

## Setup Instructions

### 1. Initialize the Backend
```bash
mkdir server
cd server
npm init -y
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon
```
### 2. Create Folder Structure
```bash
Copy
Edit
mkdir -p src/controllers src/routes src/models src/middleware src/utils
touch src/app.js src/server.js .env
```
### 3. Use In-Memory Models
Add sample data in src/models/index.js.

### 4. Implement Controllers
videoController.js

userController.js

commentController.js

### 5. Setup Routes
```bash
Copy
Edit
src/routes/videos.js
src/routes/users.js
src/routes/comments.js
```
### 6. Start Server
```bash
Copy
Edit
npm run dev
```
Testing (Example Commands)
```bash
Copy
Edit
curl -X GET http://localhost:3000/api/users
curl -X GET http://localhost:3000/api/videos