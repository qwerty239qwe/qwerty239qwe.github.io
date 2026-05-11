import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post?.title ?? "Post",
    robots: { index: false, follow: false },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Link href="/blog" className="text-sm text-muted hover:underline">
        &larr; All posts
      </Link>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <div className="mt-2 text-sm text-muted">{post.date}</div>
      <div className="mt-8 prose-content text-base leading-7 space-y-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
