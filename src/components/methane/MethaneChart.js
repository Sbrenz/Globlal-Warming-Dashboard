import React from "react";

// import barchart from chart.js
import { Line } from "react-chartjs-2";

const MethaneChart = ({ dateData, averageData }) => {
  const chartData = {
    labels: dateData,
    datasets: [
      {
        label: "Global methane Increase in PPB*",
        data: averageData,
        backgroundColor: "rgba(255,165,0,0.4)",
        borderColor: "rgba(255,165,0,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="methane" className="container">
      <div className="text-center">
        <h1 className="p-5">Global increase of Methane</h1>
      </div>
      <div className="text-start">
        <Line data={chartData} />
        <p className="asterisk">*Parts per bilion</p>
      </div>
    </section>
  );
};

export default MethaneChart;
