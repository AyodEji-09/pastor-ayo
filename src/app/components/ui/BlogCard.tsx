import { Button } from "@/components/ui/button";
import Image from "next/image";
import blogImage from "@/assets/images/blog-img.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({
  title,
  author,
  date,
  description,
  img,
  url,
}: {
  title: string;
  author: string;
  date: string;
  description: string;
  img: string;
  url: string;
}) => {
  return (
    <Card className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white max-w-xs">
      <div className="rounded-lg overflow-hidden h-[200px] bg-amber-50">
        <Image
          src={img}
          alt="Blog Post 1"
          className="w-full h-48 object-cover rounded-lg mb-4"
          width={400}
          height={300}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          priority
          placeholder="blur"
          blurDataURL={img}
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardDescription>
          <small>
            {date} . {author}
          </small>
        </CardDescription>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text">{description}</p>
      </CardContent>
      <CardFooter>
        <a href={url} target="__blank" rel="noopener noreferrer">
          <Button
            variant={"outline"}
            className="mt-4 border-primary text-primary font-semibold"
          >
            Read More
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
