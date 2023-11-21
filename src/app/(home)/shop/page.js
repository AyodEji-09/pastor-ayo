import PageHeader from "@/components/Common/PageHeader";
import { books } from "@/utils/data";
import { title } from "@/utils/metaData";
import Image from "next/image";
export const metadata = {
  title: title("Shop"),
};
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
                <div className="card-body">
                  <small>{book.dop}</small>
                  <a href={book.url} target="_blank">
                    <h5 className="card-title text-primary fw-bold">
                      {book.title}
                    </h5>
                  </a>
                  <p className="card-text">
                    {book.description.substring(0, 100)}...
                  </p>
                  <div className="d-flex gap-1 flex-wrap">
                    <span>Formats: </span>
                    {book?.format?.map((format, index) => (
                      <a key={index} target="_blank" href={format.url}>
                        {format.type}
                      </a>
                    ))}
                  </div>
                  <hr />
                  <div className="d-flex gap-1 flex-wrap">
                    <span>Pages: </span>
                    <em className="fst-italic">{book.pages}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
