import axios from "axios";

export default async function fetchUpdateUserAccount({ id, newPass, newName, newID }) {
  try {
    const res = await axios.patch("/api/admin/updateaccount", { id, newPass, newName, newID });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
