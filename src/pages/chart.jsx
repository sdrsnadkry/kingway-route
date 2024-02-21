import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";
import { apiData } from "./apiData";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState(null);
  const responseFromRedux = apiData; //useSelector

  useEffect(() => {
    if (responseFromRedux) {
      const labels = responseFromRedux?.data?.map((item) => item.name);
      const data = responseFromRedux?.data?.map((item) => item.count);

      const chartDataFromApi = {
        labels,
        datasets: [
          {
            label: "# gf count",
            data,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          },
        ],
      };

      setChartData(chartDataFromApi);
    }
  }, [responseFromRedux]);

  return (
    <div style={{ height: 800, width: 800 }}>
      {chartData && <Pie data={chartData} options={{}} />}
    </div>
  );
};

export default Chart;
