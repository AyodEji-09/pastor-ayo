"use client";
import { useRef, useState } from "react";
import { Country, IState, State } from "country-state-city";
import toast, { Toaster } from "react-hot-toast";
import { slugify, randomString } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

type BookingData = {
  booking_type: string;
  first_name: string;
  last_name: string;
  personal_email: string;
  personal_phone: string;
  org_name: string;
  org_email: string;
  org_phone: string;
  org_website: string;
  org_facebook: string;
  org_youtube: string;
  event_name: string;
  event_slug: string;
  event_nature: string;
  event_address: string;
  event_country: string;
  event_state: string;
  event_city: string;
  event_banner: string | null;
  event_time: string;
  event_date: Date | null;
  prog_type: string;
  ministers_list: string;
  ticket: string;
  venue_capacity: string;
  recording_available: string;
  additional_info: string;
  counseling_groups: string;
  consent: boolean;
  booking_confirmed: boolean;
};

const defaultData: BookingData = {
  booking_type: "",
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
  event_slug: "",
  event_nature: "",
  event_address: "",
  event_country: "",
  event_state: "",
  event_city: "",
  event_banner: null,
  event_time: "",
  event_date: null,
  prog_type: "",
  ministers_list: "",
  ticket: "",
  venue_capacity: "",
  recording_available: "",
  additional_info: "",
  counseling_groups: "",
  consent: false,
  booking_confirmed: false,
};

const BookingComponent = () => {
  return (
    <>
      <Toaster />
      <div className="my-2 rounded">
        <Tabs defaultValue="ministry" className="">
          <TabsList className="bg-white mb-4 shadow-sm w-full">
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="counseling">Counseling Session</TabsTrigger>
          </TabsList>
          <TabsContent value="ministry">
            <TabComponent bookingType="ministry" />
          </TabsContent>
          <TabsContent value="counseling">
            <TabComponent bookingType="counseling" />
          </TabsContent>
        </Tabs>
      </div>

      {/*{error && <Error error={error} />}*/}
    </>
  );
};

export default BookingComponent;

const TabComponent = ({ bookingType }: { bookingType: string }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const checkbox = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(defaultData);

  const [states, setStates] = useState<IState[]>([]);

  const countries = Country.getAllCountries();
  const getCountryCode = (value: string) => {
    setStates(State.getStatesOfCountry(value));
  };

  const validateFields = () => {
    if (bookingType == "counseling") {
      if (
        !form.first_name.trim().length ||
        !form.last_name.trim().length ||
        !form.personal_email.trim().length ||
        !form.personal_phone.trim().length ||
        !form.counseling_groups.trim().length ||
        !form?.event_date ||
        !form.event_time.trim().length
      ) {
        toast.error("Error! Please ensure all mandatory fields are filled.", {
          position: "bottom-center",
        });
        return null;
      } else {
        return true;
      }
    } else if (bookingType == "ministry") {
      if (
        !form.first_name.trim().length ||
        !form.last_name.trim().length ||
        !form.personal_email.trim().length ||
        !form.personal_phone.trim().length ||
        !form.org_name.trim().length ||
        !form.org_website.trim().length ||
        !form.org_youtube.trim().length ||
        !form.event_name.trim().length ||
        !form.event_nature.trim().length ||
        !form.event_address.trim().length ||
        !form.event_country.trim().length ||
        !form.event_state.trim().length ||
        !form.event_city.trim().length ||
        !form.event_time.trim().length ||
        !form?.event_date ||
        !form.prog_type.trim().length ||
        !form.ministers_list.trim().length ||
        !form.ticket.trim().length ||
        !form.recording_available.trim().length ||
        !form.additional_info.trim().length
      ) {
        toast.error("Error! Please ensure all mandatory fields are filled.", {
          position: "bottom-center",
        });
        return null;
      } else {
        return true;
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: e.target.checked }));
    } else if (type === "file") {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm((prev) => ({ ...prev, [name]: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      const value = (e.target as HTMLInputElement).value;
      if (name === "event_country") {
        getCountryCode(value);
      }
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    const res = validateFields();
    if (!res) return;
    setLoading(true);
    setError(null);

    try {
      const country =
        form.event_country.length > 0
          ? Country?.getCountryByCode(form.event_country)?.name
          : "";
      const formData = {
        ...form,
        event_country: country,
        event_slug: slugify(
          `${form.first_name} ${form.last_name} ${randomString(10)}`,
        ),
        booking_type: bookingType,
      };
      // const res = await Api.post("/api/bookings", formData);
      toast.success(
        `Thank you! We've received your booking details, we'll review your request shortly and send a confirmation once it's been confirmed.`,
        {
          duration: 7000,
          position: "bottom-center",
        },
      );
      setLoading(false);
      checkbox?.current.checked = false;
      if (fileRef.current) fileRef.current.value = "";

      setForm(defaultData);
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
      toast.error(error?.response?.data?.message, {
        duration: 7000,
        position: "bottom-center",
      });
    }
  };
  return (
    <main className="my-2 bg-white rounded shadow-sm p-4 text-sm text-gray-500">
      <p className="text-red-500 text-xs">* fields are mandatory</p>
      <form className="space-y-8 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label htmlFor="first_name" className="form-label">
              First Name*
            </label>
            <Input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>
          <div className="">
            <label htmlFor="last_name" className="form-label">
              Last Name*
            </label>
            <Input
              type="text"
              value={form.last_name}
              onChange={handleChange}
              className="form-control"
              id="last_name"
              name="last_name"
              placeholder="Last name"
            />
          </div>
          <div className="">
            <label htmlFor="personal_email" className="form-label">
              Personal Email*
            </label>
            <Input
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
            <Input
              type="tel"
              id="personal_phone"
              value={form.personal_phone}
              onChange={handleChange}
              name="personal_phone"
              className="form-control"
              placeholder="Personal phone"
            />
          </div>
        </div>

        <hr />

        {bookingType === "ministry" && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="col-md-6">
              <label htmlFor="org_name" className="form-label">
                Name of Church/Organization*
              </label>
              <Input
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
                Email Address of Organization
              </label>
              <Input
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
                Phone Number of Organization
              </label>
              <Input
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
                Website*
              </label>
              <Input
                type="url"
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
              <Input
                type="url"
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
                Youtube Page*
              </label>
              <Input
                type="url"
                className="form-control"
                value={form.org_youtube}
                onChange={handleChange}
                id="org_youtube"
                name="org_youtube"
                placeholder="YouTube page url"
              />
            </div>

            <hr />

            <div className="col-span-2">
              <label htmlFor="event_name" className="form-label">
                Event Name & Theme*
              </label>
              <Input
                type="text"
                className="form-control"
                value={form.event_name}
                onChange={handleChange}
                id="event_name"
                name="event_name"
                placeholder="Event Name & Theme"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="event_nature" className="form-label">
                Nature of Event*
              </label>
              <Input
                type="text"
                className="form-control"
                value={form.event_nature}
                onChange={handleChange}
                id="event_nature"
                name="event_nature"
                placeholder="Nature of Event"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="event_address" className="form-label">
                Event Address*
              </label>
              <Input
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
              <Select
                value={form.event_country}
                onValueChange={(value) =>
                  setForm({ ...form, event_country: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country, index) => (
                    <SelectItem key={index} value={country.isoCode}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-md-6">
              <label htmlFor="event_state" className="form-label">
                Event State*
              </label>
              <Select
                value={form.event_state}
                onValueChange={(value) =>
                  setForm({ ...form, event_state: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state, index) => (
                    <SelectItem key={index} value={state.name}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-md-6">
              <label htmlFor="event_city" className="form-label">
                Event City*
              </label>
              <Input
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
              <Input
                type="time"
                id="time-picker"
                step="1"
                defaultValue="10:30:00"
                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="event_date" className="form-label">
                Event Date*
              </label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date-picker"
                    className="w-full justify-between font-normal"
                  >
                    {form.event_date
                      ? form.event_date.toLocaleDateString()
                      : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={form.event_date || undefined}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setForm({ ...form, event_date: date || null });
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="col-md-6">
              <label htmlFor="event_date" className="form-label">
                Event Banner
              </label>
              <div className="input-group mb-3">
                <Input
                  ref={fileRef}
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  name="event_banner"
                  onChange={handleChange}
                  accept=".png, .jpg, .jpeg"
                />
              </div>
            </div>

            <hr />

            <div className="col-span-2">
              <label htmlFor="prog_type" className="form-label">
                Is this a personal program or a program organised by the Church
                body?*
              </label>
              <Input
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
            <div className="col-span-2">
              <label htmlFor="ministers_list" className="form-label">
                Who are the other ministers ministering at your program?*
              </label>
              <Input
                type="text"
                value={form.ministers_list}
                onChange={handleChange}
                className="form-control"
                id="ministers_list"
                name="ministers_list"
                placeholder="Who are the other ministers ministering at your program?"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="ticket" className="form-label">
                Will it be a ticket (paid) entry event?*
              </label>
              <Input
                type="text"
                className="form-control"
                value={form.ticket}
                onChange={handleChange}
                id="ticket"
                name="ticket"
                placeholder="Will it be a ticket (paid) entry event?"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="venue_capacity" className="form-label">
                What is the Capacity of the venue where your event is scheduled
                to hold?
              </label>
              <Input
                type="text"
                value={form.venue_capacity}
                onChange={handleChange}
                className="form-control"
                id="venue_capacity"
                name="venue_capacity"
                placeholder="What is the Capacity of the venue where your event is scheduled to hold?"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="recording_available" className="form-label">
                Pastor Ayodeji Anifowose`s Team usually requests a video and
                audio recording of his ministration. Will, there be a recording
                of the event available for Ayodeji Anifowose`s media team?*
              </label>
              <Input
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
            <div className="col-span-2">
              <label htmlFor="additional_info" className="form-label">
                Additional information about the event*
              </label>
              <Textarea
                className="form-control"
                id="additional_info"
                value={form.additional_info}
                onChange={handleChange}
                name="additional_info"
                cols={30}
                rows={5}
                placeholder="Additional information about the event"
              />
            </div>
          </div>
        )}

        {bookingType === "counseling" && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="col-md-6">
                <label htmlFor="event_date" className="form-label">
                  Counseling session date*
                </label>
                <Input
                  type="date"
                  value={form.event_date}
                  onChange={handleChange}
                  className="form-control"
                  id="event_date"
                  name="event_date"
                  placeholder="Event Date"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="event_time" className="form-label">
                  Counseling session time*
                </label>
                <Input
                  type="time"
                  id="time-picker"
                  step="1"
                  defaultValue="10:30:00"
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="counseling_groups" className="form-label">
                  Counseling session groups*
                </label>
                <Select
                  onValueChange={(value) =>
                    setForm({ ...form, counseling_groups: value })
                  }
                  value={form.counseling_groups}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premarital_counseling">
                      Premarital counseling
                    </SelectItem>
                    <SelectItem value="marital_counseling">
                      Marital counseling
                    </SelectItem>
                    <SelectItem value="marriage_coaching">
                      Marriage coaching
                    </SelectItem>
                    <SelectItem value="life_coaching">Life coaching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        <hr />

        {bookingType === "ministry" && (
          <div>
            <ul className="space-y-4">
              <li className="">
                I agree that this Booking Form is solely for the purpose of
                collating information needed by Pastor Ayodeji Anifowose in
                order to consider the invitation/request.
              </li>
              <li className="">
                I agree that where applicable and depending on the nature of
                each meeting/event the following(but not limited to ) - travel
                expenses, fees, visa processing fees, covid testing, lodging and
                feeding etc, might be required and should Pastor Ayodeji
                Anifowose confirm the invitation, more details will be included
                in an agreement letter that will be sent via email.
              </li>
              <li className="">
                I agree that Pastor Ayodeji Anifowose`s content/Ministration at
                this event will not be sold, reproduced or distributed for a fee
                without the consent or written permission.
              </li>
              <li className="">
                I agree that to the best of my knowledge, every information
                provided is correct.
              </li>
              <li className="">
                I agree that Pastor Ayodeji Anifowose reserves the right to
                rescind/withdraw when it is discovered that any information
                provided by potential hosts is false.
              </li>
              <li className="">
                I agree that submission of this form and an acknowledgement of
                same by Pastor Ayodeji Anifowose does not in any way CONFIRM the
                request/invitation until expressly stated in a confirmation
                email that will be sent from the official Pastor Ayodeji
                Anifowose email.
              </li>
            </ul>
          </div>
        )}

        {bookingType === "counseling" && (
          <div>
            <ul className="space-y-4">
              <li className="">
                I agree that this Booking Form is solely for the purpose of
                collating information needed by Pastor Ayodeji Anifowose in
                order to consider the invitation/request.
              </li>
              <li className="">
                I agree that to the best of my knowledge, every information
                provided is correct.
              </li>
              <li className="">
                I agree that Pastor Ayodeji Anifowose reserves the right to
                rescind/withdraw when it is discovered that any information
                provided by potential Counselee is false.
              </li>
              <li className="">
                I agree that submission of this form and an acknowledgement of
                same by Pastor Ayodeji Anifowose does not in any way CONFIRM the
                request/invitation until expressly stated in a confirmation
                email that will be sent from the official Pastor Ayodeji
                Anifowose email.
              </li>
              <li className="">
                I agree that the session will be confidential at an agreed date
                and time.
              </li>
            </ul>
          </div>
        )}

        <div className="">
          <div className="form-check space-x-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="consent"
              name="consent"
              ref={checkbox}
              checked={form.consent}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="consent">
              I accept all terms and conditions. (Please read terms and
              conditions)
            </label>
          </div>
        </div>

        <div className="col-12 mt-3">
          <Button
            // loading={loading}
            type="submit"
            className="btn btn-primary px-5"
            onClick={handleSubmit}
            disabled={!form.consent || loading}
          >
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};
