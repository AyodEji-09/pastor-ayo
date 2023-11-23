"use client";
import Api from "@/Api/api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AdminVideo = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_GHGF_CHANNEL_ID;

  const [loading, setLoading] = useState();
  const [loadingPublish, setLoadingPublish] = useState();
  const [videos, setVideos] = useState([]);
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
      await Api.get("/sanctum/csrf-cookie");
      const res = await Api.post("/api/videos", form);
      console.log({ res });
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
    await Api.get("/sanctum/csrf-cookie");
    const res = await Api.get("/api/videos");
    setPublishedVideos(res.data.data);
  };

  useEffect(() => {
    fetchPublishedVideos();
  }, []);

  return (
    <>
      <Toaster />
      <div className="my-1 rounded shadow-sm bg-white p-2">
        <h5 className="text-primary">YouTube Videos</h5>
        <p>Publish videos from `Great Father Great Husband` YouTube Channel</p>
        <button onClick={fetchData} className="btn btn-primary">
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
          <button onClick={handleOnSubmit} className="btn btn-success mx-2">
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
