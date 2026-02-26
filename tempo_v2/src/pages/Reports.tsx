import { Link } from "react-router-dom";
import { useState } from "react";

import PressureChart from "../components/charts/PressureChart";
import RainChart from "../components/charts/RainChart";
import MonthlyRainChart from "../components/charts/MonthlyRainChart";
import Sidebar from "./Sidebar";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export default function Reports() {
  const [city, setCity] = useState("São Paulo");
  const [pressureData, setPressureData] = useState([]);
  const [rainData, setRainData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},BR&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();
    const pressure = [];
    const rain = [];
    let totalRain = 0;

    data.list.forEach(item => {
      const time = item.dt_txt.slice(11, 16);
      const rainVolume = item.rain?.["3h"] || 0;

      pressure.push({
        time,
        pressure: item.main.pressure
      });

      rain.push({
        time,
        rain: rainVolume
      });

      totalRain += rainVolume;
    });

    setPressureData(pressure);
    setRainData(rain);

    setMonthlyData([
      { day: "Média", avgRain: totalRain / 30 }
    ]);
  };

  return (
    <div className="d-flex vh-100">
       <Sidebar /> 

      <div className="flex-fill" style={{ overflow: "scroll" }}>
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">Reports</span>
        </nav>

        <div className="p-4">
          <h3 className="mb-4">📊 Climate Reports</h3>

          <div className="input-group mb-4">
            <input
              className="form-control"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={loadData}>
              Search
            </button>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow p-3">
                <h6>Atmospheric pressure</h6>
                <PressureChart data={pressureData} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow p-3">
                <h6>Rainfall Index</h6>
                <RainChart data={rainData} />
              </div>
            </div>

            <div className="col-12">
              <div className="card shadow p-3">
                <h6>Average rainfall for the month</h6>
                <MonthlyRainChart data={monthlyData} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}