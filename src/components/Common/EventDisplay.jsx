import moment from "moment";
import { BsCalendar4Event, BsFillCalendar2EventFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const EventDisplay = ({ event }) => {
  return (
    <div className="accordion my-2 " id="accordionFlushExample">
      <div className="accordion-item border-2">
        <button
          id={`flush-heading${event.id}`}
          className="accordion-button collapsed d-flex align-items-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${event.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${event.id}`}
        >
          <BsFillCalendar2EventFill
            style={{ fontSize: "2.6rem" }}
            className="text-danger"
          />
          <span className="mx-2">
            <h1 className="my-0 py-0 lead fw-bold text-dark fs-4">
              {event.event_name}
            </h1>
            <p className="small my-0 py-0 text-secondary">
              {moment(event.event_date).format("Do MMM YYYY")}
            </p>
          </span>
        </button>
        <div
          id={`flush-collapse${event.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${event.id}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p style={{margin: '5px 0'}} className="d-flex align-items-center">
              <FaRegAddressCard className="me-1" />
              {event.event_address}, {event.event_city}, {event.event_state},{" "}
              {event.event_country}.
            </p>
            <p style={{margin: '5px 0'}} className="d-flex align-items-center">
              <MdAccessTime className="me-1" /> {event.event_time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
