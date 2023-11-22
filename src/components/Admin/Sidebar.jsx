"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavLinks } from "@/utils/data";
import logo from "@/assets/images/logo/logo.png";
import Image from "next/image";

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        {/* <a href="#" className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" className={""} height={40} />
          </Link>
          <div className="logo-name">
            <Link href="/">
              <Image src={logo} alt="logo" className={""} height={40} />
            </Link>
          </div>
        </a> */}
        <ul className="side-menu">
          {adminNavLinks.map((link) => (
            <li
              key={link.title}
              className={currentRoute === link.url ? "active" : null}
            >
              <Link href={link.url}>
                <i className={link.icon}></i>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className="bx bx-log-out-circle"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};

export default Sidebar;
