import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import LikeButton from "@/components/LikeButton";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

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

      <LikeButton slug={post.slug} initialLikes={post.likes} />
    </article>
  );
}
