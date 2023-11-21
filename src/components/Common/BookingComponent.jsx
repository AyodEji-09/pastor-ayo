"use client";
import { useState } from "react";

const BookingComponent = () => {
  const [bookingType, setBookingType] = useState("ministry");
  const [form, setForm] = useState({});

  return (
    <>
      <div className="my-2 bg-white rounded shadow-sm">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              onClick={() => setBookingType("ministry")}
              className={
                bookingType === "ministry"
                  ? "nav-link active fw-bold"
                  : "nav-link fw-bold"
              }
              href="#"
            >
              Ministration
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setBookingType("counseling")}
              className={
                bookingType === "counseling"
                  ? "nav-link active fw-bolder"
                  : "nav-link"
              }
              aria-current="page"
              href="#"
            >
              counseling Session
            </a>
          </li>
        </ul>
      </div>
      <main className="my-2 p-1 bg-white rounded shadow-sm">
        <form className="row g-2">
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              First Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="First name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lname" className="form-label">
              Last Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              placeholder="Last name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="pemail" className="form-label">
              Personal Email*
            </label>
            <input
              type="email"
              id="pemail"
              name="pemail"
              className="form-control"
              placeholder="Personal email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="pphone" className="form-label">
              Personal Phone*
            </label>
            <input
              type="tel"
              id="pphone"
              name="pphone"
              className="form-control"
              placeholder="Personal phone"
            />
          </div>
          <hr />

          {bookingType === "ministry" && (
            <>
              <div className="col-md-6">
                <label htmlFor="oname" className="form-label">
                  Name of Church/Organization*
                </label>
                <input
                  type="text"
                  id="oname"
                  name="oname"
                  className="form-control"
                  placeholder="Name of Church/Organization"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="oemail" className="form-label">
                  Email Address of Organization*
                </label>
                <input
                  type="email"
                  id="oemail"
                  name="oemail"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="ophone" className="form-label">
                  Phone Number of Organization*
                </label>
                <input
                  type="tel"
                  id="ophone"
                  name="ophone"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="website" className="form-label">
                  Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  placeholder="Website"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="facebook" className="form-label">
                  Facebook Page
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook Page Url"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="youtube" className="form-label">
                  Youtube Page
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="youtube"
                  name="youtube"
                  placeholder="YouTube Page Url"
                />
              </div>
              <hr />
              <div className="col-md-12">
                <label htmlFor="ename" className="form-label">
                  Event Name & Theme*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ename"
                  name="ename"
                  placeholder="Event Name & Theme"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="etype" className="form-label">
                  Nature of Event*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etype"
                  name="etype"
                  placeholder="Nature of Event"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="eaddress" className="form-label">
                  Event Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="eaddress"
                  name="esddress"
                  placeholder="Event Address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="ecountry" className="form-label">
                  Event Country*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ecountry"
                  name="ecountry"
                  placeholder="Event Country"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="ecountry" className="form-label">
                  Event State*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="estate"
                  name="estate"
                  placeholder="Event State"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="ecity" className="form-label">
                  Event City*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ecity"
                  name="ecity"
                  placeholder="Event State"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="event_time" className="form-label">
                  Event Time*
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="event_time"
                  name="event_time"
                  placeholder="Event Time"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="event_date" className="form-label">
                  Event Date*
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="event_date"
                  name="event_date"
                  placeholder="Event Date"
                />
              </div>
              <hr />
              <div className="col-md-12">
                <label htmlFor="prog_type" className="form-label">
                  Is this a personal programme or a programme organised by the
                  Church body?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="prog_type"
                  name="prog_type"
                  placeholder="Is this a personal programme or a programme organised by the
                Church body?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="ministers_list" className="form-label">
                  Who are the other ministers ministering at your programme?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ministers_list"
                  name="ministers_list"
                  placeholder="Who are the other ministers ministering at your programme?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="ticket" className="form-label">
                  Will it be a ticket (paid) entry event?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ticket"
                  name="ticket"
                  placeholder="Will it be a ticket (paid) entry event?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="venue_capacity" className="form-label">
                  What is the Capacity of the venue where your event is
                  scheduled to hold?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="venue_capacity"
                  name="venue_capacity"
                  placeholder="What is the Capacity of the venue where your event is scheduled to hold?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="recording_available" className="form-label">
                  Pastor Ayodeji Anifowose`s Team usually requests a video and
                  audio recording of her ministration. Will, there be a
                  recording of the event available for Ayodeji Anifowose`s media
                  team?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recording_available"
                  name="recording_available"
                  placeholder="Pastor Ayodeji Anifowose`s Team usually requests a video and
                audio recording of her ministration. Will, there be a recording
                of the event available for Ayodeji Anifowose`s media team?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="additional_info" className="form-label">
                  Additional information about the event
                </label>
                <textarea
                  className="form-control"
                  id="additional_info"
                  name="additional_info"
                  cols="30"
                  rows="5"
                  placeholder="Additional information about the event"
                ></textarea>
              </div>
            </>
          )}

          {bookingType === "counseling" && (
            <>
              <div className="col-md-12">
                <label htmlFor="counseling_groups" className="form-label">
                  counseling session groups
                </label>
                <select className="form-select" id="counseling_groups">
                  <option value="premarital_counseling">
                    Premarital counseling
                  </option>
                  <option value="marital_counseling">Marital counseling</option>
                  <option value="marriage_coaching">Marriage coaching</option>
                  <option value="life_coaching">Life coaching</option>
                </select>
              </div>
            </>
          )}
          <hr />

          <div>
            <ul>
              <li className="my-1">
                I agree that this Booking Form is solely for the purpose of
                collating information needed by Pastor Ayodeji Anifowose in
                order to consider the invitation/request.
              </li>
              <li className="my-1">
                I agree that where applicable and depending on the nature of
                each meeting/event the following(but not limited to ) - travel
                expenses, fees, visa processing fees, covid testing, lodging and
                feeding etc, might be required and should Pastor Ayodeji
                Anifowose confirm the invitation, more details will be included
                in an agreement letter that will be sent via email.
              </li>
              <li className="my-1">
                I agree that Pastor Ayodeji Anifowose`s content/Ministration at
                this event will not be sold, reproduced or distributed for a fee
                without the consent or written permission.
              </li>
              <li className="my-1">
                I agree that to the best of my knowledge, every information
                provided is correct.
              </li>
              <li className="my-1">
                I agree that Pastor Ayodeji Anifowose reserves the right to
                rescind/withdraw when it is discovered that any information
                provided by potential hosts is false.
              </li>
              <li className="my-1">
                I agree that submission of this form and an acknowledgement of
                same by Pastor Ayodeji Anifowose does not in any way CONFIRM the
                request/invitation until expressly stated in a confirmation
                email that will be sent from the official Pastor Ayodeji
                Anifowose email.
              </li>
            </ul>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                I accept all terms and conditions. (Please read terms and
                conditions)
              </label>
            </div>
          </div>

          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary px-5">
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default BookingComponent;
