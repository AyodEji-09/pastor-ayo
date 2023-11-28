import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import MarriageComponent from "@/components/Ministry/MarriageComponent";
import banner from "@/assets/images/marriage.jpg";
import Image from "next/image";
import Api from "@/Api/api";

export const metadata = {
  title: title("Marriage Ministry"),
};
export const revalidate = 0;
export const dynamic = "force-dynamic";

const getAllVideos = async () => {
  try {
    const res = await Api.get(`/api/video`);
    return res.data.data;
  } catch (error) {
    return [];
  }
};

const page = async () => {
  const videos = await getAllVideos();
  return (
    <main id="marriage__page">
      <PageHeader page="Marriage Ministry" />
      <div className="container my-5">
        <div className="marriage__page-banner rounded shadow-sm text-center">
          <Image src={banner} alt="banner image" className="img-thumbnail" />
        </div>

        <MarriageComponent videos={videos || []} />
      </div>
    </main>
  );
};

export default page;
