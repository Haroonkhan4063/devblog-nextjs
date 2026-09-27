import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

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
