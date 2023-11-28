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
        className="accordion my-1 col-lg-6 col-md-6 col-12"
        id="accordionFlushExample"
      >
        <div
          className="d-flex justify-content-between align-items-center p-1 bg-danger bg-opacity-10 bg-gradient border-2 border rounded-top border-bottom-0"
          style={{ margin: "0" }}
        >
          <p className="my-0 py-0 fw-bold">
            {event.booking_type === "ministry" ? "Ministration" : "Counseling"}
          </p>
          <div className="d-flex justify-content-between gap-2 align-items-center">
            {event.booking_confirmed ? (
              <p className="text-success mb-0 pb-0">
                <FaCheckDouble />
              </p>
            ) : (
              <Button
                loading={loadingUpdate}
                type="button"
                className="btn btn-sm btn-success"
                func={() => handleUpdate(event)}
                disabled={loadingUpdate}
                text="Confirm"
              />
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
                {event.event_name || counseling(event.counseling_groups)}
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
            <div className="accordion-body">
              <p style={{ margin: "5px 0" }} className="fw-normal small">
                <CgProfile style={{ marginRight: "10px" }} />
                {event.event_name || `${event.first_name} ${event.last_name}`}
              </p>
              <p style={{ margin: "5px 0" }} className="fw-normal small">
                <VscDebugBreakpointLogUnverified
                  style={{ marginRight: "10px" }}
                />
                {event.event_nature}
              </p>
              <p style={{ margin: "5px 0" }} className="fw-normal small">
                <FaRegAddressCard style={{ marginRight: "10px" }} />
                {event.event_address}, {event.event_city}, {event.event_state},{" "}
                {event.event_country}.
              </p>
              <p style={{ margin: "5px 0" }} className="fw-normal small">
                <MdAccessTime style={{ marginRight: "10px" }} />{" "}
                {event.event_time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminEventDisplay;
