import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Marriage Ministry"),
};
const page = () => {
  return (
    <main id="marriage__page">
    <PageHeader page="Marriage Ministry" />
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
