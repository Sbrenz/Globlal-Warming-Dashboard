import React from "react";

// import barchart from chart.js
import { Line } from "react-chartjs-2";

const Co2Chart = ({ yearData, trendData }) => {
  const chartData = {
    labels: yearData,
    datasets: [
      {
        label: "Global Co2 Increase in PPM*",
        data: trendData,
        backgroundColor: "rgba(25,25,112,0.4)",
        borderColor: "rgba(25,25,112,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="co2" className="container ">
      <div className="text-center">
        <h1 className="p-5">Global increase of Carbon Dioxide</h1>
      </div>
      <div className="text-start">
        <Line data={chartData} />
        <p className="asterisk">*Parts per milion</p>
      </div>
    </section>
  );
};

export default Co2Chart;
