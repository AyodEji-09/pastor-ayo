"use client";
import { Button } from "@/components/ui/button";
import { HeaderStyleComponent } from "./HeroSection";
import BlogCard from "../ui/BlogCard";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { blogs } from "@/lib/data";

const BlogSection = () => {
  const router = useRouter();
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Blogs" />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
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
