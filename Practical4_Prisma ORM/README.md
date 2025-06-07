### ✅ Practical 4 – Connecting TikTok to PostgreSQL with Prisma ORM

```markdown
# Practical 4: TikTok + PostgreSQL with Prisma ORM

## Objective
Integrate PostgreSQL into the TikTok backend using Prisma for persistent data and authentication.

## Part 1: PostgreSQL Setup
```sql
CREATE DATABASE tiktok_db;
CREATE USER tiktok_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
```
## Part 2: Prisma Setup
```bash
Copy
Edit
npm install @prisma/client
npm install prisma --save-dev
npx prisma init
```
Set DATABASE_URL in .env

Define models in prisma/schema.prisma

Part 3: Auth & Controllers
Use bcrypt for password hashing

Use jsonwebtoken for JWT

Update all controllers to use Prisma Client

Part 4: Seed Script
bash
Copy
Edit
npm install bcrypt
npm run seed
Part 5: Test API with Postman
Register, login

Create video with token

Use protected routes

References
TikTok Server Repo

Postman Testing Guide