### Practical 5 – Implementing Cloud Storage with Supabase

```markdown
# Practical 5: Cloud Storage with Supabase

## Objective
Migrate video storage from local server to Supabase buckets for scalability and CDN support.

## Step 1: Supabase Setup
- Create project at [supabase.com](https://supabase.com)
- Create `videos` and `thumbnails` buckets
- Set appropriate policies for authenticated upload and public read

## Step 2: Backend Integration
```bash
npm install @supabase/supabase-js
```
src/lib/supabase.js: Setup client

src/services/storageService.js: Upload logic

Modify videoController.js to upload/delete from Supabase

## Step 3: Prisma Updates
Add storage paths to Video model and run migration.

## Step 4: Frontend Integration
```bash
Copy
Edit
npm install @supabase/supabase-js
```
src/lib/supabase.js: Create client

uploadService.js: Upload videos directly

Update upload/page.jsx and VideoCard.jsx

## Step 5: Migrate & Clean Local
```bash
Copy
Edit
node scripts/migrateVideosToSupabase.js
```
Then delete local files if migration is successful.

### Resources
Supabase Docs

Frontend Repo

Server Repo