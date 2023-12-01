"use client";
import moment from "moment";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { FaCheckDouble, FaRegAddressCard } from "react-icons/fa";
import { MdAccessTime, MdDelete } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../UI/Button";
import { deleteBookings, updateBookings } from "@/Api/bookingApi";
import toast, { Toaster } from "react-hot-toast";
import { counseling } from "@/utils/data";
import Image from "next/image";

const AdminEventDisplay = ({ event }) => {
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const searchParams = useSearchParams();
  const open = searchParams.get("open");
  const router = useRouter();

  const handleUpdate = async (event) => {
    setLoadingUpdate(true);
    const res = await updateBookings(event);
    setLoadingUpdate(false);
    if (res.status == 201) {
      router.refresh();
      toast.success("Booking details has been confirmed", {
        duration: 5000,
      });
    } else {
      toast.error("Error, unable to update booking details", {
        duration: 5000,
      });
    }
  };
  const handleDelete = async (id) => {
    setLoading(true);
    const res = await deleteBookings(id);
    setLoading(false);
    if (res.status == 200) {
      router.refresh();
      toast.success("Booking details has been deleted", {
        duration: 5000,
      });
    } else {
      toast.error("Error, unable to delete booking details", {
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Toaster />
      <div
        key={event.event_slug}
        className="accordion col-lg-6 col-md-6 col-12"
        id="accordionFlushExample"
      >
        <div
          className="d-flex justify-content-between align-items-center px-1 bg-light bg-opacity-0 bg-gradient border-2 border rounded-top border-bottom-0"
          style={{ margin: "0", padding: "10px 0" }}
        >
          {event.booking_confirmed ? (
            <p className="text-success mb-0 pb-0">
              <FaCheckDouble />
            </p>
          ) : (
            <Button
              loading={loadingUpdate}
              type="button"
              className="btn btn-outline-success btn-sm d-flex justify-content-center align-items-center"
              func={() => handleUpdate(event)}
              disabled={loadingUpdate}
              text="Confirm"
            >
              <FaCheckDouble />
            </Button>
          )}
          <Button
            loading={loading}
            type="submit"
            className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center"
            style={{ padding: "5px" }}
            func={() => handleDelete(event.id)}
            disabled={loading}
          >
            <MdDelete />
          </Button>
        </div>
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
              className="text-danger"
            />
            <span className="mx-2">
              <h1 className="my-0 py-0 lead fw-bold text-dark fs-5">
                {event.booking_type === "ministry"
                  ? "Ministration"
                  : "Counseling"}
              </h1>
              <p className="small my-0 py-0 text-secondary">
                {moment(event.event_date).format("Do MMM YYYY")}
              </p>
            </span>
          </button>
          <div
            id={`flush-collapse${event.event_slug}`}
            className={
              event.event_slug === open
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
            aria-labelledby={`flush-heading${event.event_slug}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{ maxHeight: "500px", overflowY: "auto" }}
              className="accordion-body"
            >
              {event.booking_type === "counseling" && (
                <>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Name: </b>
                    <span>
                      {event.first_name} {event.last_name}
                    </span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Email: </b>
                    <a href={`mailto:${event.personal_email}`}>
                      {event.personal_email}
                    </a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Phone: </b>
                    <a href={`tel:${event.personal_phone}`}>
                      {event.personal_phone}
                    </a>
                  </p>
                  <hr />
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Date: </b>
                    <span>
                      {moment(event.event_date).format("Do MMM YYYY")}
                    </span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Time: </b>
                    <span>{event.event_time}</span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Counseling Groups: </b>
                    <span>{counseling(event.counseling_groups)}</span>
                  </p>
                </>
              )}
              {event.booking_type === "ministry" && (
                <>
                  <p className="small text-primary fw-bold">
                    Personal Information
                  </p>

                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Name: </b>
                    <span>
                      {event.first_name} {event.last_name}
                    </span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Email: </b>
                    <a href={`mailto:${event.personal_email}`}>
                      {event.personal_email}
                    </a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Phone: </b>
                    <a href={`tel:${event.personal_phone}`}>
                      {event.personal_phone}
                    </a>
                  </p>
                  <hr />
                  <p className="small text-primary fw-bold">
                    Organization Details
                  </p>

                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>
                      Name of Church/Organization:{" "}
                    </b>
                    <span>{event.org_name}</span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>
                      Email of Church/Organization:{" "}
                    </b>
                    <a href={`mailto:${event.org_email}`}>{event.org_email}</a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>
                      Phone Number of Church/Organization:{" "}
                    </b>
                    <a href={`tel:${event.org_phone}`}>{event.org_phone}</a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Website: </b>
                    <a target="_blank" href={event.org_website}>
                      {event.org_website}
                    </a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Facebook Page: </b>
                    <a target="_blank" href={event.org_facebook}>
                      {event.org_facebook}
                    </a>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>YouTube Page: </b>
                    <a target="_blank" href={event.org_youtube}>
                      {event.org_youtube}
                    </a>
                  </p>
                  <hr />
                  <p className="small text-primary fw-bold">Event Details</p>

                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Event Name/Theme: </b>
                    <span>{event.event_name}</span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Nature of Event: </b>
                    <span>{event.event_name}</span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Event Address: </b>
                    <span>
                      {event.event_address} {event.event_city}
                      {event.event_state} {event.event_country}
                    </span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Event Time: </b>
                    <span>{event.event_time}</span>
                  </p>
                  <p style={{ margin: "5px 0" }} className="fw-normal small">
                    <b style={{ marginRight: "10px" }}>Event Date: </b>
                    <span>
                      {moment(event.event_date).format("Do MMM YYYY")}
                    </span>
                  </p>
                  <hr />
                  <p className="small text-primary fw-bold">
                    Additional Information
                  </p>

                  {/* <ul> */}
                  <p className="fw-normal small">
                    <b>
                      Is this a personal program or a program organised by the
                      Church body?
                    </b>
                  </p>
                  <ul className="fw-normal small">
                    <li>{event.prog_type}</li>
                  </ul>
                  <p className="fw-normal small">
                    <b>
                      Who are the other ministers ministering at your program?
                    </b>
                  </p>
                  <ul className="fw-normal small">
                    <li style={{ marginTop: "5px" }}>{event.ministers_list}</li>
                  </ul>
                  <p className="fw-normal small">
                    <b>Will it be a ticket (paid) entry event?</b>
                  </p>
                  <ul className="fw-normal small">
                    <li style={{ marginTop: "5px" }}>{event.ticket}</li>
                  </ul>

                  <p className="fw-normal small">
                    <b>
                      What is the Capacity of the venue where your event is
                      scheduled to hold?
                    </b>
                  </p>
                  <ul className="fw-normal small">
                    <li style={{ marginTop: "5px" }}>{event.venue_capacity}</li>
                  </ul>

                  <p className="fw-normal small">
                    <b>
                      Pastor Ayodeji Anifowose`s Team usually requests a video
                      and audio recording of his ministration. Will, there be a
                      recording of the event available for Ayodeji Anifowose`s
                      media team?
                    </b>
                  </p>
                  <ul className="fw-normal small">
                    <li style={{ marginTop: "5px" }}>
                      {event.recording_available}
                    </li>
                  </ul>

                  <p className="fw-normal small">
                    <b>Additional information about the event</b>
                  </p>
                  <ul className="fw-normal small">
                    <li style={{ marginTop: "5px" }}>
                      {event.additional_info}
                    </li>
                  </ul>
                  <hr />
                  {event.event_banner && (
                    <Image
                      width={500}
                      height={500}
                      src={event.event_banner}
                      alt="event banner"
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminEventDisplay;
