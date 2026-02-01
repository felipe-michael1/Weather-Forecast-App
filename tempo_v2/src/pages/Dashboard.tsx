import { Link } from "react-router-dom";
import WeatherChart from "../components/WeatherChart";

export default function Dashboard() {
  return (
    <div className="d-flex vh-100">

      {/* SIDEBAR */}
      <aside
        className="bg-dark text-white p-3"
        style={{ width: 250 }}
      >
        <h4 className="mb-4">climate monitoring</h4>

        <ul className="nav nav-pills flex-column gap-2">

          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">
              🏠 Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/tasks" className="nav-link text-white">
              📋 Map Area
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/reports" className="nav-link text-white">
              📊 Reports
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/search" className="nav-link text-white">
              🔍 Search City
            </Link>
           </li>


          <li className="nav-item mt-4">
            <Link to="/" className="btn btn-outline-light w-100">
              Logout
            </Link>
          </li>

        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-fill">

        {/* NAVBAR */}
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">
            Dashboard
          </span>
        </nav>

        {/* CONTENT AREA */}
        <div className="p-4">
          <div className="row g-3">

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Rain last 24 hours</h6>
                <h3>15mm</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Temperature</h6>
                <h3>30ºC</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h6>Relative humidity</h6>
                <h3>56%</h3>
              </div>
            </div>

          </div>
        </div>

        {/* WEATHER CHART */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="card shadow-sm p-3">
                <h5 className="mb-3">Next days temperature forecast</h5>

                <WeatherChart
                  data={[
                    { day: "Mon", temp: 28 },
                    { day: "Tue", temp: 30 },
                    { day: "Wed", temp: 27 },
                    { day: "Thu", temp: 31 },
                    { day: "Fri", temp: 29 },
                    { day: "Sat", temp: 26 },
                    { day: "Sun", temp: 25 },
                  ]}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
