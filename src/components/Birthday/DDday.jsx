"use client";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

const DDday = () => {
  return (
    <div className="container my-3">
      <div className="information">
        <div className="row justify-content-center">
          <div className="col-lg-4 my-1">
            <div className="info">
              <h3 className="fw-bolder text-primary">Birthday Service/Party</h3>
              <hr />
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <CiCalendar className="text-primary" />
                Saturday, 31st August, 2024
              </p>
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <MdAccessTime className="text-primary" />
                3p.m (No Africa time)
              </p>
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <CiLocationOn className="text-primary fs-1" />
                Church on the Hill Event hall,5500 Alessandro Blvd Riverside, CA
                92506.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-1">
            <div className="info">
              <h3 className="fw-bolder text-primary">Special Thanksgiving Service</h3>
              <hr />
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <CiCalendar className="text-primary" />
                Sunday, 1st September, 2024
              </p>
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <MdAccessTime className="text-primary" />
                10a.m (No Africa time)
              </p>
              <p className="lead d-flex align-items-start gap-1 my-1 p-0">
                <CiLocationOn className="text-primary fs-1" />
                RCCG,Arise Church 5750, Division street,Suite 204, Riverside,CA
                92506.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="fw-bold fs-4 text-center">
              Please confirm your attendance by clicking this button.
            </p>
            <a
              href="https://docs.google.com/forms/d/1fPph5VlYVMeUWqBXlkXzqCC1Jlkw1wzp23TMPJWvzRg/edit"
              target="_blank"
              className="btn btn-lg btn-primary"
            >
              Attendance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DDday;
