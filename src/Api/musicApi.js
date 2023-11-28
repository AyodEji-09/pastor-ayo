import Api from "@/Api/api";

export const getAllMusics = async () => {
  try {
    const res = await Api.get(`/api/music`);
    return res.data.data;
  } catch (error) {
    return [];
  }
};
// export const deleteBookings = async (id) => {
//   try {
//     const res = await Api.delete(`/api/bookings/${id}`);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
// export const updateBookings = async (event) => {
//   try {
//     const res = await Api.put(`/api/bookings/${event.id}`, {
//       personal_email: event.personal_email,
//     });
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
