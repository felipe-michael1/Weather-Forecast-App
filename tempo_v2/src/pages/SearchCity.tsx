import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export default function SearchCity() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUF, setSelectedUF] = useState("");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  // carregar estados
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
      .then(res => res.json())
      .then(setStates);
  }, []);

  // carregar cidades
  useEffect(() => {
    if (!selectedUF) return;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
      .then(res => res.json())
      .then(setCities);
  }, [selectedUF]);

  // buscar clima
  const getWeather = async (cityName) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},BR&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    const data = await res.json();
    setWeather(data);
  };

  const filteredCities = cities.filter(city =>
    city.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex vh-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-fill" style={{ overflow: "scroll" }}>
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">Search City</span>
        </nav>

        <div className="p-4">

          {/* Estado */}
          <select
            className="form-select mb-3"
            value={selectedUF}
            onChange={(e) => setSelectedUF(e.target.value)}
          >
            <option value="">Select state</option>
            {states.map(state => (
              <option key={state.id} value={state.sigla}>
                {state.nome} ({state.sigla})
              </option>
            ))}
          </select>

          {/* Busca */}
          <input
            className="form-control mb-3"
            placeholder="Type city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Lista cidades */}
          <ul className="list-group mb-4" style={{ maxHeight: 250, overflowY: "auto" }}>
            {filteredCities.map(city => (
              <li
                key={city.id}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => getWeather(city.nome)}
              >
                {city.nome}
              </li>
            ))}
          </ul>

          {/* CARD CLIMA */}
            {weather && (
            <div className="card shadow p-4 text-center card-tempo">

                <h5 className="mb-3">{weather.name}</h5>

                {/* Ícone grande */}
                <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
                className="icone-tempo"
                style={{ width: 120 }}
                />

                <h1 className="mt-2">{Math.round(weather.main.temp)}°C</h1>

                <p className="text-capitalize fs-5">
                {weather.weather[0].description}
                </p>

                <div className="row mt-3 small">
                <div className="col">
                    🌡 Feels Like<br />
                    {Math.round(weather.main.feels_like)}°C
                </div>

                <div className="col">
                    💧 Humidity<br />
                    {weather.main.humidity}%
                </div>

                <div className="col">
                    💨 Speed<br />
                    {weather.wind.speed} m/s
                </div>
                </div>

            </div>
            )}

        </div>
      </div>
    </div>
  );
}