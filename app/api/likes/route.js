import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/posts";

// In app/api/.../route.js, exporting a function named after an HTTP
// method (GET, POST, etc.) turns this file into that endpoint's handler.
// This is what "API Routes" means in Next.js — no separate Express
// server needed, the backend lives right inside the same app.

export async function POST(request) {
  const { slug } = await request.json();
  const post = getPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // NOTE: this mutates an in-memory array, so it resets on every
  // server restart / cold start. That's fine for this demo — in a
  // real app you'd write this to a database (e.g. MongoDB) instead.
  post.likes += 1;

  return NextResponse.json({ slug: post.slug, likes: post.likes });
}
