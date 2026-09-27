# DevBlog 🚀 - Next.js Core Concepts Showcase

A minimal, highly optimized tech blog built to demonstrate the core fundamentals of Next.js for the Dev Weekends '26 Fellowship. This project highlights the App Router, Data Fetching strategies (SSR, SSG, ISR), and the architectural difference between Server and Client Components.

🔗 **[Live Demo][Vercel_Link_Aayega](https://devblog-nextjs-pi.vercel.app/)**

## 🧠 Core Concepts Implemented

* **App Router:** Utilized the modern `app/` directory structure for seamless navigation and dynamic routing (`/blog/[slug]`).
* **Server Components (Default):** The layout and blog post pages are rendered entirely on the server, sending zero unnecessary JavaScript to the client for lightning-fast load times.
* **Client Components (`"use client"`):** Interactive elements, such as the dynamic 'Like' button, are explicitly declared as client components to handle user state and interactivity.
* **Data Fetching Strategies:**
  * **SSG (Static Site Generation):** The home page is pre-rendered at build time for instant loading.
  * **ISR (Incremental Static Regeneration):** Blog posts are statically generated but revalidate in the background, ensuring content stays fresh without rebuilding the entire site.
* **API Routes:** A custom backend endpoint (`/api/likes`) built directly within Next.js to handle post interactions.
* **Image Optimization:** Configured `next.config.js` and used `next/image` to automatically resize, optimize, and serve external images in modern formats.

## 🛠️ Tech Stack
* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

## 👨‍💻 Developer
**Muhammad Haroon Khan**
*BSCS (7th Semester) | Software Engineer & Web Development Fellow*
