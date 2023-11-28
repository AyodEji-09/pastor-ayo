"use client";
import Api from "@/Api/api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../UI/Button";
import { useRouter } from "next/navigation";
import ErrorDisplay from "../UI/ErrorDisplay";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";

const AdminVideo = ({ videos }) => {
  const router = useRouter();
  const [loading, setLoading] = useState();
  const [loadingPublished, setLoadingPublished] = useState();
  const [loadingUnpublished, setLoadingUnpublished] = useState();
  const [form, setForm] = useState([]);

  const uncheck = () => {
    const checkboxes = document.querySelectorAll("input.form-check-input");
    checkboxes.forEach((element) => {
      element.checked = false;
    });
  };

  const refreshVideos = async () => {
    setLoading(true);
    try {
      const res = await Api.get("/api/video/refresh");
      router.refresh();
      toast.success("Video table has been refreshed", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Unable to fetch videos", {
        duration: 5000,
      });
    }
    setLoading(false);
  };

  const handleChange = (e, video) => {
    const { checked } = e.target;
    if (checked) {
      setForm((prev) => {
        return [...prev, video];
      });
    } else {
      setForm(form.filter((item) => item.id !== video.id));
    }
  };

  const handleUnpublished = async () => {
    if (!form.length) {
      return toast.error("Please select videos to unpublish.", {
        duration: 5000,
      });
    }
    setLoadingUnpublished(true);
    try {
      const res = await Api.put("/api/video", form);
      uncheck();
      router.refresh();
      toast.success("All selected videos has been unpublished successfully", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Unable to unpublish selected videos", {
        duration: 5000,
      });
    }
    setLoadingUnpublished(false);
  };

  const handlePublished = async () => {
    if (!form.length) {
      return toast.error("Please select videos to publish.", {
        duration: 5000,
      });
    }
    setLoadingPublished(true);
    try {
      const res = await Api.post("/api/video", form);
      router.refresh();
      toast.success("All selected videos has been published successfully", {
        duration: 5000,
      });
      uncheck();
    } catch (error) {
      toast.error("Unable to publish selected videos", {
        duration: 5000,
      });
    }
    setLoadingPublished(false);
  };

  return (
    <>
      <Toaster />
      <div className="my-1 rounded shadow-sm bg-white p-2">
        <h5 className="text-primary fw-bold fs-3">YouTube Videos</h5>
        <p>Publish videos from `Great Father Great Husband` YouTube Channel</p>
        <Button
          loading={loading}
          type="button"
          className="btn btn-primary  me-2 mb-1"
          text="Refresh"
          func={refreshVideos}
          disabled={loading}
        />
        <Button
          loading={loadingPublished}
          type="button"
          className="btn btn-success  me-2 mb-1"
          text="Publish"
          func={handlePublished}
          disabled={loadingPublished}
        />
        <Button
          loading={loadingUnpublished}
          type="button"
          className="btn btn-danger  me-2 mb-1"
          text="Unpublish"
          func={handleUnpublished}
          disabled={loadingUnpublished}
        />
      </div>

      <div className="container-fluid">
        <div className="row rounded shadow-sm bg-white my-1 p-2">
          <div className="table-responsive">
            {videos.length > 0 ? (
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Select</th>
                    <th scope="col">VideoId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Banner</th>
                    <th scope="col">Published</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video, index) => (
                    <tr key={video.id}>
                      <th scope="row">{++index}</th>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="consent"
                          name="video"
                          onChange={(e) => handleChange(e, video)}
                        />
                      </td>
                      <td>{video.videoId}</td>
                      <td>{video.title}</td>
                      <td className="text-center">
                        <Image
                          src={video.thumbnail}
                          alt="video banner"
                          width={128}
                          height={75}
                        />
                      </td>
                      <td className="text-center">
                        {video.published ? (
                          <FaCheck className="text-success" />
                        ) : (
                          <FaTimes className="text-danger" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <ErrorDisplay error="No video" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminVideo;
