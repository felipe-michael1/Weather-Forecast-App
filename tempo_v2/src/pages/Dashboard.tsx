import { useEffect, useState } from "react";
import WeatherChart from "../components/WeatherChart";
import Sidebar from "./Sidebar";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export default function Dashboard() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [rain24h, setRain24h] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  // pega localização do navegador
  function getLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        loadWeather(latitude, longitude);
      },
      (err) => {
        console.error(err);
        alert("Permita acesso à localização para ver o clima");
      }
    );
  }

  // chama API pelo lat/lon
  async function loadWeather(lat, lon) {
    try {
      // clima atual
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const currentData = await currentRes.json();
      setCurrent(currentData);

      // previsão
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      const daily = {};
      let rainSum = 0;

      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];

        if (!daily[date]) daily[date] = [];

        daily[date].push(item.main.temp);

        if (item.rain?.["3h"]) rainSum += item.rain["3h"];
      });

      const nextDays = Object.keys(daily)
        .slice(0, 7)
        .map((day) => ({
          day: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
          temp:
            Math.round(
              daily[day].reduce((a, b) => a + b) / daily[day].length
            ),
        }));

      setForecast(nextDays);
      setRain24h(rainSum.toFixed(1));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return <div className="p-5">Loading weather...</div>;

  return (
    <div className="d-flex vh-100">
      <Sidebar />

      <div className="flex-fill">
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">
            Dashboard - {current.name}
          </span>
        </nav>

        <div className="p-4">
          {/* CARDS */}
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Rain last 24 hours</h6>
                <h3>{rain24h} mm</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Temperature</h6>
                <h3>{Math.round(current.main.temp)}ºC</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Relative humidity</h6>
                <h3>{current.main.humidity}%</h3>
              </div>
            </div>
          </div>

          {/* CHART */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow-sm p-3">
                <h5 className="mb-3">Next days temperature forecast</h5>
                <WeatherChart data={forecast} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
