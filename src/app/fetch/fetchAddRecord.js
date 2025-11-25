import axios from "axios";

export default async function AddRecord({
  first_name,
  last_name,
  middle_initial,
  department,
  position,
  office,
  status,
  school_year,
}) {
  if (department === "Admin") {
    try {
      const res = await axios.post("/api/user/createuser/administrator", {
        first_name,
        last_name,
        middle_initial,
        department,
        position,
        office,
        status,
        school_year,
      });
      return res;
    } catch (err) {
      throw err;
    }
  }

  if (department === "CS") {
    try {
      const res = await axios.post("/api/user/createuser/centralservice", {
        first_name,
        last_name,
        middle_initial,
        department,
        position,
        office,
        status,
        school_year,
      });
      return res;
    } catch (err) {
      throw err;
    }
  }

  try {
    const res = await axios.post("/api/user/createuser/3dretreatonly", {
      first_name,
      last_name,
      middle_initial,
      department,
      position,
      office,
      status,
      school_year,
    });
    return res;
  } catch (err) {
    throw err;
  }
}
