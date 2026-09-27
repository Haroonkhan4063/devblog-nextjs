import "./globals.css";

export const metadata = {
  title: "DevBlog — Next.js Fundamentals Project",
  description:
    "A small blog built to demonstrate App Router, SSR, SSG, ISR, API routes, and image optimization in Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="logo">
              Dev<span>Blog</span>
            </a>
            <p className="tagline">Next.js fundamentals, explained by building</p>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>
              Built by <strong>Muhammad Haroon Khan</strong> — Next.js App
              Router, SSR/SSG/ISR demo project.
            </p>
            <div className="footer-links">
              <a
                href="https://github.com/Haroonkhan4063"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-haroon-khan-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
