import axios from "axios";

export default async function fetchLogout() {
  try {
    const res = await axios.post("/api/auth/logout");
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
