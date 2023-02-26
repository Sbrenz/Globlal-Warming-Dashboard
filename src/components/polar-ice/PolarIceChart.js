import React from "react";

// import barchart from chart.js
import { Line } from "react-chartjs-2";

const PolarIceChart = ({ yearData, extentData }) => {
  const chartData = {
    labels: yearData,
    datasets: [
      {
        label: "Global decrease of Polar Ice (km²)",
        data: extentData,
        backgroundColor: "rgba(11,127,171,0.4)",
        borderColor: "rgba(11, 127, 171, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="polar" className="container polar">
      <div className="text-center">
        <h1 className="p-5">Global decrease of Polar Ice</h1>
      </div>
      <div className="container">
        <Line data={chartData} />
      </div>
    </section>
  );
};

export default PolarIceChart;
