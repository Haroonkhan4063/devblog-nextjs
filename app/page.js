import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// No "use client" here → this is a Server Component.
// It also does NOT use fetch() with dynamic options, force-dynamic,
// or cookies/headers — so Next.js is free to render it fully at
// BUILD TIME and serve it as static HTML from then on. This is SSG.
export default function HomePage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1>Learn Next.js by reading about Next.js</h1>
      <p style={{ color: "var(--text-dim)" }}>
        This whole page was generated once, at build time (Static Site
        Generation). Open a post to see Incremental Static Regeneration in
        action.
      </p>

      <div className="post-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
            <Image
              src={post.cover}
              alt={post.title}
              width={160}
              height={120}
              // next/image automatically: resizes, converts to modern
              // formats (WebP/AVIF), lazy-loads, and prevents layout shift.
            />
            <div className="post-card-body">
              <span className="post-date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
