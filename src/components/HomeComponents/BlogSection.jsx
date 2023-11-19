import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { blogs } from "@/utils/data";

const BlogComponent = () => {
  return (
    <section id="blog__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Blogs"}
          desc="Stay up to date with practical life lessons on christain faith, marriage and others."
        />

        <div className="row mt-5">
          {blogs.map((blog) => (
            <div key={blog.id} class="col-lg-4 col-md-6">
              <div class="card">
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-1 text-center">
          <Link className="btn btn-lg btn-danger" href="/blogs">
            Read More <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
