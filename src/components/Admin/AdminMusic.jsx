"use client";
import Api from "@/Api/api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../UI/Button";
import { useRouter } from "next/navigation";
import ErrorDisplay from "../UI/ErrorDisplay";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";

const AdminMusic = ({ musics }) => {
  const router = useRouter();
  const [loading, setLoading] = useState();
  const [loadingPublished, setLoadingPublished] = useState();
  const [loadingUnpublished, setLoadingUnpublished] = useState();
  const [loadingUpdateLatestTracks, setLoadingUpdateLatestTracks] = useState();
  const [form, setForm] = useState([]);
  const [track, setTrack] = useState({
    banner: "",
    title: "",
    author: "",
    spotify: "",
    youtube: "",
    iTunes: "",
    soundCloud: "",
    appleMusic: "",
    amazonMusic: "",
    boomPlay: "",
    googlePlay: "",
    deezer: "",
    netEase: "",
  });

  const refreshMusics = async () => {
    setLoading(true);
    try {
      const res = await Api.get("/api/music/refresh");
      router.refresh();
      toast.success("music table has been refreshed", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Unable to fetch musics", {
        duration: 5000,
      });
    }
    setLoading(false);
  };

  const handleChange = (e, music) => {
    const { checked } = e.target;
    if (checked) {
      setForm((prev) => {
        return [...prev, music];
      });
    } else {
      setForm(form.filter((item) => item.id !== music.id));
    }
  };
  const handleTrackChange = (e) => {
    let { name, value } = e.target;
    setTrack((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUnpublished = async () => {
    if (!form.length) {
      return toast.error("Please select musics to unpublish.", {
        duration: 5000,
      });
    }
    setLoadingUnpublished(true);
    try {
      const res = await Api.put("/api/music", form);
      router.refresh();
      toast.success("All selected musics has been unpublished successfully", {
        duration: 5000,
      });
      uncheck();
      setForm([]);
    } catch (error) {
      toast.error("Unable to unpublish selected musics", {
        duration: 5000,
      });
    }
    setLoadingUnpublished(false);
  };

  const uncheck = () => {
    const checkboxes = document.querySelectorAll("input.form-check-input");
    checkboxes.forEach((element) => {
      element.checked = false;
    });
  };

  const handlePublished = async () => {
    if (!form.length) {
      return toast.error("Please select musics to publish.", {
        duration: 5000,
      });
    }
    setLoadingPublished(true);
    try {
      const res = await Api.post("/api/music", form);
      router.refresh();
      toast.success("All selected musics has been published successfully", {
        duration: 5000,
      });
      uncheck();
      setForm([]);
    } catch (error) {
      toast.error("Unable to publish selected musics", {
        duration: 5000,
      });
    }
    setLoadingPublished(false);
  };

  const handleUpdateLatestTracks = async () => {
    if (!track.title && !track.author) {
      return toast.error("Please enter the track title.", {
        duration: 5000,
      });
    }
    setLoadingUpdateLatestTracks(true);
    try {
      const res = await Api.put("/api/music/refresh", track);
      toast.success("Latest tracks details have been published successfully", {
        duration: 5000,
      });
      setTrack({
        banner: "",
        title: "",
        author: "",
        spotify: "",
        youtube: "",
        iTunes: "",
        soundCloud: "",
        appleMusic: "",
        amazonMusic: "",
        boomPlay: "",
        googlePlay: "",
        deezer: "",
        netEase: "",
      });
    } catch (error) {
      toast.error("Unable to update latest track", {
        duration: 5000,
      });
    }
    setLoadingUpdateLatestTracks(false);
  };

  return (
    <>
      <Toaster />

        <div className="my-1 p-1 border border-1 rounded shadow bg-white">
          <h5 className="text-primary fw-bold fs-3">YouTube Musics</h5>
          <p>Publish musics from YouTube Music Channel</p>
          <Button
            loading={loading}
            type="button"
            className="btn btn-primary  me-2 mb-1"
            text="Refresh"
            func={refreshMusics}
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

        <div className="shadow bg-white">
          <div className="table-responsive">
            {musics.length > 0 ? (
              <table className="table table-striped table-hover table-sm">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Select</th>
                    <th scope="col">Title</th>
                    <th scope="col">Banner</th>
                    <th scope="col">Published</th>
                  </tr>
                </thead>
                <tbody>
                  {musics.map((music, index) => (
                    <tr key={music.id}>
                      <th scope="row">{++index}</th>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`music${music.id}`}
                          name="music"
                          onChange={(e) => handleChange(e, music)}
                        />
                      </td>
                      <td>
                        <label
                          className="form-check-label"
                          htmlFor={`music${music.id}`}
                        >
                          {music.title}
                        </label>
                      </td>
                      <td className="text-center">
                        <Image
                          src={music.thumbnail}
                          alt="music banner"
                          width={100}
                          height={50}
                        />
                      </td>
                      <td className="text-center">
                        {music.published ? (
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
              <ErrorDisplay error="No music" />
            )}
          </div>
        </div>

        <div className="my-1 p-1 border border-1 rounded shadow bg-white">
          <h5 className="text-primary fw-bold fs-3">Latest Tracks</h5>
          <p>Update latest tracks details</p>
        </div>

        {/* <div className="container-fluid"> */}
        <div className="p-1 mb-2 border border-1 rounded shadow bg-white">
          <form className="row g-1">
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="title" className="form-label">
                Title*
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={track.title}
                onChange={handleTrackChange}
                placeholder="Title"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="banner" className="form-label">
                Banner
              </label>
              <input
                type="text"
                value={track.banner}
                onChange={handleTrackChange}
                className="form-control"
                id="banner"
                name="banner"
                placeholder="Track Image Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="author" className="form-label">
                Author*
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
                placeholder="Author"
                value={track.author}
                onChange={handleTrackChange}
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="spotify" className="form-label">
                Spotify Url
              </label>
              <input
                type="text"
                id="spotify"
                value={track.spotify}
                onChange={handleTrackChange}
                name="spotify"
                className="form-control"
                placeholder="Spotify Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="Youtube" className="form-label">
                Youtube Url
              </label>
              <input
                type="text"
                id="Youtube"
                value={track.youtube}
                onChange={handleTrackChange}
                name="youtube"
                className="form-control"
                placeholder="Youtube Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="iTunes" className="form-label">
                iTunes Url
              </label>
              <input
                type="text"
                id="iTunes"
                value={track.iTunes}
                onChange={handleTrackChange}
                name="iTunes"
                className="form-control"
                placeholder="iTunes Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="soundCloud" className="form-label">
                SoundCloud Url
              </label>
              <input
                type="text"
                id="soundCloud"
                value={track.soundCloud}
                onChange={handleTrackChange}
                name="soundCloud"
                className="form-control"
                placeholder="soundCloud Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="appleMusic" className="form-label">
                AppleMusic Url
              </label>
              <input
                type="text"
                id="appleMusic"
                value={track.appleMusic}
                onChange={handleTrackChange}
                name="appleMusic"
                className="form-control"
                placeholder="appleMusic Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="amazonMusic" className="form-label">
                AmazonMusic Url
              </label>
              <input
                type="text"
                id="amazonMusic"
                value={track.amazonMusic}
                onChange={handleTrackChange}
                name="amazonMusic"
                className="form-control"
                placeholder="amazonMusic Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="boomPlay" className="form-label">
                BoomPlay Url
              </label>
              <input
                type="text"
                id="boomPlay"
                value={track.boomPlay}
                onChange={handleTrackChange}
                name="boomPlay"
                className="form-control"
                placeholder="boomPlay Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="googlePlay" className="form-label">
                GooglePlay Url
              </label>
              <input
                type="text"
                id="googlePlay"
                value={track.googlePlay}
                onChange={handleTrackChange}
                name="googlePlay"
                className="form-control"
                placeholder="googlePlay Url"
              />
            </div>
            <div className="col-md-4 col-lg-3 col-6">
              <label htmlFor="deezer" className="form-label">
                Deezer Url
              </label>
              <input
                type="text"
                id="deezer"
                value={track.deezer}
                onChange={handleTrackChange}
                name="deezer"
                className="form-control"
                placeholder="deezer Url"
              />
            </div>
            <div className="col-12">
              <Button
                loading={loadingUpdateLatestTracks}
                type="button"
                className="btn btn-success  me-2 mb-1"
                text="Update"
                func={handleUpdateLatestTracks}
                disabled={loadingUpdateLatestTracks}
              />
            </div>
          </form>
        </div>
    </>
  );
};

export default AdminMusic;
