import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
};

export type Post = PostMeta & { content: string };

// Whether to surface the /blog link in the NavBar. The /blog pages are
// always generated at build time; this flag only controls discoverability.
export const blogLinkVisible = process.env.NEXT_PUBLIC_BLOG_ENABLED === "true";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readAll(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): PostMeta[] {
  return readAll().map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  return readAll().find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return readAll().map((p) => p.slug);
}
