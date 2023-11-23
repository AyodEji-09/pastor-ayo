import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import MarriageComponent from "@/components/Ministry/MarriageComponent";
import Link from "next/link";
import banner from "@/assets/images/marriage.jpg";
import Image from "next/image";

export const metadata = {
  title: title("Marriage Ministry"),
};
const page = () => {
  return (
    <main id="marriage__page">
      <PageHeader page="Marriage Ministry" />
      <div className="container my-5">
        <div className="marriage__page-banner rounded shadow-sm text-center">
          <Image src={banner} alt="banner image" className="img-thumbnail" />
        </div>

        <MarriageComponent />
      </div>

    </main>
  );
};

export default page;
