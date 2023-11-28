import { getAllMusics } from "@/Api/musicApi";
import AdminMusic from "@/components/Admin/AdminMusic";

export const revalidate = 1;
const page = async () => {
  const musics = await getAllMusics();
  return (
    <div className="container-fluid p-2">
      <AdminMusic musics={musics || []} />
    </div>
  );
};

export default page;
