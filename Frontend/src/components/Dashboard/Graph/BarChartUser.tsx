import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartUser() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["My Flat", "Flat Confirmed", "Flat Pending"],
        },
      ]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={250}
    />
  );
}
