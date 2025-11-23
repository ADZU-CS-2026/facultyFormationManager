import axios from "axios";

export default async function fetchStaffList() {
  try {
    const res = await axios.post("/api/admin/getstafflist", { role: "STAFF" });
    return res.data;
  } catch (err) {
    throw err;
  }
}
