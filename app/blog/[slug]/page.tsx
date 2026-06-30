import Link from "next/link";
import { notFound } from "next/navigation";
import { LuClock } from "react-icons/lu";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} — ViramTech` : "Blog — ViramTech",
    description: post?.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-32">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline"
      >
        ← Blog
      </Link>

      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-500">
        <span>{post.category}</span>
        <span className="opacity-40">·</span>
        <span>{post.date}</span>
        <span className="opacity-40">·</span>
        <span className="flex items-center gap-1 opacity-70">
          <LuClock size={13} /> {post.readTime}
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {post.title}
      </h1>

      <div
        className={`mt-8 h-56 w-full rounded-3xl bg-gradient-to-br ${post.gradient}`}
      />

      <p className="mt-8 text-xl font-medium leading-relaxed opacity-80">
        {post.excerpt}
      </p>

      <div className="mt-8 space-y-5 text-base leading-relaxed opacity-75">
        <p>
          This is a placeholder for the full article. The complete write-up — with
          examples, diagrams and a step-by-step breakdown — is on its way.
        </p>
        <p>
          In the meantime, if this topic is relevant to what your team is building,
          we&apos;d be glad to talk it through and share what we&apos;ve learned
          shipping enterprise AI to production.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 rounded-3xl border border-black/5 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="flex-1 text-base font-semibold">
          Want to go deeper on this?
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Talk to us
        </Link>
      </div>
    </article>
  );
}
