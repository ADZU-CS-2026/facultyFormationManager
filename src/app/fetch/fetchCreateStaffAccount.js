import axios from "axios";

export default async function fetchCreateStaffAccount({ id, password }) {
  try {
    const res = await axios.post("/api/admin/createstaff", {
      id,
      role: "STAFF",
      password,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
