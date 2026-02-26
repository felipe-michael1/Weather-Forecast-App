import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MonthlyRainChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="day" />
        <YAxis unit=" mm" />
        <Tooltip />
        <Area type="monotone" dataKey="avgRain" />
      </AreaChart>
    </ResponsiveContainer>
  );
}