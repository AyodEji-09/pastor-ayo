import PageHeader from "@/components/Common/PageHeader";
import { title } from "@/utils/metaData";
import "./page.css";
import MusicComponent from "@/components/Ministry/MusicComponent";
import Link from "next/link";
import Api from "@/Api/api";

export const metadata = {
  title: title("Music Ministry"),
};

const getAllMusics = async () => {
  try {
    const res = await Api.get(`/api/music`);
    return res.data.data;
  } catch (error) {
    return [];
  }
};

const page = async () => {
  const musics = await getAllMusics();
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

        <MusicComponent musics={musics || []} />
      </div>
    </main>
  );
};

export default page;
