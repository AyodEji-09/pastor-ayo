import BookingComponent from "@/app/components/ui/BookingComponent";
import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import aboutImage from "@/assets/images/aboutpage.jpg";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import BundlesCarousel from "@/app/components/BundlesCarousel";

export const metadata: Metadata = {
  title: "Booking",
};

const Bookings = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative py-36 mb-20">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={aboutImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative flex flex-col items-center gap-4 z-20 text-white">
          <h1 className="text-4xl font-bold">Booking</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white text-xl">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white text-xl">
                  Booking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-2">
            <h1 className="font-bold text-black">
              You can book for a counseling session or an invitation to minister
              in words/songs.
            </h1>
            <p className="lead my-2 text-gray-500">
              When completing the booking form please provide as much detail as
              possible. All requests will be responded to as soon as possible.
            </p>
          </div>

          {/* Ad placeholder inserted above the booking form */}
          <div className="my-6 flex justify-center">
            <AdPlaceholder variant="box" className="my-6">
              <BundlesCarousel />
            </AdPlaceholder>
          </div>

          <BookingComponent />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
