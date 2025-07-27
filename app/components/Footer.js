"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Daily Task Tracker. Built with ❤️ using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
