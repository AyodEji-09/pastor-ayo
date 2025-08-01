import PageHeader from "@/components/Common/PageHeader";
import GeoLocation from "@/components/Common/GeoLocation";
import { books } from "@/utils/data";
import { title } from "@/utils/metaData";
import Image from "next/image";
import Link from "next/link";
// import { cookies } from "next/headers";

const metadata = {
  title: title("Shop"),
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Page() {
  // const cookieStore = cookies();
  // const country = cookieStore.get("country")?.value || "US";

  return (
    <main id="shop__page">
      <PageHeader page="Shop" />
      <div className="container my-5">
        <div className="row">
          {books.map((book, index) => {
            const slug = slugify(book.title);
            return (
              <div
                key={book.title + index}
                className="col-lg-4 col-md-6 col-sm-6 mb-2 d-flex align-items-stretch"
              >
                <Link
                  href={`/checkout/${slug}`}
                  className="card text-decoration-none text-dark"
                >
                  <Image
                    height={450}
                    width={300}
                    src={book.img_url}
                    alt={book.title}
                    className="card-img-top"
                  />
                  <GeoLocation book={book} slug={slug} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
