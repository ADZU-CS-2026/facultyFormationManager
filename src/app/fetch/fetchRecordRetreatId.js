import axios from "axios";

export default async function RecordId(id) {
  try {
    const res = await axios.post("/api/user/record-id/record-retreat-data", {
      id,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
