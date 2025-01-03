import EventsComponent from "@/components/Common/EventsComponent";
import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import { searchMinistryBookings } from "@/Api/bookingApi";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const metadata = {
  title: title("Events"),
};

const page = async () => {
  let bookings = await searchMinistryBookings();

  return (
    <main id="event__page">
      <PageHeader page="Events" />
      <div className="container my-5">
        <EventsComponent BOOKINGS={bookings}/>
      </div>
    </main>
  );
};

export default page;
