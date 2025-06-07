###  Practical 3 – File Upload on the Server Application

```markdown
# Practical 3: File Upload on the Server Application

## Objective
Implement secure and validated file uploads in an Express backend using Multer.

## Tech Stack
- Node.js
- Express
- Multer
- Axios (frontend)
- CORS

## Steps to Implement

### 1. Setup Server
```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
npm install express cors multer morgan dotenv
```
### 2. Configure Multer Middleware
Handle multipart/form-data

Validate file type and size

### 3. Create Upload API
```javascript
Copy
Edit
app.post("/api/upload", upload.single("file"), (req, res) => { ... });
```

### 4. Handle Errors & CORS
Add custom error handler middleware and configure CORS to allow frontend access.

### 5. Modify Frontend
Change axios POST URL to Express server

Update Dropzone and file preview logic

## Test Checklist
✅ Upload success

✅ File validation (PDFs, size)

✅ Error messages

✅ Preview shown