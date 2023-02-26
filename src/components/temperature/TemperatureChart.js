import React from "react";

// import barchart from chart.js
import { Line } from "react-chartjs-2";

const TemperatureChart = ({ timeData, landData }) => {
  const chartData = {
    labels: timeData,
    datasets: [
      {
        label: "Global Temperature °C",
        data: landData,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="temperature" className="container">
      <div className="text-center">
        <h1 className="p-5">Increase of the Global Temperature</h1>
      </div>
      <div className="container">
        <Line data={chartData} />
      </div>
    </section>
  );
};

export default TemperatureChart;
