import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  robots: { index: false, follow: false },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted">Notes on bioinformatics and tooling.</p>

      {posts.length === 0 ? (
        <p className="mt-10 text-muted">No posts yet.</p>
      ) : (
        <ul className="mt-10 flex flex-col gap-6">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block group">
                <div className="text-sm text-muted">{p.date}</div>
                <h2 className="text-lg font-medium group-hover:underline">
                  {p.title}
                </h2>
                {p.excerpt && (
                  <p className="mt-1 text-sm text-muted">{p.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
