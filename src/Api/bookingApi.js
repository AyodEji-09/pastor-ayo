import Api from "@/Api/api";
import { addDays } from "date-fns";
import moment from "moment";

export const searchMinistryBookings = async () => {
  let start_date = moment(new Date()).format("YYYY-MM-DD");
  let end_date = moment(addDays(new Date(), 30)).format("YYYY-MM-DD");
  try {
    const res = await Api.post(`/api/bookings/search`, {
      start_date,
      end_date,
      location: "",
    });
    return res.data.data;
  } catch (error) {
    return [];
  }
};

export const getAllBookings = async () => {
  try {
    const res = await Api.get(`/api/bookings`);
    return res.data.data;
  } catch (error) {
    return [];
  }
};
export const deleteBookings = async (id) => {
  try {
    const res = await Api.delete(`/api/bookings/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};
export const updateBookings = async (event) => {
  try {
    const res = await Api.put(`/api/bookings/${event.id}`, {
      personal_email: event.personal_email,
      name: `${event.first_name}`,
    });
    return res;
  } catch (error) {
    return error;
  }
};
