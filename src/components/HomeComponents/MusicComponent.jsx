"use client";
import YouTube from "react-youtube";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const MusicComponent = () => {
  const [loading, setLoading] = useState(true);
  const opts = {
    height: "270",
    frameborder: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = () => {
    setLoading(false);
  };
  const videoId = [
    "pn03QzHY_bE",
    "NwpN3V6QnTY",
    "SY1tzBPa-vI",
    "tpHcPihf2Yg",
    "HH0K_eozE14",
    "6MpCcYBQKqU",
  ];
  return (
    <section id="music__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Music"}
          desc="Get all my albums and singles on Spotify and Youtube."
        />
        <div className="gap-2 d-flex">
          <a
            target="_blank"
            style={{ padding: "5px 10px" }}
            className="btn btn-outline-success fs-2"
            href="https://open.spotify.com/artist/5MlFGqT2jAHgt9Zc95TImb/discography"
          >
            <BsSpotify />
          </a>
          <a
            target="_blank"
            style={{ padding: "5px 10px" }}
            className="btn btn-outline-danger fs-2"
            href="https://www.youtube.com/@AyodejiAnifowoseMusic"
          >
            <BsYoutube />
          </a>
        </div>
        <div className="row mt-5">
          {videoId.map((id) => (
            <div key={id} className="col-lg-4 col-md-6 mb-2">
              {loading ? (
                <div
                  className="spinner-border text-danger text-center"
                  role="status"
                ></div>
              ) : null}
              <YouTube
                iframeClassName={"w-100 rounded shadow"}
                videoId={id}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link className="btn btn-danger" href="/music-ministry">
            View More <FaEye />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MusicComponent;
