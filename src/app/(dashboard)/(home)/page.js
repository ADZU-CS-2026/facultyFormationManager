"use client";
import WeatherCard from "../../../components/WeatherCard";
import RecordShortcut from "../../../components/RecordShortcut";
import CalendarCard from "../../../components/CalendarCard";
import AboutCard from "../../../components/AboutCard";


export default function Home() {

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-lg-8 col-12 py-4 px-3">
          <AboutCard />
          <RecordShortcut />
        </div>
        <div className="col-lg-4 col-12 py-4 pt-lg-4 pt-0 px-3">
          <WeatherCard />
          <CalendarCard />
        </div>
      </div>
    </div>
  );
}
