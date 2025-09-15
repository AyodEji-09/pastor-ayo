import { Button } from "@/components/ui/button";
import Image from "next/image";
import blogImage from "@/assets/images/blog-img.jpg";

const BlogCard = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white">
      <div className="rounded-lg">
        <Image
          src={blogImage}
          alt="Blog Post 1"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </div>
      <article>
        <h3 className="text-lg font-semibold mb-2">Blog Post Title 1</h3>
        <p className="text-sm text-text">
          A brief excerpt from the first blog post to give readers an idea of
          the content.
        </p>
      </article>
      <div>
        <Button
          variant={"outline"}
          className="mt-4 border-primary text-primary font-semibold"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
