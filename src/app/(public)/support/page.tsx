import SupportCheckoutForm from "@/app/components/support/SupportCheckoutForm";
import aboutImage from "@/assets/images/aboutpage.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support",
};

const SupportPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative py-36 mb-20">
        <div className="absolute inset-0 overflow-hidden bg-black/50 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={aboutImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative flex flex-col items-center gap-4 z-20 text-white">
          <h1 className="text-4xl font-bold">Ways to Support</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/home" className="text-white text-xl">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white text-xl">
                  Support
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto my-16 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Love what we create? You can be a part by subscribing to share our
              stories, and help us bring more books, animations, and inspiring
              content to children everywhere. We will be grateful for your
              generous donations and partnerships.
            </p>
            <p className="text-primary font-semibold leading-relaxed">
              Every act of support helps us create, grow, and reach more young
              minds.
            </p>
          </div>

          <SupportCheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
