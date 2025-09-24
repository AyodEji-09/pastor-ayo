import moment from "moment";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EventDisplay = ({ event }) => {
  return (
    <div className="accordion my-2 " id="accordionFlushExample">
      <div id={event.event_slug} className="accordion-item border-2">
        <button
          id={`flush-heading${event.event_slug}`}
          className="accordion-button collapsed d-flex align-items-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${event.event_slug}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${event.event_slug}`}
        >
          <BsFillCalendar2EventFill
            style={{ fontSize: "2.6rem" }}
            className="text-red-500"
          />
          <span className="mx-2">
            <h1 className="my-0 py-0 lead font-bold text-black texs-xl">
              {event.booking_type === "ministry"
                ? "Ministration"
                : "Counseling"}{" "}
              {/* at {event.org_name} */}
            </h1>
            <p className="text-xs my-0 py-0 text-secondary">
              {moment(event.event_date).format("Do MMM YYYY")}
            </p>
          </span>
        </button>
        <div
          id={`flush-collapse${event.event_slug}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${event.event_slug}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p
              style={{ margin: "5px 0" }}
              className="flex items-center font-normal"
            >
              <CgProfile className="mr-1" />
              {event.event_name}
            </p>
            <p
              style={{ margin: "5px 0" }}
              className="flex items-center font-normal"
            >
              <VscDebugBreakpointLogUnverified
                style={{ fontSize: "1.3rem" }}
                className="mr-1"
              />
              {event.event_nature}
            </p>
            <p
              style={{ margin: "5px 0" }}
              className="flex items-center font-normal"
            >
              <FaRegAddressCard className="mr-1" />
              {event.event_address}, {event.event_city}, {event.event_state},{" "}
              {event.event_country}.
            </p>
            <p
              style={{ margin: "5px 0" }}
              className="flex items-center font-normal"
            >
              <MdAccessTime className="mr-1" /> {event.event_time}
            </p>

            {event.event_banner && (
              <Image
                width={500}
                height={500}
                src={event.event_banner}
                alt="event banner"
              />
            )}
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default EventDisplay;
