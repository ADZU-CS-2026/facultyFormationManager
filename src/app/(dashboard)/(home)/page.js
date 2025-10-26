"use client";
<<<<<<< HEAD
=======
import WeatherCard from "../../../components/WeatherCard";
>>>>>>> main
import RecordShortcut from "../../../components/RecordShortcut";
import CalendarCard from "../../../components/CalendarCard";
import AboutCard from "../../../components/AboutCard";
import AllProgress from "../../../components/AllProgress";
<<<<<<< HEAD
=======

>>>>>>> main

export default function Home() {

  return (
    <div className="w-100">
      <div className="row g-0">
        <div className="col-lg-8 col-12 py-4 px-3">
          <AboutCard />
          <AllProgress />
        </div>
        <div className="col-lg-4 col-12 py-4 pt-lg-4 pt-0 px-3">
          <RecordShortcut />
          <CalendarCard />
<<<<<<< HEAD
=======
          {/* <WeatherCard /> */}
>>>>>>> main
        </div>
      </div>
    </div>
  );
}
