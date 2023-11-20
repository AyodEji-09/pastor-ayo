import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Contact"),
};

const page = () => {
  return (
    <main id="contact__page">
    <PageHeader page="Contact Me" />
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