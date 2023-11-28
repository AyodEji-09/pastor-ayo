"use client";
import SectionHeader from "../Common/SectionHeader";
import YouTube from "react-youtube";
import { useState } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import ErrorDisplay from "../UI/ErrorDisplay";

const VideoComponent = ({ videos }) => {
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
    "5VrNUQlqPd8",
    "GxL23JkhrhA",
    "PhC1z6QeEIY",
    // "qy1SgtVYsV8",
    // "MniBCLz8oss",
    // "8Yszohoh35g",
  ];

  return (
    <section id="video__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Videos"}
          desc={"From Marriage Ministry - `Great Father Great Husband`"}
        />

        <div className="row mt-5 d-flex justify-content-center">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <div
                style={{ height: "250px" }}
                key={video.id + index + video.videoId}
                className="col-lg-4 col-md-6 mb-2 position-relative"
              >
                {loading ? (
                  <>
                    <div
                      className="spinner-border text-danger position-absolute top-50 start-50"
                      role="status"
                    ></div>
                  </>
                ) : null}
                <YouTube
                  iframeClassName={"w-100 rounded shadow"}
                  videoId={video.videoId}
                  opts={opts}
                  onReady={_onReady}
                />
              </div>
            ))
          ) : (
            <>
              <div className="col-lg-6">
                <ErrorDisplay error="No videos published" />
              </div>
            </>
          )}
        </div>
        <div className="mt-1 text-center">
          <Link className="btn btn-lg btn-danger" href="/marriage-ministry">
            View More <FaEye />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
