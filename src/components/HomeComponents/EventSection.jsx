"use client";
import { addDays } from "date-fns";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const EventComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <section id="event__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Events"}
          desc="See me at any of the following events."
        />

        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="form my-1 bg-white shadow-sm p-1 rounded">
              <form class="row">
                <div class="col-lg-4 col-6 col-md-6" style={{margin: '5px 0'}}>
                  <input
                    type="text"
                    class="form-control"
                    id="keyword"
                    placeholder="keywords"
                  />
                </div>
                <div class="col-lg-4 col-6 col-md-6" style={{margin: '5px 0'}}>
                  <input
                    type="text"
                    class="form-control"
                    id="location"
                    placeholder="Location"
                  />
                </div>
                <div class="col-lg-4 col-12 col-md-6" style={{margin: '5px 0'}}>
                  <button type="submit" class="btn btn-primary w-100">
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
            <div class="alert alert-danger p-1 my-1" role="alert">
              <p className="lead d-flex align-items-center">
                <ImPointRight style={{ marginRight: "10px" }} /> No upcoming
                events for the selected days.
              </p>
            </div>
            {/* success  */}
            {/* <div class="alert alert-success p-1 my-1" role="alert">
              <p className="fs-4 fw-bold mb-1">Well done!</p>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </div> */}
            <hr />
          </div>
        </div>

        <div className="my-1 text-center">
          <Link className="btn btn-lg btn-danger" href="/events">
            View More <FaEye />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventComponent;
