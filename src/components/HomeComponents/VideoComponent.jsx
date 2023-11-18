"use client";
import SectionHeader from "../Common/SectionHeader";
import YouTube from "react-youtube";
import { useState } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const VideoComponent = () => {
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
    "5VrNUQlqPd8",
    "GxL23JkhrhA",
    "PhC1z6QeEIY",
    "qy1SgtVYsV8",
    "MniBCLz8oss",
    "8Yszohoh35g",
  ];

  return (
    <section id="video__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Videos"}
          desc={"From Marriage Ministry - `Great Father Great Husband`"}
        />
        <div className="row mt-5">
          {videoId.map((id) => (
            <div key={id} className="col-lg-4 col-md-6 mb-2">
              {loading ? (
                <>
                  <div
                    className="spinner-border text-danger text-center"
                    role="status"
                  ></div>
                </>
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
          <Link className="btn btn-danger" href="/marriage-ministry">
            View More <FaEye />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
