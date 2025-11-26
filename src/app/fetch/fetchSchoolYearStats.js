import axios from "axios";

export default async function fetchSchoolYearStats() {
    const { data } = await axios.get("/api/stats/school-year");
    return data;
}