import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from "recharts";

export default function PressureChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis unit=" hPa" />
        <Tooltip />
        <Line type="monotone" dataKey="pressure" stroke="#198754" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}