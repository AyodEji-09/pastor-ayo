"use client";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import YouTube from "react-youtube";
import SectionHeader from "../Common/SectionHeader";
import ErrorDisplay from "../UI/ErrorDisplay";

const MusicComponent = ({ musics }) => {
  const [loading, setLoading] = useState(true);
  const opts = {
    height: 360,
    frameborder: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  const opts2 = {
    height: 250,
    frameborder: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = () => {
    setLoading(false);
  };

  const introVideo = "pn03QzHY_bE";
  const videoId = [
    "pn03QzHY_bE",
    "NwpN3V6QnTY",
    "SY1tzBPa-vI",
    "tpHcPihf2Yg",
    "HH0K_eozE14",
    "6MpCcYBQKqU",
  ];

  return (
    <>
      <div className="row my-5 d-flex justify-content-center">
        <div className="col-lg-5 col-md-6 my-1 position-relative">
          <div style={{ height: "360px" }}>
            {loading ? (
              <>
                <div
                  className="spinner-border text-danger text-center position-absolute top-50 start-50"
                  role="status"
                ></div>
              </>
            ) : null}
            <YouTube
              iframeClassName={"w-100 rounded shadow"}
              videoId={introVideo}
              opts={opts}
              onReady={_onReady}
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-6 my-1 d-flex align-items-center">
          <div className="p-2 bg-white rounded shadow-sm">
            <p className="lead">
              <span>
                <FaQuoteLeft style={{ color: "#9c0404" }} />
              </span>
              <span className="mx-1" style={{ lineHeight: 2 }}>
                Welcome to my music ministry page where you enjoy soul lifting
                and anointed sounds God has given unto me. I believe as you
                watch and listen, your life will experience transformation.
              </span>
              <span>
                <FaQuoteRight style={{ color: "#9c0404" }} />
              </span>
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-lg-2 gap-1">
              {/* youtube  */}
              <a
                style={{ padding: "5px" }}
                title="Youtube"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://www.youtube.com/@AyodejiAnifowoseMusic"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 256 180"
                  >
                    <path
                      fill="red"
                      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                    />
                    <path
                      fill="#FFF"
                      d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                    />
                  </svg>
                </i>
              </a>
              {/* spotify  */}
              <a
                style={{ padding: "5px" }}
                title="Spotify"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://open.spotify.com/artist/5MlFGqT2jAHgt9Zc95TImb/discography
                "
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 256 256"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="256"
                      height="256"
                      fill="none"
                      stroke="none"
                    />
                    <path
                      fill="#1ED760"
                      d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SectionHeader
        header={"Music Gallery"}
        desc={"Collection of music videos."}
      />
      <div className="row my-5">
        {musics.length > 0 ? (
          musics.map((music, index) => (
            <div
              style={{ height: "250px" }}
              key={music.id + index + music.videoId}
              className="col-lg-4 col-md-6 my-1 position-relative"
            >
              {loading ? (
                <>
                  <div
                    className="spinner-border text-danger text-center position-absolute top-50 start-50"
                    role="status"
                  ></div>
                </>
              ) : null}
              <YouTube
                iframeClassName={"w-100 rounded shadow"}
                videoId={music.videoId}
                opts={opts2}
                onReady={_onReady}
              />
            </div>
          ))
        ) : (
          <ErrorDisplay error="No music published" />
        )}
        {}
      </div>
    </>
  );
};

export default MusicComponent;
