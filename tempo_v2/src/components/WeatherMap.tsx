import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
type Weather = {
  lat: number;
  lon: number;
  temp: number;
  humidity: number;
  description: string;
};

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, 10);
  return null;
}

export default function WeatherMap() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<Weather | null>(null);

  const searchCity = async () => {
    const res = await fetch(`${API_URL}/weather/${city}/`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div>
      {/* search */}
      <div className="d-flex gap-2 mb-3">

        <input
          className="form-control"
          placeholder="Type a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={searchCity}>
          Search
        </button>
      </div>

      {/* map */}
      <MapContainer
        center={[-15, -55]}
        zoom={4}
        style={{ height: "450px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data && (
          <>
            <ChangeView center={[data.lat, data.lon]} />

            <Marker position={[data.lat, data.lon]}>
              <Popup>
                🌡 {data.temp}°C <br />
                💧 {data.humidity}% <br />
                {data.description}
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>

      <div className="btn btn-primary w-100 btn-return-dashboard">
        Return to Dashboard: <Link to='/dashboard'>Click here</Link>
      </div>
    </div>

  );
}
