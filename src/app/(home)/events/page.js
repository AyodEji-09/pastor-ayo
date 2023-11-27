import EventsComponent from "@/components/Common/EventsComponent";
import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import Api from "@/Api/api";
import { addDays } from "date-fns";
import moment from "moment";

export const metadata = {
  title: title("Events"),
};

const page = async () => {
  const searchMinistryBookings = async () => {
    let start_date = moment(new Date()).format("YYYY-MM-DD");
    let end_date = moment(addDays(new Date(), 30)).format("YYYY-MM-DD");
    try {
      const res = await Api.post(`/api/booking/search`, {
        start_date,
        end_date,
        location: "",
      });
      return res.data.data;
    } catch (error) {
      return [];
    }
  };

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
