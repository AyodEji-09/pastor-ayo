"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./header.css";
import { useEffect, useRef } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
      icon: "",
    },
    {
      title: "About",
      url: "/about",
      icon: "",
    },
    {
      title: "Media",
      url: "/media",
      icon: "",
    },
    {
      title: "Events",
      url: "/events",
      icon: "",
    },
    {
      title: "Merchandise",
      url: "/merchandise",
      icon: "",
    },
    {
      title: "Booking",
      url: "/booking",
      icon: "",
    },
    {
      title: "Blog",
      url: "/blog",
      icon: "",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "",
    },
  ];

  const headerRef = useRef();
  useEffect(() => {
    let yAxis, top, header;
    top = 0;
    header = headerRef.current;
    window.addEventListener("scroll", function (t) {
      yAxis = window.scrollY;
      top < yAxis && yAxis > 80
        ? (header.classList.remove("slideDown"),
          header.classList.add("slideUp"))
        : top > yAxis &&
          (header.classList.remove("slideUp"),
          header.classList.add("slideDown")),
        (top = yAxis);
    });
  });

  return (
    <>
      <div ref={headerRef} className="fixed-top bg-white shadow header__one">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link href="/" className="navbar-brand" >
              Navbar
            </Link>
            <button
              style={{ padding: "8px 12px !important" }}
              className="d-lg-none btn btn-outline-primary d-flex justify-content-center align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <HiMenuAlt1 />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto ">
                {navLinks.map((navLink) => (
                  <li key={navLink} className="nav-item me-3 my-1">
                    <Link href={navLink.url} className="nav-Link active" aria-current="page" >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="d-flex">
                <Link href="" className="btn btn-outline-primary" >
                  Led to Give
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
