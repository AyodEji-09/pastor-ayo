"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { books } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BookCard = ({
  book,
  slug,
}: {
  book: (typeof books)[0];
  slug: string;
}) => {
  const router = useRouter();

  return (
    <Card className="w-full max-w-sm pt-0 overflow-hidden">
      <div className="h-[250px] overflow-hidden">
        <Image
          src={
            book.img
              ? `/book-covers/${book.img}`
              : book.img_url || "/book-covers/fallback-image.jpg"
          }
          alt=""
          width={311}
          height={426}
          className="w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardDescription>
          <small>{book.dop}</small>
        </CardDescription>
        <CardTitle>{book.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="card-text">{book.description.substring(0, 100)}...</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => router.push(`/checkout/${slug}`)}>
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
