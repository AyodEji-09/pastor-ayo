import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Bookings"),
};

const page = () => {
    return (
      <main id="booking__page">
        <PageHeader page="Booking" />
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </main>
    )
  }
  
  export default page