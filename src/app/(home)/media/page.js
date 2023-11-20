import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Media"),
};

const page = () => {
    return (
      <main id="media__page">
        <PageHeader page="Media" />
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