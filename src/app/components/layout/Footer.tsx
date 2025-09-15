import Image from "next/image";
import bg from "@/assets/images/footer-bg.jpg";
import logo from "@/assets/images/logo/logo3.png";
import Link from "next/link";
import { GoDot } from "react-icons/go";
import spotify from "@/assets/images/icons/spotify.png";
import youtube from "@/assets/images/icons/youtube.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative p-8">
      <div className="absolute inset-0 bg-black/90 z-10"></div>
      <div className="absolute inset-0">
        <Image src={bg} alt="" fill className="object-cover" />
      </div>
      <div className="relative z-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 px-4">
            <div>
              <Image src={logo} alt="" className="w-3/5" />
            </div>
            <div className="grid sm:grid-cols-2 gap-16 text-white">
              <article>
                <h4 className="font-semibold text-secondary">Useful Links</h4>
                <div className="flex w-full">
                  <div className="w-1/5 h-0.5 bg-primary"></div>
                  <div className="w-4/5 h-0.5 bg-secondary"></div>
                </div>
                <div className="grid xl:grid-cols-2 gap-2 whitespace-nowrap">
                  <ul className="mt-4">
                    <LinkItem href="/" text="Home" />
                    <LinkItem href="/about" text="About Us" />
                    <LinkItem href="/contact" text="Contact Us" />
                    <LinkItem href="/bookings" text="Bookings" />
                    <LinkItem href="/" text="Birthday Celebration" />
                  </ul>
                  <ul className="mt-4">
                    <LinkItem href="/events" text="Events" />
                    <LinkItem href="/ministry/music" text="Music Ministry" />
                    <LinkItem
                      href="/ministry/marriage"
                      text="Marriage Ministry"
                    />
                    <LinkItem href="/blogs" text="Blogs" />
                  </ul>
                </div>
              </article>
              <article>
                <h4 className="font-semibold text-secondary">Usefull Links</h4>
                <div className="flex w-full">
                  <div className="w-1/5 h-0.5 bg-primary"></div>
                  <div className="w-4/5 h-0.5 bg-secondary"></div>
                </div>
                <ul className="mt-4">
                  <li className="flex items-center gap-2 my-2 text-gray-400 text-sm">
                    <GoDot />
                    Music Ministry
                  </li>
                  <li>
                    <div className="flex items-center gap-4">
                      <Image src={youtube} alt="" className="h-4 w-auto" />
                      <Image src={spotify} alt="" className="h-4 w-auto" />
                    </div>
                  </li>
                </ul>
                <ul className="mt-4">
                  <li className="flex items-center gap-2 my-2 text-gray-400 text-sm">
                    <GoDot />
                    Marriage Ministry
                  </li>
                  <li>
                    <div className="flex items-center gap-4">
                      <FaXTwitter className="h-4 w-auto" />
                      <Image src={youtube} alt="" className="h-4 w-auto" />
                      <FaFacebook className="h-4 w-auto text-blue-800" />
                      <IoLogoInstagram className="h-4 w-auto" />
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center text-sm text-gray-500 mt-12">
          <p>Copyright © 2025 Ayodeji Anifowose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LinkItem = ({ href, text }: { href: string; text: string }) => (
  <li className="flex items-center gap-2 my-2 text-gray-400 text-sm">
    <GoDot />
    <Link href={href} className="hover:text-secondary">
      {text}
    </Link>
  </li>
);
