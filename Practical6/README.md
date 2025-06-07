# Practical 6: Token-Based Authentication with Hono and Prisma

## Overview
In this practical, we implemented user authentication using JSON Web Tokens (JWT) in a REST API built with Hono (a Bun-based web framework) and Prisma ORM. The purpose was to restrict access to sensitive routes and manage user sessions securely via tokens.

---

## Key Objectives
- Implement email-password authentication with hashed storage
- Generate and verify JWTs for secure sessions
- Protect routes using Hono’s JWT middleware
- Store users and related accounts in PostgreSQL using Prisma

---

## Setup Instructions

### 1. Clone the Project
```bash
git clone https://github.com/rubcstswe/web102-hono-auth-jwt-prisma-forked.git
cd web102-hono-auth-jwt-prisma-forked
bun install
```

### 2. Prisma Schema
```prisma
Copy
Edit
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  hashPassword String
  Account      Account[]
}

model Account {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id])
  balance Int    @default(0)
}
```
### 3. Apply Database Changes
```bash
Copy
Edit
bunx prisma db push
bunx prisma generate
```

##  Authentication Flow
🔹 Registration - POST /register
Registers a new user with an email and password.

Password is hashed using Bun.password.hash()

A default account with balance = 0 is created

Sample Request

```json
Copy
Edit
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
Response

```json
Copy
Edit
{
  "message": "User created successfully"
}
```

## Login - POST /login
Validates credentials and returns a JWT.

Response

```json
Copy
Edit
{
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE"
}
```

## JWT Setup
Token is signed with user ID and 1-hour expiry.

```js
Copy
Edit
const payload = {
  sub: user.id,
  exp: Math.floor(Date.now() / 1000) + 60 * 60,
};
const token = await sign(payload, secret);

```

## Protected Route Example
GET /protected/account/balance
Requires Authorization: Bearer <JWT_TOKEN>

Returns the account balance of the authenticated user

Sample Response

```json
Copy
Edit
{
  "data": {
    "Account": [
      {
        "balance": 0,
        "id": "75a34064-f8c4-4a7e-90dd-4958c452fbf4"
      }
    ]
  }
}
```
## Testing Steps
Register at /register

Login via /login and copy the returned JWT

Use that JWT to access /protected/account/balance using:

```makefile
Copy
Edit
Authorization: Bearer JWT_TOKEN