import axios from "axios";

export default async function fetchAccountData() {
  try {
    const res = await axios.post(
      "/api/admin/getaccount",
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}
