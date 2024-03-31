import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

function LineChart() {
  const data = {
    labels: ["Dec 4", "Dec 25", "Jan 4"],
    datasets: [
      {
        data: [0, 2.1, 4.8],
        fill: false,
        backgroundColor: "#907E73",
        borderColor: "#907E73",
        tension: 0.6,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}

export default LineChart;
