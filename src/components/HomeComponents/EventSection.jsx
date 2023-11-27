import SectionHeader from "@/components/Common/SectionHeader";
import EventsComponent from "../Common/EventsComponent";
import { searchMinistryBookings } from "@/Api/bookingApi";

const EventSection = async () => {
  let bookings = await searchMinistryBookings();

  return (
    <section id="event__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Events"}
          desc="See me at any of the following events."
        />
        <EventsComponent BOOKINGS={bookings} />
      </div>
    </section>
  );
};

export default EventSection;
