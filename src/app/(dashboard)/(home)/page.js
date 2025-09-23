"use client";
import WeatherCard from "../../../components/WeatherCard";
import DataTable from "../../../components/DataTable";
import CalendarCard from "../../../components/CalendarCard";
import FacebookCard from "../../../components/FacebookCard";


export default function Home() {

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-lg-8 col-12 py-4 px-3">
          <DataTable />
        </div>
        <div className="col-lg-4 col-12 py-4 pt-lg-4 pt-0 px-3">
          <CalendarCard />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
