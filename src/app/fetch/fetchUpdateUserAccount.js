import axios from "axios";

export default async function fetchUpdateUserAccount(id, newPass) {
  try {
    const res = await axios.patch("/api/admin", { id, newPass });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
