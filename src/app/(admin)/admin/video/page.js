import AdminVideo from "@/components/Admin/AdminVideo";
import { getAllVideos } from "@/Api/videoApi";

export const revalidate = 0;
export const dynamic = "force-dynamic";
const page = async () => {
  const videos = await getAllVideos();
  return (
    <div className="container-fluid">
      <AdminVideo videos={videos || []} />
    </div>
  );
};

export default page;
