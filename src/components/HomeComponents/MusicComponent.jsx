"use client";
import YouTube from "react-youtube";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";

const MusicComponent = () => {
  const [loading, setLoading] = useState(true);
  const opts = {
    height: "180",
    width: "320",
    frameborder: "0",
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
    setLoading(false);
  };
  const videoId = ["pn03QzHY_bE", "NwpN3V6QnTY", "tpHcPihf2Yg", "6MpCcYBQKqU"];
  return (
    <section id="music__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Music"}
          desc={"Get all albums and singles on Spotify and Youtube."}
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
            <div key={id} className="col-lg-3 col-md-6 mb-2">
              {loading ? (
                <>
                  <div
                    class="spinner-border text-danger text-center"
                    role="status"
                  ></div>
                </>
              ) : null}
              <YouTube
                videoId={id}
                opts={opts}
                className="rounded shadow-sm"
                onReady={_onReady}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link className="btn btn-danger" href="/music-ministry">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MusicComponent;
