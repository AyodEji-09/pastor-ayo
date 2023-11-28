import { getAllBookings } from "@/Api/bookingApi";
import AdminEventDisplay from "@/components/Admin/AdminEventDisplay";

export const revalidate = 0;
export const dynamic = "force-dynamic";
const page = async () => {
  const events = await getAllBookings();
  return (
    <div className="container-fluid">
      <div className="row my-1 p-2">
        {events.length > 0 ? (
          events.map((event) => (
            <AdminEventDisplay key={event.id} event={event} />
          ))
        ) : (
          <div
            className="alert alert-danger fade show p-1 d-flex align-items-center"
            role="alert"
          >
            <p className="my-0 py-0">No bookings yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
