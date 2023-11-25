import EventsComponent from "@/components/Common/EventsComponent";
import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
export const metadata = {
  title: title("Events"),
};

const page = () => {
  return (
    <main id="event__page">
      <PageHeader page="Events" />
      <div className="container my-5">
        <EventsComponent page={true} />
      </div>
    </main>
  );
};

export default page;
