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
          <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
              <div class="col-sm-6  col-lg-4 ">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-calendar fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Bookings</p>
                    <h6 class="mb-0">1234</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 ">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-music fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Music</p>
                    <h6 class="mb-0">234</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 ">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-video fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Video</p>
                    <h6 class="mb-0">234</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sale & Revenue End --> */}

          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutHelper;
