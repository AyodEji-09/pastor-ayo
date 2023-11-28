import AdminVideo from "@/components/Admin/AdminVideo";
import { getAllVideos } from "@/Api/videoApi";
const page = async () => {
  const videos = await getAllVideos();
  return (
    <div className="container-fluid p-2">
      <AdminVideo videos={videos}/>
    </div>
  );
};

export default page;
