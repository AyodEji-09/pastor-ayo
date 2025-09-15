import { Button } from "@/components/ui/button";
import { HeaderStyleComponent } from "./HeroSection";
import BlogCard from "../ui/BlogCard";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Blogs" />

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button>See All Blogs <FaArrowRight /></Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
