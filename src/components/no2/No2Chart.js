import React from "react";

// import barchart from chart.js
import { Line } from "react-chartjs-2";

const No2Chart = ({ dateData, averageData }) => {
  const chartData = {
    labels: dateData,
    datasets: [
      {
        label: "Global No2 emission increase in PPB*",
        data: averageData,
        backgroundColor: "rgba(196,19,192,0.4)",
        borderColor: "rgba(196,19,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="no2" className="container">
      <div className="text-center">
        <h1 className="p-5">Global increase of Nitrous Oxide</h1>
      </div>
      <div className="text-start">
        <Line data={chartData} />
        <p className="asterisk">*Parts per bilion</p>
      </div>
    </section>
  );
};

export default No2Chart;
