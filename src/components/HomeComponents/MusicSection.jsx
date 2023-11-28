"use client";
import YouTube from "react-youtube";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import ErrorDisplay from "../UI/ErrorDisplay";

const MusicComponent = ({ musics, latestTrack }) => {
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

  return (
    <section id="music__section" className="section">
      <div className="container">
        <SectionHeader
          header={"Music"}
          desc="Get all my albums and singles on Spotify and Youtube."
        />
        <div className="gap-2 d-flex justify-content-center">
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
              {musics.length > 0 ? (
                musics.map((music, index) => (
                  <div
                    style={{ height: "250px" }}
                    key={music.videoId + index + music.id}
                    className="col-lg-6 col-md-6 mb-2 position-relative"
                  >
                    {loading ? (
                      <div
                        className="spinner-border text-danger position-absolute top-50 start-50"
                        role="status"
                      ></div>
                    ) : null}
                    <YouTube
                      iframeClassName={"w-100 rounded shadow"}
                      videoId={music.videoId}
                      opts={opts}
                      onReady={_onReady}
                    />
                  </div>
                ))
              ) : (
                <ErrorDisplay error={"No musics published"} />
              )}
            </div>
            <div className="my-1 text-center">
              <Link className="btn btn-lg btn-danger" href="/music-ministry">
                View More <FaEye />
              </Link>
            </div>
          </div>
          {latestTrack?.author && (
            <div className="col-lg-3 col-12 col-md-6">
              <div className="card bg-white rounded shadow-sm">
                <Image
                  src={latestTrack.banner}
                  className="card-img-top"
                  height={400}
                  width={500}
                  alt={latestTrack.title}
                />
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    style={{ margin: "4px 0" }}
                  >
                    {latestTrack.title}
                  </h5>
                  <p className="card-text m-0 p-0 small text-secondary">
                    By {latestTrack.author}
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
                        href={latestTrack.spotify}
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
                        href={latestTrack.youtube}
                        className="btn btn-secondary rounded-pill shadow-sm"
                      >
                        Listen
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MusicComponent;
