import axios from "axios";

export default async function fetchDeleteAccount({ id }) {
  try {
    const res = await axios.delete("/api/admin/deleteaccount", {
      data: { id },
    });
    return res;
  } catch (err) {
    throw err;
  }
}
