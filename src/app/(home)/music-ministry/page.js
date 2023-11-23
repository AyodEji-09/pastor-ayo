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

    </main>
  );
};

export default page;
