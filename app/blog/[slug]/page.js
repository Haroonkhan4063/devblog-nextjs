import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import LikeButton from "@/components/LikeButton";

// generateStaticParams tells Next.js which [slug] values exist,
// so it can pre-render ALL of them into static HTML at build time.
// This is what makes a dynamic route ([slug]) still work with SSG.
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// THIS is the ISR line. Without it, this page would be static forever
// after the build. With it, Next.js will re-generate this page in the
// background at most once every 60 seconds when a new request comes in —
// so content can update without a full redeploy.
export const revalidate = 60;

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article className="post-page">
      <span className="post-date">{post.date}</span>
      <h1>{post.title}</h1>
      <Image src={post.cover} alt={post.title} width={860} height={420} priority />
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* LikeButton needs onClick + useState, so it MUST be a
          Client Component. We import it here into a Server Component —
          Next.js handles the boundary between the two automatically. */}
      <LikeButton slug={post.slug} initialLikes={post.likes} />
    </article>
  );
}
