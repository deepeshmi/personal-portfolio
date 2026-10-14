import Link from "next/link";

const posts = [
  {
    slug: "my-first-blog-post",
    title: "My First Blog Post",
    date: "October 13, 2026",
    excerpt: "Welcome to my first blog post! This is where I'll share my journey of learning web development.",
  },
];

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}