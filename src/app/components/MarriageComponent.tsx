"use client";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { HeaderStyleComponent } from "./home-page/HeroSection";
import { Empty } from "antd";

const url = "https://www.youtube.com/watch?v=s0Ghipw3sDA";
type Musics = { videoId: string; id: string; title: string; url: string }[];

const MusicComponent = () => {
  const [loading, setLoading] = useState(true);
  const musics: Musics = [];
  const _onReady = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="">
            <div>
              <ReactPlayer
                className={"w-full"}
                style={{ width: "100%", height: "400px" }}
                src={url}
                onReady={_onReady}
              />
            </div>
          </div>
          <div className="self-center">
            <div className="p-4 bg-white rounded-md shadow-sm max-w-lg">
              <p className="">
                <span>
                  <FaQuoteLeft style={{ color: "#9c0404" }} />
                </span>
                <span
                  className="mx-1 text-text text-lg font-medium"
                  style={{ lineHeight: 2 }}
                >
                  {"    "}A time comes in our lives when we need to define our
                  roles as a husbands and fathers. On this channel, I will be
                  discussing the lifestyle of an everyday husband and father
                  making a strong impact within the home and in the world at
                  large. I have learned a few things that I feel called to share
                  with other men. At the same time, I`m still learning on the
                  journey to becoming a husband and the journey to fatherhood.
                  It`s time we change the narrative. God will remain the
                  greatest father. Join me on this journey!
                </span>
                <span>
                  <FaQuoteRight style={{ color: "#9c0404" }} />
                </span>
              </p>
              <div className="flex gap-4 p-4 justify-center">
                {/* youtube  */}
                <a
                  title="Youtube"
                  className=" p-2 rounded-full border-2 text-sm"
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
                {/* facebook  */}
                <a
                  style={{ padding: "5px" }}
                  title="Facebook"
                  className=" p-2 rounded-full border-2 text-sm"
                  target="_blank"
                  href="https://www.facebook.com/greatfathergreathusband?mibextid=LQQJ4d"
                >
                  <i>
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 486.037 1000"
                    >
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
                  className=" p-2 rounded-full border-2 text-sm"
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
                  className=" p-2 rounded-full border-2 text-sm"
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
      </div>
      <article>
        <HeaderStyleComponent variant="dark" title="Video Gallery" />
        <p className="text-center font-semibold text-black/70">
          Collection of videos from `Great Father Great Husband` sessions.
        </p>
      </article>
      <div className="row my-5">
        {musics?.length > 0 ? (
          musics?.map((music, index) => (
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
              <ReactPlayer
                className={"w-100 rounded shadow"}
                src={url}
                onReady={_onReady}
              />
            </div>
          ))
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{
              //   image: { height: 60, },
              description: { color: "black" },
            }}
            className="flex justify-center flex-col items-center"
            description={"No videos published"}
          />
        )}
        {}
      </div>
    </>
  );
};

export default MusicComponent;
