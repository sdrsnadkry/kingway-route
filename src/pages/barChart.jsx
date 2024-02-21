import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { apiData } from "./apiData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const responseFromRedux = apiData; //useSelector`

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (responseFromRedux) {
      const labels = responseFromRedux?.data?.map((item) => item.name);
      const data = responseFromRedux?.data?.map((item) => item.count);

      const chartDataFromApi = {
        labels,
        datasets: [
          {
            label: "Steps count",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };

      setChartData(chartDataFromApi);
    }
  }, [responseFromRedux]);

  return <div>{chartData && <Bar data={chartData} />}</div>;
};

export default BarChart;


//DRY