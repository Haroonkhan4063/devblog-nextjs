"use client";

import { useState } from "react";

export default function LikeButton({ slug, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLike() {
    if (liked || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (res.ok) {
        setLikes(data.likes);
        setLiked(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className={`like-button${liked ? " liked" : ""}`}
      onClick={handleLike}
      disabled={loading}
    >
      {liked ? "❤️" : "🤍"} {likes} {likes === 1 ? "like" : "likes"}
    </button>
  );
}
