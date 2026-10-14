import { notFound } from "next/navigation";
export const instant = false;

const posts = [
  {
    slug: "my-first-blog-post",
    title: "My First Blog Post",
    date: "October 13, 2026",
    content: `Welcome to my first blog post!

This is where I'll share my journey of learning web development, especially working with Next.js.

I'm excited to document what I learn and share it with others.`,
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-10">{post.date}</p>

      <div className="prose prose-lg text-gray-700 whitespace-pre-line">
        {post.content}
      </div>

      <div className="mt-12">
        <a href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </a>
      </div>
    </article>
  );
}