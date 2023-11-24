import AdminVideo from "@/components/Admin/AdminVideo";
import { db } from "@/lib/db";

const page = async () => {
  const result = await db.query.users.findMany();
  console.log({ result });

  return (
    <div className="container-fluid p-2">
      <AdminVideo />
    </div>
  );
};

export default page;
