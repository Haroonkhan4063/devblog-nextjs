import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/posts";


export async function POST(request) {
  const { slug } = await request.json();
  const post = getPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  post.likes += 1;

  return NextResponse.json({ slug: post.slug, likes: post.likes });
}
