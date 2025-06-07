---

## ✅ **2. Reflection.md**

```markdown
# Reflection on Practical 1: RESTful API

## 📝 a) Documentation

In this practical, I learned how to design and build RESTful API endpoints for a simple social media platform using Node.js and Express. I applied concepts such as:

- RESTful URI design
- HTTP methods and status codes
- Request and response handling
- Content negotiation using middleware
- Modular project structure with controllers, routes, and utils
- Index routes and error handling

I followed good practices like using middleware (`helmet`, `cors`, etc.) and separating logic into different folders.

---

## 💬 b) Reflection

This was my first time making an API from scratch. It was fun but also difficult in some parts. I learned how each route connects to a controller, and how to use Express to send responses.

### ❗ Challenges Faced:

1. **File path errors** – I had problems when importing mockData or middleware. The paths like `../utils/mockData` didn’t work until I double-checked the folder names.
2. **nodemon not starting** – I forgot to add the script in `package.json` at first.
3. **CORS issues** – When testing with Postman, I faced blocked requests until I added the `cors` middleware.
4. **Content negotiation** – It was tricky to detect MIME types and return different formats. But once I added the middleware and tested with Postman headers, it worked!

---

### ✅ What I learned:
- How to build and test a real API with multiple resources
- Importance of organizing code with routes and controllers
- How RESTful structure makes an app easy to scale
- How content negotiation works and how to implement it

If I had more time, I would try to connect it with MongoDB and write some basic authentication too. But I feel more confident now to build APIs from scratch.

Let me know if you want both files in downloadable .md format or need help creating screenshots to insert!