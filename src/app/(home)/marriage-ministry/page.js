import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import "./page.css";
import MarriageComponent from "@/components/Common/MarriageComponent";

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
          {/* <p
            className="fs-3 fw-bold text-black p-1 px-lg-5 mx-lg-5 m-1"
            style={{ lineHeight: 1.5 }}
          >
            <q>
              And the man and his wife were both naked and were not embarrassed
              or ashamed in each other`s presence. -{" "}
            </q>{" "}
            <span>Genesis 2:25 AMPC</span>
          </p> */}
        </div>

        <MarriageComponent />
      </div>
    </main>
  );
};

export default page;
