import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Music Ministry"),
};

const page = () => {
  return (
    <main id="music__page">
      <PageHeader page="Music Ministry" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </main>
  );
};

export default page;
