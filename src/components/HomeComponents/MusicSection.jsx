"use client";
import YouTube from "react-youtube";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import ErrorDisplay from "../UI/ErrorDisplay";
import spotify from "@/assets/images/icons/spotify.png";
import deezer from "@/assets/images/icons/deezer.png";
import googlePlay from "@/assets/images/icons/google-play.png";
import itunes from "@/assets/images/icons/itunes.png";
import appleMusic from "@/assets/images/icons/music.png";
import amazonMusic from "@/assets/images/icons/social.png";
import soundCloud from "@/assets/images/icons/soundcloud.png";
import youtube from "@/assets/images/icons/youtube.png";
import boomPlay from "@/assets/images/icons/boomplay.png";

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
          <div className="col-lg-8 mb-2 animate__animated animate__bounce">
            <div className="row d-flex justify-content-center">
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
                <div className="col-lg-6 col-md-6 mb-2 position-relative">
                  <ErrorDisplay error={"No musics published"} />
                </div>
              )}
            </div>
            <div className="my-1 text-center">
              <Link className="btn btn-lg btn-danger" href="/music-ministry">
                View More <FaEye />
              </Link>
            </div>
          </div>
          {latestTrack?.author && (
            <div className="col-lg-4 col-12 col-md-6">
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
                  {/* spotify  */}
                  {latestTrack.spotify && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-success d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={spotify}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        Spotify
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.spotify}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* youtube  */}
                  {latestTrack.youtube && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-danger d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={youtube}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        Youtube
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.youtube}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* itunes */}
                  {latestTrack.iTunes && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={itunes}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        iTunes
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.iTunes}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* soundcloud  */}
                  {latestTrack.soundCloud && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={soundCloud}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        SoundCloud
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.soundCloud}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* apple music  */}
                  {latestTrack.appleMusic && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={appleMusic}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        Apple Music
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.appleMusic}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* amazon music */}
                  {latestTrack.amazonMusic && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={amazonMusic}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        Amazon Music
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.amazonMusic}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* boomplay  */}
                  {latestTrack.boomPlay && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={boomPlay}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        BoomPlay
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.boomPlay}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* google play  */}
                  {latestTrack.googlePlay && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={googlePlay}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        GooglePlay
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.googlePlay}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
                  {/* deezer  */}
                  {latestTrack.deezer && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="text-secondary d-flex align-items-center lead my-0 py-0">
                        <Image
                          src={deezer}
                          height={28}
                          width={28}
                          alt={latestTrack.title}
                          style={{ marginRight: "3px" }}
                        />
                        Deezer
                      </p>
                      <p className="my-0 py-0">
                        <a
                          href={latestTrack.deezer}
                          target="_blank"
                          className="btn btn-sm btn-secondary rounded-pill shadow-sm"
                        >
                          Listen
                        </a>
                      </p>
                    </div>
                  )}
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
