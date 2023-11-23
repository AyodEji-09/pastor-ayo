"use client";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import YouTube from "react-youtube";
import SectionHeader from "../Common/SectionHeader";

const MarriageComponent = () => {
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
  const introVideo = "s0Ghipw3sDA";
  const videoId = [
    "5VrNUQlqPd8",
    "GxL23JkhrhA",
    "PhC1z6QeEIY",
    "qy1SgtVYsV8",
    "MniBCLz8oss",
    "8Yszohoh35g",
  ];

  return (
    <>
      <div className="row my-5 d-flex justify-content-center">
        <div className="col-lg-5 col-md-6 my-1">
          <div style={{ height: "360px" }}>
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
              <span className="mx-1" style={{ lineHeight: 1.85 }}>
                A time comes in our lives when we need to define our roles as a
                husbands and fathers. On this channel, I will be discussing the
                lifestyle of an everyday husband and father making a strong
                impact within the home and in the world at large. I have learned
                a few things that I feel called to share with other men. At the
                same time, I`m still learning on the journey to becoming a
                husband and the journey to fatherhood. It`s time we change the
                narrative. God will remain the greatest father. Join me on this
                journey!
              </span>
              <span>
                <FaQuoteRight style={{ color: "#9c0404" }} />
              </span>
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-lg-2 gap-1">
              <a
                style={{ padding: "5px" }}
                title="Youtube"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://youtube.com/@GreatFatherGreatHusband?si=-2RKXL9S2Ps9iz0i"
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
              {/* facebook  */}
              <a
                style={{ padding: "5px" }}
                title="Facebook"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://www.facebook.com/greatfathergreathusband?mibextid=LQQJ4d"
              >
                <i>
                  <svg width="1.5em" height="1.5em" viewBox="0 0 486.037 1000">
                    <path
                      d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                      fill="#4267B2"
                    />
                  </svg>
                </i>
              </a>
              {/* instagram  */}
              <a
                style={{ padding: "5px" }}
                title="Instagram"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://instagram.com/gfather_ghusband?igshid=cDV4bDYwcTMwMXN0&utm_source=qr"
              >
                <i>
                  <svg width="1.5em" height="1.5em" viewBox="0 0 256 256">
                    <path
                      d="M128 80a48 48 0 1 0 48 48a48.054 48.054 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32zm44-132H84a56.064 56.064 0 0 0-56 56v88a56.064 56.064 0 0 0 56 56h88a56.064 56.064 0 0 0 56-56V84a56.064 56.064 0 0 0-56-56zm40 144a40.045 40.045 0 0 1-40 40H84a40.045 40.045 0 0 1-40-40V84a40.045 40.045 0 0 1 40-40h88a40.045 40.045 0 0 1 40 40zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12z"
                      fill="#E1306C"
                    />
                  </svg>
                </i>
              </a>
              {/* twitter  */}
              <a
                style={{ padding: "5px" }}
                title="Twitter"
                className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                target="_blank"
                href="https://twitter.com/GFatherGHusband"
              >
                {""}
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
                        fill="#1DA1F2"
                      />
                    </g>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SectionHeader
        header={"Video Gallery"}
        desc={
          "Collection of videos from `Great Father Great Husband` sessions."
        }
      />
      <div className="row my-5">
        {videoId.map((id) => (
          <div
            style={{ height: "250px" }}
            key={id}
            className="col-lg-4 col-md-6 my-1"
          >
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
              opts={opts2}
              onReady={_onReady}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MarriageComponent;
