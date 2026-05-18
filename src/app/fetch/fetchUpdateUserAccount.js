import axios from "axios";

export default async function fetchUpdateUserAccount({ id, newPass, newName, newID, newId }) {
  try {
    // send both newId/newID if provided, include credentials for auth
    const payload = { id };
    if (newPass) payload.newPass = newPass;
    if (newName) payload.newName = newName;
    if (newID) payload.newID = newID;
    if (newId) payload.newId = newId;

    const res = await axios.patch(
      "/api/admin/updateaccount",
      payload,
      { withCredentials: true }
    );

    return res.data;
  } catch (err) {
    // rethrow axios error so caller can inspect response
    throw err;
  }
}
