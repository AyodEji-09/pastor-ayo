import { title } from "@/utils/metaData";
export const metadata = {
  title: title("About"),
};

const page = () => {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h2>About Page</h2>
      </div>
    </>
  );
};

export default page;
