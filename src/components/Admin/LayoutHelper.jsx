"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const LayoutHelper = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container-fluid position-relative bg-white d-flex p-0">
        <Sidebar open={open} />

        <div className={open ? "content open" : "content"}>
          <Header setOpen={setOpen} />

          {/* <!-- Sale & Revenue Start --> */}
          {/* <div className="container-fluid pt-2 px-2">
            <div className="row g-4">
              <div className="col-sm-6  col-lg-4 ">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-2">
                  <i className="fa fa-calendar fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2">Bookings</p>
                    <h6 className="mb-0">1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-2">
                  <i className="fa fa-music fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2">Music</p>
                    <h6 className="mb-0">234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 ">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-2">
                  <i className="fa fa-video fa-3x text-primary"></i>
                  <div className="ms-3">
                    <p className="mb-2">Video</p>
                    <h6 className="mb-0">234</h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- Sale & Revenue End --> */}

          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutHelper;
