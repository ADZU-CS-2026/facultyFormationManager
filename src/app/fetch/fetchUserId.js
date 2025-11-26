import axios from "axios";

export default async function fetchUserId(id) {
  try {
    const res = await axios.post("/api/user/record-id/record-user-data", {
      id,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
