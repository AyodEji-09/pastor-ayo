import aboutImage from "@/assets/images/aboutpage.jpg";
import Image, { StaticImageData } from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const UtilityBanner = ({
  img,
  page,
}: {
  img?: StaticImageData;
  page: string;
}) => {
  return (
    <div className="relative py-36 mb-20">
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={img ?? aboutImage}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 z-20 text-white">
        <h1 className="text-4xl font-bold">{page}</h1>
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
                {page}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default UtilityBanner;
