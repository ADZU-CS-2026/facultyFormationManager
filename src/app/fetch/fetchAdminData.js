import axios from "axios";

export default async function fetchAdminData() {
  try {
    const res = await axios.post(
      "/api/admin",
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
}
