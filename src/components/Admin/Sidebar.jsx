"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavLinks } from "@/utils/data";
import logo from "@/assets/images/logo/logo.png";
import Image from "next/image";

const Sidebar = ({ open }) => {
  const currentRoute = usePathname();

  return (
    <>
      {/* <!-- Sidebar Start --> */}
      <div className={open ? "sidebar shadow-sm pe-4 pb-3 open" : "sidebar pe-4 pb-3 shadow-sm"}>
        <nav className="navbar bg-light navbar-light">
          <Link href="/admin" className="navbar-brand mx-4 mb-3">
            <Image src={logo} alt="logo" width={"auto"} height={60} />
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              {/* <Image
                className="rounded-circle"
                src={logo}
                alt="logo"
                style={{ width: "40px; height: 40px;" }}
              /> */}
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Admin</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            {adminNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={
                  currentRoute === link.url
                    ? "nav-item nav-link active my-2"
                    : "nav-item nav-link my-2"
                }
              >
                <i className={link.icon}></i>
                {link.title}
              </Link>
            ))}
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="far fa-file-alt me-2"></i>Pages
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="signin.html" className="dropdown-item">
                  Sign In
                </a>
                <a href="signup.html" className="dropdown-item">
                  Sign Up
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
                <a href="blank.html" className="dropdown-item">
                  Blank Page
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
      {/* <!-- Sidebar End --> */}
    </>
  );
};

export default Sidebar;
