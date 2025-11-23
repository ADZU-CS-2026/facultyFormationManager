import axios from "axios";

export default async function fetchStaffAccountData(id) {
  try {
    const res = await axios.post("/api/admin/getstaff", { id });
    return res.data;
  } catch (err) {
    throw err;
  }
}
