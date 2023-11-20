"use client";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { ImPointRight } from "react-icons/im";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const EventsComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-lg-8">
        <div className="form my-1 bg-white shadow-sm p-1 rounded">
          <form className="row">
            <div
              className="col-lg-4 col-6 col-md-6"
              style={{ margin: "5px 0" }}
            >
              <input
                type="text"
                className="form-control"
                id="keyword"
                placeholder="keywords"
              />
            </div>
            <div
              className="col-lg-4 col-6 col-md-6"
              style={{ margin: "5px 0" }}
            >
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
              />
            </div>
            <div
              className="col-lg-4 col-12 col-md-6"
              style={{ margin: "5px 0" }}
            >
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="my-1 text-center" style={{ overflowX: "scroll" }}>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
        {/* no event message  */}
        <hr />
        <div className="alert alert-danger p-1 my-1" role="alert">
          <p className="lead d-flex align-items-center">
            <ImPointRight style={{ marginRight: "10px" }} /> No upcoming events
            for the selected days.
          </p>
        </div>
        {/* success  */}
        {/* <div className="alert alert-success p-1 my-1" role="alert">
              <p className="fs-4 fw-bold mb-1">Well done!</p>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </div> */}
        <hr />
      </div>
    </div>
  );
};

export default EventsComponent;
