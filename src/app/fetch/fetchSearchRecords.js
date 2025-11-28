import axios from "axios";

export default async function fetchSearchRecord({
  department,
  work_status,
  school_year,
  name,
}) {
  try {
    const res = await axios.post("/api/user/searchusers", {
      department,
      work_status,
      school_year,
      name,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
