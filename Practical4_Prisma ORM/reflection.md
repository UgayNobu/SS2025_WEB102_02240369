# Reflection – Practical 4

## a) Documentation

### Concepts Applied:
- **Database Setup:** Created and connected PostgreSQL DB.
- **Prisma ORM:** Used schema.prisma for models and migration.
- **Authentication:** Implemented JWT tokens and hashed passwords.
- **Controller Refactoring:** Shifted from in-memory to persistent DB queries.

## b) Reflection

### What I Learned:
I learned how to define database schemas and generate database clients using Prisma. Authentication was also a highlight, where I applied hashing and JWT verification securely.

### Challenges:
- **Challenge:** Prisma migration failed due to bad schema syntax.
- **Solution:** Used `npx prisma validate` before `migrate dev` to catch mistakes.

> ![prisma-schema-error](screenshots/practical4-schema-error.png)

- **Challenge:** JWT tokens not working with protected routes.
- **Solution:** Fixed token extraction logic in `auth.js` middleware.