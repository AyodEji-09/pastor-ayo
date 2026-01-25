// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import blogImage from "@/assets/images/blog-img.jpg";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const BlogCard = ({
//   title,
//   author,
//   date,
//   description,
//   img,
//   url,
// }: {
//   title: string;
//   author: string;
//   date: string;
//   description: string;
//   img: string;
//   url: string;
// }) => {
//   return (
//     <Card className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white max-w-xs">
//       <div className="rounded-lg overflow-hidden h-[200px] bg-amber-50">
//         <Image
//           src={img}
//           alt="Blog Post 1"
//           className="w-full h-48 object-cover rounded-lg mb-4"
//           width={400}
//           height={300}
//           layout="responsive"
//           objectFit="cover"
//           objectPosition="center"
//           priority
//           placeholder="blur"
//           blurDataURL={img}
//           loading="eager"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>
//       <CardHeader>
//         <CardDescription>
//           <small>
//             {date} . {author}
//           </small>
//         </CardDescription>
//         <CardTitle className="text-xl">{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-sm text-text">{description}</p>
//       </CardContent>
//       <CardFooter>
//         <a href={url} target="__blank" rel="noopener noreferrer">
//           <Button
//             variant={"outline"}
//             className="mt-4 border-primary text-primary font-semibold"
//           >
//             Read More
//           </Button>
//         </a>
//       </CardFooter>
//     </Card>
//   );
// };

// export default BlogCard;

import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BlogPost } from "@/sanity/queries/blogs";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/client";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
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
    <Link href={`/blogs/${post.slug.current}`}>
      <Card className="group h-full overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pt-0">
        {imageUrl && (
          <div className="overflow-hidden aspect-squar">
            <Image
              src={imageUrl}
              width={1200}
              height={600}
              objectFit="cover"
              alt={post.title}
              className="w-fullobject-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="space--3">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category, idx) => (
                <Badge
                  key={`${category._id}-${idx}`}
                  variant="secondary"
                  className="text-xs"
                >
                  {category.title}
                </Badge>
              ))}
            </div>
          )}
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          {post.excerpt && (
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.publishedAt || post._createdAt}>
            {formattedDate}
          </time>
        </CardFooter>
      </Card>
    </Link>
  );
}
