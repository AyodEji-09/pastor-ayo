import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import "./page.css";
import MusicComponent from "@/components/Ministry/MusicComponent";
import Link from "next/link";

export const metadata = {
  title: title("Music Ministry"),
};
const page = () => {
  return (
    <main id="music__page">
      <PageHeader page="Music Ministry" />
      <div className="container my-5">
        <div className="music__page-banner rounded shadow-sm text-center">
          <h1
            style={{ fontSize: "2.5rem" }}
            className="text-dark fw-bolder p-1 px-lg-5 mx-lg-5 m-1"
          >
            Ayodeji Anifowose Music
          </h1>
        </div>

        <MusicComponent />
      </div>

      <div className="mt-5 booking_section text-center">
        <div className="pb-3 pt-1">
          <p className="lead text-light my-2 fs-4">
            Click here to request an invitation to minister in words or songs.
          </p>
          <Link
            className="btn d-inline btn-outline-light rounded-pill shadow "
            href="/booking"
          >
            Booking
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
