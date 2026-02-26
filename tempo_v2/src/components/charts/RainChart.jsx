import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from "recharts";

export default function RainChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis unit=" mm" />
        <Tooltip />
        <Bar dataKey="rain" />
      </BarChart>
    </ResponsiveContainer>
  );
}