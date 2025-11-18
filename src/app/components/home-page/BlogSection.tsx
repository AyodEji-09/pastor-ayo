"use client";
import { Button } from "@/components/ui/button";
import { HeaderStyleComponent } from "./HeroSection";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BlogCard } from "../ui/BlogCard";
import { mockBlogPosts } from "@/lib/data";
import { useEffect, useState } from "react";
import { BlogPost, getAllPosts } from "@/sanity/queries/blogs";

const BlogSection = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);

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
      }
    };

    fetchPosts();
  }, []);
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Blogs" />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={() => router.push("/blogs")}>
            See All Blogs <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
