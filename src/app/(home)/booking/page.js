import BookingComponent from "@/components/Common/BookingComponent";
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
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="mb-2">
              <h1 className="fw-bolder text-black">
                You can book for a counselling sesssion or an invitation to
                minister in words/songs.
              </h1>
              <p className="lead my-2">
                When completing the booking form please provide as much detail
                as possible. All requests will be responded to as soon as
                possible
              </p>
            </div>
            <BookingComponent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
