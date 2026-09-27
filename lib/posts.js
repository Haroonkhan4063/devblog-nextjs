

const posts = [
  {
    slug: "what-is-server-side-rendering",
    title: "What is Server-Side Rendering (SSR)?",
    excerpt:
      "SSR generates the HTML for a page on every request. Great for pages whose content changes per-user or per-request.",
    content:
      "Server-Side Rendering means the HTML for a page is built on the server at request time, then sent to the browser already filled in. This is different from client-side rendering, where the browser downloads a mostly-empty page and JavaScript fills it in afterwards. SSR is ideal for pages that need fresh, request-specific data — like a dashboard showing a logged-in user's own orders.",
    cover:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    date: "2026-09-10",
    likes: 4,
  },
  {
    slug: "what-is-static-site-generation",
    title: "What is Static Site Generation (SSG)?",
    excerpt:
      "SSG builds the HTML once, at build time. The result is a static file served instantly from a CDN.",
    content:
      "Static Site Generation pre-renders a page into plain HTML during the build step, before any user ever visits it. That HTML is then served instantly from a CDN edge location. SSG is perfect for content that doesn't change per-user — blog posts, marketing pages, documentation. It's the fastest possible way to serve a page because there's no server work happening on each request.",
    cover:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    date: "2026-09-12",
    likes: 7,
  },
  {
    slug: "what-is-incremental-static-regeneration",
    title: "What is Incremental Static Regeneration (ISR)?",
    excerpt:
      "ISR lets static pages update after deployment, without a full rebuild — the best of SSG and SSR.",
    content:
      "Incremental Static Regeneration solves SSG's biggest weakness: what if your content changes after the site is built? With ISR, you set a 'revalidate' time (e.g. 60 seconds). Next.js keeps serving the fast static page, but in the background it silently regenerates that page after the revalidate window passes. Visitors always get a fast response, and content stays reasonably fresh — without redeploying the whole site.",
    cover:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    date: "2026-09-15",
    likes: 2,
  },
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
