
const page = () => {
  return (
    <div className="container-fluid">
      <div className="row rounded shadow-sm bg-white my-1 p-2">
        <div className="col-lg-6  my-2">
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
  );
};

export default page;
