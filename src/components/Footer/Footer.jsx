"use client";
import Link from "next/link";
import "./footer.css";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { BsFacebook, BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "@/assets/images/logo/logo3.png";
import Image from "next/image";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="mt-5 booking_section text-center">
        <div className="pb-3 pt-1">
          <p style={{ lineHeight: 1.7 }} className="lead text-light my-2 fs-4">
            Click here to book a counseling session or request an invitation to
            minister in words or songs.
          </p>
          <Link
            className="btn d-inline btn-outline-light rounded-pill shadow "
            href="/bookings"
          >
            Book
          </Link>
        </div>
      </div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-2">
                <Image src={logo} alt="logo" height={100} />
              </div>

              <div className="col-lg-4 col-md-6 footer-links mb-2">
                <h4>Useful Links</h4>
                <div className="d-flex gap-5">
                  <ul>
                    <li>
                      <Link className="d-flex align-items-center" href="/">
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex align-items-center" href="/about">
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center"
                        href="/contact"
                      >
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center"
                        href="/bookings"
                      >
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        Booking
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        className="d-flex align-items-center"
                        href="/events"
                      >
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center"
                        href="/music-ministry"
                      >
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        Music Ministry
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-flex align-items-center"
                        href="/marriage-ministry"
                      >
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        Marriage Ministry
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex align-items-center" href="/blogs">
                        <VscDebugBreakpointLogUnverified
                          style={{ marginRight: "4px" }}
                        />{" "}
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-contact mb-2">
                <h4>Social Media</h4>
                <p className="lead">
                  <VscDebugBreakpointLogUnverified
                    style={{ marginRight: "4px" }}
                  />
                  Music Ministry
                </p>
                <div className="gap-2 d-flex mb-2">
                  <a
                    target="_blank"
                    className="shadow fs-3 text-success p-0 m-0"
                    href="https://open.spotify.com/artist/5MlFGqT2jAHgt9Zc95TImb/discography"
                  >
                    <BsSpotify />
                  </a>
                  <a
                    target="_blank"
                    className="shadow fs-3 text-danger p-0 m-0"
                    href="https://www.youtube.com/@AyodejiAnifowoseMusic"
                  >
                    <BsYoutube />
                  </a>
                </div>

                <p className="lead">
                  <VscDebugBreakpointLogUnverified
                    style={{ marginRight: "4px" }}
                  />{" "}
                  Marriage Ministry
                </p>
                <div className="gap-2 d-flex mb-2">
                  <a
                    target="_blank"
                    className="shadow fs-3 text-secondary p-0 m-0"
                    href="https://twitter.com/GFatherGHusband"
                  >
                    <RiTwitterXFill />
                  </a>
                  <a
                    target="_blank"
                    className="shadow fs-3 text-danger p-0 m-0"
                    href="https://youtube.com/@GreatFatherGreatHusband?si=-2RKXL9S2Ps9iz0i"
                  >
                    <BsYoutube />
                  </a>
                  <a
                    target="_blank"
                    style={{ color: "#4267B2" }}
                    className="shadow fs-3 p-0 m-0"
                    href="https://www.facebook.com/greatfathergreathusband?mibextid=LQQJ4d"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    target="_blank"
                    style={{ color: "#E1306C" }}
                    className="shadow fs-3 p-0 m-0"
                    href="https://instagram.com/gfather_ghusband?igshid=cDV4bDYwcTMwMXN0&utm_source=qr"
                  >
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            Copyright &copy; <span>{year} </span>{" "}
            <strong>
              <span>Ayodeji Anifowose</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed & Developed by{" "}
            <strong>
              <a href="https://abiodunsamuel.com" target="_blanck">
                {" "}
                <strong>Abiodun Digital Hub</strong>{" "}
              </a>
            </strong>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
