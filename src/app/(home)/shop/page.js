import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Shop"),
};
const page = () => {
    return (
      <main id="shop__page">
        <PageHeader page="Shop" />
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