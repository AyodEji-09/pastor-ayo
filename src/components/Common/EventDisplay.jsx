import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const EventDisplay = ({ event }) => {
  return (
    <div className="accordion my-2 accordion-flush" id="accordionFlushExample">
      <div className="accordion-item shadow-sm">
        <button
          id={`flush-heading${event.id}`}
          className="accordion-button collapsed fw-bold text-primary fs-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${event.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${event.id}`}
        >
          <VscDebugBreakpointLogUnverified /> {event.event_name}
        </button>
        <div
          id={`flush-collapse${event.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${event.id}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item accordion body.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
