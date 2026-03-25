import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getPostBySlug } from "@/app/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-surface-container-lowest">
        <article className="max-w-screen-md mx-auto px-6 md:px-12">
          {/* Article Header */}
          <header className="mb-12 md:mb-16 mt-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                {post.edition}
              </span>
              <span className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl text-primary font-extrabold text-center mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant text-center max-w-2xl mx-auto leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] relative mb-12 md:mb-20 overflow-hidden bg-surface-container">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg prose-headings:font-headline prose-headings:font-bold prose-headings:text-primary prose-p:font-body prose-p:text-on-surface-variant prose-p:leading-relaxed prose-a:text-[#5d4201] prose-a:no-underline hover:prose-a:underline mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Info */}
          <footer className="mt-20 pt-10 border-t border-on-surface-variant/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary-fixed flex items-center justify-center font-headline font-bold text-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <span className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                Written By
              </span>
              <span className="font-headline font-semibold text-primary">
                {post.author}
              </span>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
