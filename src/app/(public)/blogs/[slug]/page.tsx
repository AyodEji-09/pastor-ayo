import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/client";
import {
  getPostBySlug,
  BlogPost as BlogPostType,
} from "@/sanity/queries/blogs";
import { mockBlogPosts } from "@/lib/data";
import { PortableTextRenderer } from "@/app/components/ui/PortableTextRenderer";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

// This function generates static pages at build time
export async function generateStaticParams() {
  // In a real app, you would fetch all post slugs from your CMS
  return mockBlogPosts.map((post) => ({
    slug: post.slug.current,
  }));
}

// This is the page component, now a Server Component
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: BlogPostType | null = null;
  try {
    const fetchedPost = await getPostBySlug(slug);
    if (!fetchedPost) {
      const mockPost = mockBlogPosts.find((p) => p.slug.current === slug);
      post = mockPost || null;
    } else {
      post = fetchedPost;
    }
  } catch (error) {
    console.error("Error loading post:", error);
    // You might want to handle this error more gracefully
  }

  // If no post is found, render the 404 page
  if (!post) {
    notFound();
  }

  // const imageUrl = post.mainImage ? post.mainImage.asset.url : null;
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : new Date(post._createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

  return (
    <article className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/blogs"
          className="btn btn-ghost btn-sm inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      {imageUrl && (
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={imageUrl}
              alt={post.title}
              className="object-cover rounded-2xl shadow-2xl"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-4 mt-12 mb-8">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <Badge key={category._id} variant="secondary" className="text-xs">
                {category.title}
              </Badge>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-muted-foreground whitespace-nowrap flex-wrap">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt || post._createdAt}>
              {formattedDate}
            </time>
          </div>
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image ? (
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
              <span className="font-medium">{post.author.name}</span>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="prose prose-lg max-w-none">
          {post.body ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p>This post has no content.</p>
          )}
        </div>
      </div>
    </article>
  );
}
