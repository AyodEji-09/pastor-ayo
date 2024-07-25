"use client";
import Link from "next/link";
import "./header.css";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { navLinks } from "@/utils/data";
import logo from "@/assets/images/logo/logo.png";
import marriageMininstrylogo from "@/assets/images/logo/gfgh-logo.png";
import musicMininstrylogo from "@/assets/images/logo/music-logo.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const headerRef = useRef();
  const currentRoute = usePathname();
  const MARRIAGE_URL = "/marriage-ministry";
  const MUSIC_URL = "/music-ministry";

  const handleNavItemClick = () => {
    var navBar = document.querySelector(".navbar-collapse");
    navBar.classList.remove("show");
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".navbar-collapse")) {
      var navBar = document.querySelector(".navbar-collapse");
      navBar.classList.remove("show");
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    let e, o, n;
    o = 0;
    n = document.querySelector(".header__one");
    document.body.addEventListener("scroll", function (t) {
      e = window.scrollY;
      e = t.target.scrollTop;
      o < e && e > 80
        ? (n.classList.remove("slideDown", "bg-white"),
          n.classList.add("slideUp", "bg-transparent"))
        : o > e &&
          (n.classList.remove("slideUp", "bg-transparent"),
          n.classList.add("slideDown", "bg-white")),
        (o = e);
      if (e < 80) {
        n.classList.add("slideUp", "bg-transparent");
      }
    });
  });

  return (
    <>
      <div
        style={{ zIndex: 1000 }}
        ref={headerRef}
        className="header__one shadow position-fixed w-100"
      >
        <nav className="navbar navbar-expand-lg p-1">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src={
                  currentRoute === MARRIAGE_URL
                    ? marriageMininstrylogo
                    : currentRoute === MUSIC_URL
                    ? musicMininstrylogo
                    : logo
                }
                alt="logo"
                className={currentRoute === MUSIC_URL ? "rounded" : null}
                height={
                  currentRoute === MUSIC_URL
                    ? 40
                    : currentRoute === MARRIAGE_URL
                    ? 60
                    : 55
                }
              />
            </Link>
            <button
              style={{ padding: "5px 10px" }}
              className="d-lg-none fs-2 btn btn-outline-danger d-flex justify-content-center align-items-center"
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
              <ul className="navbar-nav m-auto">
                {navLinks.map((navLink, index) => (
                  <li
                    onClick={handleNavItemClick}
                    key={navLink.title + index}
                    className={
                      navLink.dropdown
                        ? "nav-item dropdown me-3 my-1"
                        : "nav-item me-3 my-1"
                    }
                  >
                    <Link
                      href={navLink.url}
                      role={navLink.dropdown ? "button" : null}
                      data-bs-toggle={navLink.dropdown && "dropdown"}
                      aria-expanded={navLink.dropdown && "false"}
                      className={
                        currentRoute === navLink.url
                          ? "nav-link text-black active"
                          : navLink.dropdown
                          ? "nav-link dropdown-toggle text-black"
                          : "nav-link text-black"
                      }
                      aria-current="page"
                    >
                      {navLink.title}
                    </Link>
                    {navLink.dropdown && (
                      <ul className="dropdown-menu">
                        {navLink.dropdownItem.map((item) => (
                          <li key={item.url}>
                            <Link className="dropdown-item" href={item.url}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="d-flex">
                <Link
                  onClick={handleNavItemClick}
                  href="/contact"
                  className="btn btn-danger"
                >
                  Contact
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
