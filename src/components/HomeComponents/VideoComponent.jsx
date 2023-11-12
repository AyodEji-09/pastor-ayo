"use client";
import SectionHeader from "../SectionHeader";
import YouTube from "react-youtube";
import { useState } from "react";
import Link from "next/link";

const VideoComponent = () => {
  const [loading, setLoading] = useState(true);
  const opts = {
    height: "180",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    // event.target.pauseVideo();
    setLoading(false);
    console.log("ready");
  };

  const videoId = ["PhC1z6QeEIY", "qy1SgtVYsV8", "MniBCLz8oss", "8Yszohoh35g"];

  return (
    <section id="video__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Videos"}
          desc={"From Marriage Ministry - `Great Father Great Husband`"}
        />
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
                className="rounded shadow"
                onReady={_onReady}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link className="btn btn-danger" href="/marriage-ministry">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
