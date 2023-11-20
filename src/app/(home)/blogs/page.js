import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import { blogs } from "@/utils/data";
import { FaArrowRight, FaRegUserCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import image from "@/assets/images/latest-track.jpg";



export const metadata = {
  title: title("Blogs"),
};

const page = () => {
  return (
    <main id="blog__page">
      <PageHeader page="Blogs" />
     <div className="container">
      <div className="row my-5">
      {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="card">
                <Image
                  src={image}
                  height={250}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body">
                  <div className="d-flex gap-2 mb-1">
                    <small
                      className="text-secondary d-flex align-items-center"
                      style={{ height: "10px" }}
                    >
                      <MdDateRange /> {blog.date}
                    </small>
                    <small
                      className="text-secondary d-flex align-items-center"
                      style={{ height: "10px" }}
                    >
                      <FaRegUserCircle /> {blog.author}
                    </small>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    {blog.title}
                  </h5>
                  <p className="card-text">{blog.description}</p>
                  <a href="#" className="btn btn-outline-danger">
                    Read More <FaArrowRight />
                  </a>
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
