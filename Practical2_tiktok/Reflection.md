# Reflection – Practical 2

## a) Documentation

### Concepts Applied:
- **Modular Express Setup:** Separated controllers, routes, and models.
- **In-Memory Data Models:** Used JS arrays to simulate a database.
- **Routing Strategy:** Implemented nested routes like `/users/:id/videos` and `/videos/:id/comments`.
- **Testing with cURL & Postman:** Validated responses and CRUD operations.

## b) Reflection

### What I Learned:
This practical helped me grasp how an API can be scaled by separating concerns. I also learned about RESTful hierarchies and how to simulate DB operations without an actual DB.

### Challenges:
- **Challenge:** Maintaining data consistency across controllers.
- **Solution:** Created a shared in-memory store in `models/index.js`.

> ![curl-test](screenshots/practical2-curl.png)

- **Challenge:** Testing routes quickly.
- **Solution:** Saved test cases as Postman collections for quick reuse.