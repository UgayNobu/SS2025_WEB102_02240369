### ✅ `Reflection.md`

```markdown
# Reflection – Practical 6: Token-Based Authentication with Hono and Prisma

## a) Documentation

### ✅ Main Concepts Applied

- **User Authentication:** Built a flow using email/password and JWT.
- **Password Hashing:** Used `Bun.password.hash()` for encryption and `verify()` for login.
- **JWT Handling:** JWTs were generated on login and verified using Hono’s middleware.
- **Database Models:** Used Prisma to store users and link them to multiple accounts.
- **Protected Routes:** Added JWT middleware for all `/protected/*` API endpoints.

---

## b) Reflection

### 📚 What I Learned

This practical deepened my understanding of authentication and token-based access control. I clearly understood the flow of secure login, how JWTs work, and how to store sensitive information like hashed passwords. I also got hands-on experience with Prisma and Bun.

### 🧩 Challenges Faced

1. **Duplicate Email Error During Registration**
   - **Problem:** Registration failed silently due to a unique constraint.
   - **Solution:** Caught Prisma error `P2002` and returned a proper user-friendly message.

   ![email-error](screenshots/duplicate-email.png)

2. **JWT Token Missing in Authorization Header**
   - **Problem:** Protected routes showed "unauthorized" despite login success.
   - **Solution:** Ensured `Authorization: Bearer <token>` header was added correctly.

   ![auth-error](screenshots/missing-token.png)

3. **Login Always Failing**
   - **Problem:** Even valid credentials gave "invalid login" errors.
   - **Solution:** Fixed `verify()` usage by explicitly setting `bcrypt` as the algorithm.

4. **Token Expiring Immediately**
   - **Problem:** JWTs expired right after being generated.
   - **Solution:** Fixed expiry timestamp using `exp = Date.now() / 1000 + 60 * 60`.

5. **JWT Middleware Applied Globally**
   - **Problem:** Routes like `/login` and `/register` also became protected.
   - **Solution:** Scoped middleware only to `/protected/*` paths.

---

### 🎯 Summary

This practical made me more confident with backend security patterns using Hono and Prisma. The JWT flow was new to me, and learning how to debug middleware and token issues was valuable. Overall, it strengthened my understanding of secure full-stack development.