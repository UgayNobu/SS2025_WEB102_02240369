# Reflection – Practical 5

## a) Documentation

### Concepts Applied:
- **Supabase Storage Buckets:** Used public buckets for videos and thumbnails.
- **Direct Uploads:** Configured frontend to upload directly via Supabase client.
- **Prisma Schema Update:** Added `videoStoragePath` and related fields.
- **Migration Script:** Moved local files to Supabase via script.

## b) Reflection

### What I Learned:
This was my first experience with a cloud storage provider. I understood how to organize files in buckets, apply access policies, and manage security keys. Integrating Supabase across both backend and frontend was a full-stack task.

### Challenges:
- **Challenge:** Getting the storage policy to allow uploads.
- **Solution:** Used Supabase dashboard to create authenticated `INSERT` and public `SELECT` policies.

> ![supabase-policy](screenshots/practical5-policies.png)

- **Challenge:** Video URL not loading in frontend.
- **Solution:** Updated `getFullVideoUrl` in `VideoCard.jsx` to point to Supabase CDN URL.
