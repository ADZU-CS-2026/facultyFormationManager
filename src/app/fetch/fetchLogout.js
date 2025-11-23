import axios from "axios";

export default async function fetchLogout() {
  try {
    // axios.post signature: (url, data?, config?). Pass an empty body and put
    // `withCredentials` in the config so cookies are sent.
    const res = await axios.post(
      "/api/auth/logout",
      {},
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
