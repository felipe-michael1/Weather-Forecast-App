import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import WeatherMap from "./components/WeatherMap";
import SearchCity from "./pages/SearchCity";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/map" element={<WeatherMap />} />
      <Route path="/search" element={<SearchCity />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
