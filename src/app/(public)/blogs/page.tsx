import UtilityBanner from "@/app/components/layout/UtilityBanner";
import BlogCard from "@/app/components/ui/BlogCard";
import { blogs } from "@/lib/data";

const Blogs = () => {
  return (
    <div className="space-y-4 mb-20">
      <UtilityBanner page="Blogs" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4">
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
    </div>
  );
};

export default Blogs;
