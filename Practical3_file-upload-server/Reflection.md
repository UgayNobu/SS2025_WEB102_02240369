# Reflection – Practical 3

## a) Documentation

### Concepts Applied:
- **Multer Middleware:** For handling file uploads and storage.
- **Validation:** Checked file types (e.g. PDFs) and file size limits.
- **CORS Handling:** Allowed cross-origin frontend communication.
- **Frontend Integration:** Updated React form to send FormData and preview uploads.

## b) Reflection

### What I Learned:
I learned how backend and frontend work together in file handling. Understanding `multipart/form-data` and how to parse it with Multer was very useful.

### Challenges:
- **Challenge:** Getting the Dropzone component to work for PDFs.
- **Solution:** Updated the `fileFilter` logic and handled previews with PDF file names instead of thumbnails.

> ![upload-error](screenshots/practical3-validation.png)

- **Challenge:** Backend rejecting CORS requests.
- **Solution:** Updated Express CORS config to allow specific origins and methods.