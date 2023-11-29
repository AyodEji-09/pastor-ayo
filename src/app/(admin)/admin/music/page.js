import { getAllMusics } from "@/Api/musicApi";
import AdminMusic from "@/components/Admin/AdminMusic";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const page = async () => {
  const musics = await getAllMusics();
  return (
    <div className="container-fluid p-2">
      <AdminMusic musics={musics || []} />
    </div>
  );
};

export default page;
