"use client";
import EventDisplay from "../Common/EventDisplay";
import { ImPointRight } from "react-icons/im";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Api from "@/Api/api";
import moment from "moment";

const EventsComponent = ({ page }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [location, setLocation] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };
  const searchMinistryBookings = async () => {
    setLoading(true);
    let start_date = moment(state[0].startDate).format("YYYY-MM-DD");
    let end_date = moment(state[0].endDate).format("YYYY-MM-DD");
    try {
      const res = await Api.post(`/api/booking/search`, {
        start_date,
        end_date,
        location,
      });
      setLoading(false);
      setBookings(res.data.data.splice(0, 3));
    } catch (error) {
      setLoading(false);
      setBookings([]);
    }
  };

  useEffect(() => {
    searchMinistryBookings();
  }, []);

  return (
    <div className="row mt-5 d-flex justify-content-center">
    <div className="col-lg-8">
      <div className="form mb-1 bg-white shadow-sm p-1 rounded">
        <form className="row">
          <div
            className="col-lg-4 col-6 col-md-6 position-relative"
            style={{ margin: "5px 0" }}
          >
            <button
              type="button"
              onClick={handleOpenDate}
              className="btn w-100 btn-outline-primary"
            >
              Select Date
            </button>
          </div>

          <div
            className="col-lg-4 col-6 col-md-6"
            style={{ margin: "5px 0" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Country, State, or City"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div
            className="col-lg-4 col-12 col-md-12"
            style={{ margin: "5px 0" }}
          >
            <button
              onClick={searchMinistryBookings}
              type="button"
              disabled={loading}
              className="btn btn-primary w-100"
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
        <div className="my-2 text-center" style={{ overflowX: "auto" }}>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
      )}

      {/* no event message  */}
      <hr />
      <h2 className="fw-bolder fw-3">Events</h2>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <EventDisplay event={booking} key={booking.id} />
        ))
      ) : (
        <div className="alert alert-danger p-1 my-1" role="alert">
          <p className="lead d-flex align-items-center">
            <ImPointRight style={{ marginRight: "10px" }} /> No upcoming
            events for the selected days and location.
          </p>
        </div>
      )}
    </div>
  </div>
  );
};

export default EventsComponent;
