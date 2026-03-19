import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../components/Api";

export default function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {

            await api.post("/logout");
            navigate("/");

        } catch (error) {
            console.error(error);
        }
    };

return (
    <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h4 className="mb-4">climate monitoring</h4>
        <ul className="nav nav-pills flex-column gap-2">
            <li><Link to="/dashboard" className="nav-link text-white">🏠 Dashboard</Link></li>
            <li><Link to="/map" className="nav-link text-white">📋 Map Area</Link></li>
            <li><Link to="/reports" className="nav-link text-white">📊 Reports</Link></li>
            <li><Link to="/search" className="nav-link text-white">🔍 Search City</Link></li>
            <li><Link to="/profile" className="nav-link text-white">👤 Profile</Link></li>
            <li className="mt-4">
                <button 
                    onClick={handleLogout}
                    className="btn btn-outline-light w-100">
                    Logout
                </button>
            </li>
        </ul>
    </aside>
    );
}

