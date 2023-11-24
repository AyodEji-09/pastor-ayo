"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { blogs } from "@/utils/data";
import { FaArrowRight, FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";

const BlogSection = () => {
  return (
    <section id="blog__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Blogs"}
          desc="Stay up to date with practical life lessons on christain faith, marriage and others."
        />

        <div className="row mt-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="card">
                <Image
                  src={blog.image_url}
                  height={250}
                  width={500}
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
                  <h5 className="card-title fw-bolder text-primary">
                    {blog.title}
                  </h5>
                  <p className="card-text">{blog.description}</p>
                  <a
                    target="_blank"
                    href={blog.url}
                    className="btn btn-outline-danger"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-1 text-center">
          <a
            target="_blank"
            className="btn btn-lg btn-danger"
            href="https://greatfathergreathusband.blogspot.com/"
          >
            See All Blogs <HiOutlineArrowNarrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
