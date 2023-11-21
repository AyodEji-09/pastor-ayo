"use client";
import { useState } from "react";
import { Country, State } from "country-state-city";
import { hours } from "@/utils/data";

const BookingComponent = () => {
  const [bookingType, setBookingType] = useState("ministry");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    personal_email: "",
    personal_phone: "",
    org_name: "",
    org_email: "",
    org_phone: "",
    org_website: "",
    org_facebook: "",
    org_youtube: "",
    event_name: "",
    event_nature: "",
    event_address: "",
    event_country: "",
    event_state: "",
    event_city: "",
    event_time: "",
    event_date: "",
    prog_type: "",
    ministers_list: "",
    ticket: "",
    venue_capacity: "",
    recording_available: "",
    additional_info: "",
    counseling_groups: "",
    consent: false,
  });
  const [states, setStates] = useState([]);

  const countries = Country.getAllCountries();
  const getCountryCode = (value) => {
    setStates(State.getStatesOfCountry(value));
  };

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "checkbox") {
      value = e.target.checked;
    }
    if (name === "event_country") {
      getCountryCode(value);
    }
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let country = Country.getCountryByCode(form.event_country);
    console.log({ ...form, event_country: country.name });
  };

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
              Counseling Session
            </a>
          </li>
        </ul>
      </div>
      <main className="my-2 p-1 bg-white rounded shadow-sm">
        <form className="row g-2" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="first_name" className="form-label">
              First Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="last_name" className="form-label">
              Last Name*
            </label>
            <input
              type="text"
              value={form.last_name}
              onChange={handleChange}
              className="form-control"
              id="last_name"
              name="last_name"
              placeholder="Last name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="personal_email" className="form-label">
              Personal Email*
            </label>
            <input
              type="email"
              id="personal_email"
              name="personal_email"
              className="form-control"
              placeholder="Personal email"
              value={form.personal_email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="personal_phone" className="form-label">
              Personal Phone*
            </label>
            <input
              type="tel"
              id="personal_phone"
              value={form.personal_phone}
              onChange={handleChange}
              name="personal_phone"
              className="form-control"
              placeholder="Personal phone"
            />
          </div>
          <hr />

          {bookingType === "ministry" && (
            <>
              <div className="col-md-6">
                <label htmlFor="org_name" className="form-label">
                  Name of Church/Organization*
                </label>
                <input
                  type="text"
                  id="org_name"
                  name="org_name"
                  value={form.org_name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Name of Church/Organization"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="org_email" className="form-label">
                  Email Address of Organization*
                </label>
                <input
                  type="email"
                  value={form.org_email}
                  onChange={handleChange}
                  id="org_email"
                  name="org_email"
                  className="form-control"
                  placeholder="Organization email address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="org_phone" className="form-label">
                  Phone Number of Organization*
                </label>
                <input
                  type="tel"
                  value={form.org_phone}
                  onChange={handleChange}
                  id="org_phone"
                  name="org_phone"
                  className="form-control"
                  placeholder="Organization phone"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="org_website" className="form-label">
                  Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.org_website}
                  onChange={handleChange}
                  id="org_website"
                  name="org_website"
                  placeholder="Website"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="org_facebook" className="form-label">
                  Facebook Page
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.org_facebook}
                  onChange={handleChange}
                  id="org_facebook"
                  name="org_facebook"
                  placeholder="Facebook page url"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="org_youtube" className="form-label">
                  Youtube Page
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.org_youtube}
                  onChange={handleChange}
                  id="org_youtube"
                  name="org_youtube"
                  placeholder="YouTube page url"
                />
              </div>
              <hr />
              <div className="col-md-12">
                <label htmlFor="event_name" className="form-label">
                  Event Name & Theme*
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.event_name}
                  onChange={handleChange}
                  id="event_name"
                  name="event_name"
                  placeholder="Event Name & Theme"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="event_nature" className="form-label">
                  Nature of Event*
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.event_nature}
                  onChange={handleChange}
                  id="event_nature"
                  name="event_nature"
                  placeholder="Nature of Event"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="event_address" className="form-label">
                  Event Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.event_address}
                  onChange={handleChange}
                  id="event_address"
                  name="event_address"
                  placeholder="Event Address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="event_country" className="form-label">
                  Event Country*
                </label>

                <select
                  className="form-select"
                  value={form.event_country}
                  onChange={handleChange}
                  id="event_country"
                  name="event_country"
                  placeholder="Event Country"
                >
                  {countries.map((country, index) => (
                    <option
                      datacode={country.isoCode}
                      key={country + index}
                      value={country.isoCode}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="event_state" className="form-label">
                  Event State*
                </label>
                <select
                  className="form-select"
                  value={form.event_state}
                  onChange={handleChange}
                  id="event_state"
                  name="event_state"
                  placeholder="Event State"
                >
                  {states.map((state, index) => (
                    <option key={state + index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="event_city" className="form-label">
                  Event City*
                </label>
                <input
                  type="text"
                  value={form.event_city}
                  onChange={handleChange}
                  className="form-control"
                  id="event_city"
                  name="event_city"
                  placeholder="Event City"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="event_time" className="form-label">
                  Event Time*
                </label>
                <select
                  className="form-select"
                  value={form.event_time}
                  onChange={handleChange}
                  id="event_time"
                  name="event_time"
                  placeholder="Event Time"
                >
                  {hours.map((hour, index) => (
                    <option key={hour + index} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="event_date" className="form-label">
                  Event Date*
                </label>
                <input
                  type="date"
                  value={form.event_date}
                  onChange={handleChange}
                  className="form-control"
                  id="event_date"
                  name="event_date"
                  placeholder="Event Date"
                />
              </div>
              <hr />
              <div className="col-md-12">
                <label htmlFor="prog_type" className="form-label">
                  Is this a personal program or a program organised by the
                  Church body?*
                </label>
                <input
                  type="text"
                  value={form.prog_type}
                  onChange={handleChange}
                  className="form-control"
                  id="prog_type"
                  name="prog_type"
                  placeholder="Is this a personal program or a program organised by the
                Church body?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="ministers_list" className="form-label">
                  Who are the other ministers ministering at your program?*
                </label>
                <input
                  type="text"
                  value={form.ministers_list}
                  onChange={handleChange}
                  className="form-control"
                  id="ministers_list"
                  name="ministers_list"
                  placeholder="Who are the other ministers ministering at your program?"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="ticket" className="form-label">
                  Will it be a ticket (paid) entry event?*
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={form.ticket}
                  onChange={handleChange}
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
                  value={form.venue_capacity}
                  onChange={handleChange}
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
                  value={form.recording_available}
                  onChange={handleChange}
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
                  value={form.additional_info}
                  onChange={handleChange}
                  name="additional_info"
                  cols="30"
                  rows="5"
                  placeholder="Additional information about the event"
                ></textarea>
              </div>
            </>
          )}

          {bookingType === "counseling" && (
            <div className="col-md-12">
              <label htmlFor="counseling_groups" className="form-label">
                counseling session groups
              </label>
              <select
                onChange={handleChange}
                value={form.counseling_groups}
                name="counseling_groups"
                className="form-select"
                id="counseling_groups"
              >
                <option value="premarital_counseling">
                  Premarital counseling
                </option>
                <option value="marital_counseling">Marital counseling</option>
                <option value="marriage_coaching">Marriage coaching</option>
                <option value="life_coaching">Life coaching</option>
              </select>
            </div>
          )}
          <hr />
          {bookingType === "ministry" && (
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
                  expenses, fees, visa processing fees, covid testing, lodging
                  and feeding etc, might be required and should Pastor Ayodeji
                  Anifowose confirm the invitation, more details will be
                  included in an agreement letter that will be sent via email.
                </li>
                <li className="my-1">
                  I agree that Pastor Ayodeji Anifowose`s content/Ministration
                  at this event will not be sold, reproduced or distributed for
                  a fee without the consent or written permission.
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
                  same by Pastor Ayodeji Anifowose does not in any way CONFIRM
                  the request/invitation until expressly stated in a
                  confirmation email that will be sent from the official Pastor
                  Ayodeji Anifowose email.
                </li>
              </ul>
            </div>
          )}

          {bookingType === "counseling" && (
            <div>
              <ul>
                <li className="my-1">
                  I agree that this Booking Form is solely for the purpose of
                  collating information needed by Pastor Ayodeji Anifowose in
                  order to consider the invitation/request.
                </li>
                <li className="my-1">
                  I agree that to the best of my knowledge, every information
                  provided is correct.
                </li>
                <li className="my-1">
                  I agree that Pastor Ayodeji Anifowose reserves the right to
                  rescind/withdraw when it is discovered that any information
                  provided by potential Counselee is false.
                </li>
                <li className="my-1">
                  I agree that submission of this form and an acknowledgement of
                  same by Pastor Ayodeji Anifowose does not in any way CONFIRM
                  the request/invitation until expressly stated in a
                  confirmation email that will be sent from the official Pastor
                  Ayodeji Anifowose email.
                </li>
                <li className="my-1">
                  I agree that the session will be confidential at an agreed
                  date and time.
                </li>
              </ul>
            </div>
          )}

          <div className="col-12">
            <div className="form-check">
              {/* */}
              <input
                className="form-check-input"
                type="checkbox"
                id="consent"
                name="consent"
                value={form.consent}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="consent">
                I accept all terms and conditions. (Please read terms and
                conditions)
              </label>
            </div>
          </div>

          <div className="col-12 mt-3">
            <button
              disabled={form.consent ? false : true}
              type="submit"
              className="btn btn-primary px-5"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default BookingComponent;
