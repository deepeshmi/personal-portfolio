import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
          Deepesh Mishra
        </Link>

        {/* Links */}
        <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}