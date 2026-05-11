// Supabase client stub. Wire this up when migrating blog source from
// local markdown to a `posts` table in Supabase. Keep the same shape as
// lib/blog.ts so swapping out the loader is a one-line change.
//
// Suggested schema:
//   create table posts (
//     id uuid primary key default gen_random_uuid(),
//     slug text unique not null,
//     title text not null,
//     body_md text not null,
//     excerpt text,
//     tags text[],
//     published_at timestamptz
//   );
//   -- RLS: public read where published_at <= now()
//
// Then re-export getAllPosts/getPostBySlug/getAllSlugs from here.

export {};
