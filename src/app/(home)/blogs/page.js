import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Blogs"),
};

const page = () => {
    return (
      <main id="blog__page">
        <PageHeader page="Blogs" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </main>
    )
  }
  
  export default page