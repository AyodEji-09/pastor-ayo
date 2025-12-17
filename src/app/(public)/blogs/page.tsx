"use client";
import UtilityBanner from "@/app/components/layout/UtilityBanner";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import BundlesCarousel from "@/app/components/BundlesCarousel";
import { BlogCard } from "@/app/components/ui/BlogCard";
import { mockBlogPosts } from "@/lib/data";
import { BlogPost, getAllPosts } from "@/sanity/queries/blogs";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
// import { blogs } from "@/lib/data";

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        // Use mock data if no posts from Sanity
        setPosts(fetchedPosts.length > 0 ? fetchedPosts : mockBlogPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
        // Fallback to mock data on error
        setPosts(mockBlogPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="space-y-4 mb-20">
      <UtilityBanner page="Blogs" />
      <div className="container mx-auto px-4">
        {/* Top responsive ad for Blogs */}
        <div className="my-6">
          <AdPlaceholder variant="responsive" aspectRatio={6.4}>
            <BundlesCarousel />
          </AdPlaceholder>
        </div>

        {/*<div className="flex flex-wrap gap-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              date={blog.date}
              img={blog.image_url}
              url={blog.url}
            />
          ))}
        </div>*/}
        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No blog posts found.
                </p>
                <p className="text-muted-foreground">
                  Configure your Sanity project to start publishing content.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
