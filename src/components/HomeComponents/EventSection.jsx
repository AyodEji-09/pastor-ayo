"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import EventsComponent from "../Common/EventsComponent";

const EventSection = () => {
  return (
    <section id="event__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Events"}
          desc="See me at any of the following events."
        />
        <EventsComponent />
      </div>
    </section>
  );
};

export default EventSection;
