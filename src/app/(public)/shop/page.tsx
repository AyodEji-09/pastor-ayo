import BookCard from "@/app/components/ui/BookCard";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { books } from "@/lib/data";
import { slugify } from "@/lib/utils";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import BundlesCarousel from "@/app/components/BundlesCarousel";

const metadata = {
  title: "Shop",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default function Page() {
  // const cookieStore = cookies();
  // const country = cookieStore.get("country")?.value || "US";

  return (
    <main>
      <Content style={{ padding: "16px 48px" }}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Bookshop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Content>

      {/* Top banner ad for the shop page */}
      <div className="container mx-auto px-4 my-6">
        <AdPlaceholder variant="banner" className="mx-auto">
          <BundlesCarousel />
        </AdPlaceholder>
      </div>

      <div className="container mx-auto px-4 my-5">
        <div className="grid md:grid-cols-3 gap-4">
          {books.map((book, index) => {
            const slug = slugify(book.title);
            return <BookCard key={index} book={book} slug={slug} />;
          })}
        </div>
      </div>
    </main>
  );
}
