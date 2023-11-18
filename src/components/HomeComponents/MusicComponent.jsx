"use client";
import YouTube from "react-youtube";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import latestTrack from "@/assets/images/latest-track.jpg";
import Image from "next/image";

const MusicComponent = () => {
  const [loading, setLoading] = useState(true);
  const opts = {
    height: "250",
    frameborder: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = () => {
    setLoading(false);
  };
  const videoId = [
    // "pn03QzHY_bE",
    // "NwpN3V6QnTY",
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
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-lg-8 mb-2">
            <div className="row">
              {videoId.map((id) => (
                <div key={id} className="col-lg-6 col-md-6 mb-2">
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
            <div className="my-1">
              <Link className="btn btn-danger" href="/music-ministry">
                View More <FaEye />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6">
            <div className="card bg-white rounded shadow-sm">
              <Image
                src={latestTrack}
                className="card-img-top"
                height={400}
                width={"auto"}
                alt="latest track"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ margin: "4px 0" }}>
                  I`ll Praise you Lord
                </h5>
                <p className="card-text m-0 p-0 small text-secondary">
                  By Ayodeji Anifowose
                </p>
                <hr />
                <div className="d-flex justify-content-between align-items-center my-1">
                  <p className=" my-0 py-0">
                    <span
                      className="text-success fs-3"
                      style={{ marginRight: "3px" }}
                    >
                      <BsSpotify />
                    </span>
                    <span className="text-success fs-4">Spotify</span>
                  </p>
                  <p className="my-0 py-0">
                    <a
                      href="https://open.spotify.com/track/5b44HsxpPnfTrSAL9K9cQO?si=929baa62b74f4528"
                      target="_blank"
                      className="btn btn-secondary rounded-pill shadow-sm"
                    >
                      Listen
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center my-1">
                  <p className="my-0 py-0">
                    <span
                      className="text-danger fs-3"
                      style={{ marginRight: "3px" }}
                    >
                      <BsYoutube />
                    </span>
                    <span className="text-secondary fs-4">YouTube</span>
                  </p>
                  <p className="my-0 py-0">
                    <a
                      target="_blank"
                      href="https://youtu.be/pn03QzHY_bE?si=24x5x2sa6soDSwFl"
                      className="btn btn-secondary rounded-pill shadow-sm"
                    >
                      Listen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicComponent;
