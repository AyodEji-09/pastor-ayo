import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BlogComponent = () => {
  return (
    <section id="blog__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Blogs"}
          desc="Stay up to date with practical life lessons on faith, marriage and others."
        />

        <div className="row"></div>

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
