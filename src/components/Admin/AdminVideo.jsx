"use client";
import Api from "@/Api/api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AdminVideo = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_GHGF_CHANNEL_ID;

  const [loading, setLoading] = useState();
  const [loadingPublish, setLoadingPublish] = useState();
  const [videos, setVideos] = useState([
    {
      kind: "youtube#searchResult",
      etag: "USJvVmXe3y96gEunhDZCDDCBYnE",
      id: {
        kind: "youtube#video",
        videoId: "mag1p_QiA18",
      },
      snippet: {
        publishedAt: "2023-11-22T14:00:07Z",
        channelId: "UCdrjoaHlqhZzhWbXyR_QS6g",
        title:
          "Pastor Philip Olabisi |  60 Days Pray with me Challenge for Children | Day 22",
        description:
          "Join APastor Philip Olabisi today for the 60 Days Pray with Me Challenge for Children! This is an incredible opportunity for parents ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/mag1p_QiA18/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/mag1p_QiA18/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/mag1p_QiA18/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Great Father, Great Husband",
        liveBroadcastContent: "none",
        publishTime: "2023-11-22T14:00:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "cqOqQ7DwfQg0aREinRBCjvxSZvw",
      id: {
        kind: "youtube#video",
        videoId: "BDIMHz3H9Uc",
      },
      snippet: {
        publishedAt: "2023-11-22T07:40:11Z",
        channelId: "UCdrjoaHlqhZzhWbXyR_QS6g",
        title:
          "Pastor Philip Olabisi |  60 Days Pray with me Challenge for Children | Day 23",
        description:
          "Join Pastor Philip Olabisi today for the 60 Days Pray with Me Challenge for Children! This is an incredible opportunity for parents ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BDIMHz3H9Uc/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BDIMHz3H9Uc/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BDIMHz3H9Uc/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Great Father, Great Husband",
        liveBroadcastContent: "upcoming",
        publishTime: "2023-11-22T07:40:11Z",
      },
    },
  ]);
  const [publishedVideos, setPublishedVideos] = useState([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState([]);

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=200&type=video`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const results = await response.json();
      setLoading(false);
      if (results.items.length > 0) {
        setVideos(results.items);
        setError("");
      } else {
        setError("No Videos found");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Unable to fetch videos", {
        duration: 5000,
      });
    }
  };

  const handleOnChange = (e, video) => {
    const { checked } = e.target;
    if (checked) {
      const data = {
        videoId: video?.id?.videoId,
        title: video?.snippet?.title,
        description: video?.snippet?.description,
        thumnbnail: video?.snippet?.thumbnails?.medium?.url,
        publishedTime: video?.snippet?.publishedAt,
      };
      setForm((prev) => {
        return [...prev, data];
      });
    } else {
      setForm(form.filter((item) => item.videoId !== video?.id?.videoId));
    }
  };

  const handleOnSubmit = async () => {
    try {
      setLoadingPublish(true);
      const res = await Api.post("/api/bookings", form);
      toast.success("Videos have been published succesfully", {
        duration: 5000,
      });
      setLoadingPublish(false);
    } catch (error) {
      setLoadingPublish(false);
      toast.error(
        `${error?.response?.data?.data?.message} - Unable to publish to videos`,
        {
          duration: 5000,
        }
      );
    }
  };

  const fetchPublishedVideos = async () => {
    const res = await Api.get("/api/bookings");
    setPublishedVideos(res.data.data);
  };

  useEffect(() => {
    // fetchPublishedVideos();
  }, []);

  return (
    <>
      <Toaster />
      <div className="my-1 rounded shadow-sm bg-white p-2">
        <h5 className="text-primary">YouTube Videos</h5>
        <p>Publish videos from `Great Father Great Husband` YouTube Channel</p>
        <button onClick={fetchData} className="btn btn-primary me-2 mb-1">
          {loading && (
            <span
              className="spinner-border spinner-border-sm mx-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          <span>Get Videos</span>
        </button>
        {form.length > 0 && (
          <button
            onClick={handleOnSubmit}
            className="btn btn-success mb-1"
          >
            {loadingPublish && (
              <span
                className="spinner-border spinner-border-sm mx-1"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            <span>Publish Videos</span>
          </button>
        )}
      </div>

      <div className="container-fluid">
        <div className="row rounded shadow-sm bg-white my-1 p-2">
          <div
            className="col-lg-6  my-2"
            style={{ height: "80vh", overflowY: "scroll" }}
          >
            {videos.length > 0 && (
              <div className="my-1 p-2 d-flex flex-column flex-wrap gap-1">
                {error && <p className="text-danger">{error}</p>}
                {videos.map((video, index) => (
                  <div key={video.etag + index} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={video.id.videoId}
                      name="videoId"
                      onChange={(e) => handleOnChange(e, video)}
                      id={video.id.videoId + index}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={video.id.videoId + index}
                    >
                      {video.snippet.title}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="col-lg-6  my-2"
            style={{ height: "80vh", overflowY: "scroll" }}
          >
            <h4 className="text-primary fw-bold">Already Published Videos</h4>
            <hr />
            {publishedVideos.length > 0 && (
              <ul>
                {publishedVideos.map((video, index) => (
                  <li className="mb-1" key={video.videoId + index}>
                    {video.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminVideo;
