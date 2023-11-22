import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import "./page.css";
import MarriageComponent from "@/components/Ministry/MarriageComponent";
import Link from "next/link";

export const metadata = {
  title: title("Marriage Ministry"),
};
const page = () => {
  return (
    <main id="marriage__page">
      <PageHeader page="Marriage Ministry" />
      <div className="container my-5">
        <div className="marriage__page-banner rounded shadow-sm text-center">
          <h1
            style={{ fontSize: "2.5rem" }}
            className="text-danger fw-bolder p-1 px-lg-5 mx-lg-5 m-1"
          >
            Great Father, Great Husband
          </h1>
        </div>

        <MarriageComponent />
      </div>

      <div className="mt-5 booking_section text-center">
        <div className="pb-3 pt-1">
          <p className="lead text-light my-2 fs-4">
            Click here to book a counseling session
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
