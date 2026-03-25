import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getAllPosts } from "@/app/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description: "Read the latest stories, guides, and experiences from Dapoli.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-16 md:mb-24 mt-10 md:mt-20">
            <span className="font-label tracking-widest uppercase text-xs mb-3 md:mb-4 block text-on-surface-variant">
              The Journal
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold">
              Stories from <br className="hidden md:block" /> the Coast
            </h1>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block cursor-pointer">
                <article>
                  <div className="aspect-[16/10] mb-6 overflow-hidden bg-surface-container relative">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="px-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                        {post.edition}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h2 className="font-headline text-2xl font-bold mb-3 group-hover:text-[#5d4201] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    <span
                      className="text-xs font-label font-semibold uppercase tracking-widest pb-1 group-hover:translate-x-1 inline-block transition-all duration-300"
                      style={{
                        borderBottom: "1px solid rgba(0,6,19,0.15)",
                        color: "#000613",
                      }}
                    >
                      Read Article →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
