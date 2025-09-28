"use client";
import { ImPointRight } from "react-icons/im";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SkeletonLoader from "@/app/components/ui/SkeletonLoader";
import EventDisplay, { BookingType } from "@/app/components/ui/EventDisplay";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import aboutImage from "@/assets/images/aboutpage.jpg";

const Events = () => {
  const route = usePathname();
  const page = route === "/events" ? true : false;

  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [loading, setLoading] = useState(false);
  const [openDate, setOpenDate] = useState(page ? true : false);
  const [location, setLocation] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), page ? 30 : 7),
      key: "selection",
    },
  ]);
  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };
  const searchMinistryBookings = async () => {
    setLoading(true);
    setBookings([]);
    const start_date = moment(state[0].startDate).format("YYYY-MM-DD");
    const end_date = moment(state[0].endDate).format("YYYY-MM-DD");
    try {
      // const res = await Api.post(`/api/bookings/search`, {
      //   start_date,
      //   end_date,
      //   location,
      // });
      setLoading(false);
      setOpenDate(false);
      // setBookings(res.data.data);
    } catch (error) {
      setLoading(false);
      setOpenDate(false);
      setBookings([]);
    }
  };
  return (
    <div>
      <div className="relative py-36 mb-20">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={aboutImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative flex flex-col items-center gap-4 z-20 text-white">
          <h1 className="text-4xl font-bold">Events</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white text-xl">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white text-xl">
                  Events
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white shadow p-1 rounded">
          <form className="grid grid-cols-3 gap-4">
            <div className="position-relative" style={{ margin: "5px 0" }}>
              <button
                type="button"
                onClick={handleOpenDate}
                className="w-full border-2 cursor-pointer p-2 border-purple-600 text-purple-600 rounded"
              >
                <span>Select Date</span>
              </button>
            </div>

            <div className="" style={{ margin: "5px 0" }}>
              <input
                type="text"
                className="border p-2 border-gray-300 rounded w-full"
                placeholder="Country, State, or City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="" style={{ margin: "5px 0" }}>
              <button
                onClick={searchMinistryBookings}
                type="button"
                disabled={loading}
                className="w-full cursor-pointer p-2 bg-purple-600 text-white rounded"
              >
                {loading && (
                  <span
                    style={{ margin: "0px 5px" }}
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {openDate && (
          <div
            className="text-center my-1 shadow"
            style={{ overflowX: "scroll", zIndex: 100 }}
          >
            <DateRangePicker
              // onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          </div>
        )}

        <div
          data-aos="fade-up"
          className="my-2 border-1 rounded shadow bg-white p-4 space-y-2"
        >
          <h2 className="font-bold text-blue-950 text-2xl">Events</h2>
          {loading && (
            <div className="text-center">
              <SkeletonLoader count={2} height={50} className={"mb-1"} />
            </div>
          )}
          {bookings.length > 0
            ? bookings.map((booking) => (
                <EventDisplay event={booking} key={booking.id} />
              ))
            : !loading && (
                <div
                  className="p-4 rounded bg-red-200 font-medium text-red-900"
                  role="alert"
                >
                  <p className="flex items-center">
                    <ImPointRight style={{ marginRight: "10px" }} /> No upcoming
                    events for the selected days and location.
                  </p>
                </div>
              )}
          {!page && (
            <>
              <hr />
              <div className="mt-2">
                <Link className="btn btn-outline-danger" href="/events">
                  View More
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
