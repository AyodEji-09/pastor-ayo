"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo/logo.png";

const Header = ({ setOpen }) => {
  const toggleSidebar = () => {
    setOpen((prev) => {
      return prev ? false : true;
    });
  };
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand bg-white shadow-sm navbar-light sticky-top px-4 py-1">
        <Link href="/admin" className="navbar-brand d-flex d-lg-none me-4">
          <Image src={logo} alt="logo" width={"auto"} height={50} />
        </Link>

        <a
          onClick={toggleSidebar}
          href="#"
          className="sidebar-toggler flex-shrink-0"
        >
          {""}
          <i className="fa fa-bars"></i>
        </a>

        <Link href="/" className="mx-2 flex-shrink-0">
          Home
        </Link>
        {/* <form className="d-none d-md-flex ms-4">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search"
              />
            </form> */}
        {/* <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-envelope me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="img/user.jpg"
                        alt=""
                        // style="width: 40px; height: 40px;"
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="img/user.jpg"
                        alt=""
                        // style="width: 40px; height: 40px;"
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="img/user.jpg"
                        alt=""
                        // style="width: 40px; height: 40px;"
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all message
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-bell me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Notificatin</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Profile updated</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">New user added</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Password changed</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all notifications
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded-circle me-lg-2"
                    src="img/user.jpg"
                    alt=""
                    // style="width: 40px; height: 40px;"
                  />
                  <span className="d-none d-lg-inline-flex">John Doe</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    Log Out
                  </a>
                </div>
              </div>
            </div> */}
      </nav>
    </>
  );
};

export default Header;
