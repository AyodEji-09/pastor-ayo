import Api from "@/Api/api";
import { addDays } from "date-fns";
import moment from "moment";

export const searchMinistryBookings = async () => {
    let start_date = moment(new Date()).format("YYYY-MM-DD");
    let end_date = moment(addDays(new Date(), 30)).format("YYYY-MM-DD");
    try {
      const res = await Api.post(`/api/booking/search`, {
        start_date,
        end_date,
        location: "",
      });
      return res.data.data;
    } catch (error) {
      return [];
    }
  };