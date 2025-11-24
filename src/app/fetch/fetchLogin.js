import axios from "axios";

export default async function fetchLogin({ id, password }) {
  try {
    const res = await axios.post(
      "/api/auth/login",
      { id, password },
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    throw err;
  }
}
