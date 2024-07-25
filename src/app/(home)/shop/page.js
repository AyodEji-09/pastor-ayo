import PageHeader from "@/components/Common/PageHeader";
import GeoLocation from "@/components/Common/GeoLocation";
import { books } from "@/utils/data";
import { title } from "@/utils/metaData";
import Image from "next/image";

export const metadata = {
  title: title("Shop"),
};
export const revalidate = 0;
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <main id="shop__page">
      <PageHeader page="Shop" />
      <div className="container my-5">
        <div className="row">
          {books.map((book, index) => (
            <div
              key={book.title + index}
              className="col-lg-4 col-md-6 col-sm-6 mb-2 d-flex align-items-stretch"
            >
              <div className="card">
                <Image
                  height={450}
                  width={300}
                  src={book.img_url}
                  alt={book.title}
                />
                <GeoLocation book={book} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
