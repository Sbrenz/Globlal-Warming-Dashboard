import React from "react";

// import alert from bootstrap
import Alert from "react-bootstrap/Alert";
// import spinner from boostrap
import Spinner from "react-bootstrap/Spinner";

// import linechart from chart.js
import { Line } from "react-chartjs-2";

const Graphic = ({ yData, xData, chartType, error, loading, title }) => {
  // setting temperature chart
  const temperatureData = {
    labels: yData,
    datasets: [
      {
        label: "Global Temperature °C",
        data: xData,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting co2 chart
  const co2Data = {
    labels: yData,
    datasets: [
      {
        label: "Global Co2 Increase in PPM*",
        data: xData,
        backgroundColor: "rgba(25,25,112,0.4)",
        borderColor: "rgba(25,25,112,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting methane chart
  const methaneData = {
    labels: yData,
    datasets: [
      {
        label: "Global methane Increase in PPB*",
        data: xData,
        backgroundColor: "rgba(255,165,0,0.4)",
        borderColor: "rgba(255,165,0,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting no2chart
  const no2Data = {
    labels: yData,
    datasets: [
      {
        label: "Global No2 emission increase in PPB*",
        data: xData,
        backgroundColor: "rgba(196,19,192,0.4)",
        borderColor: "rgba(196,19,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting polar ice chart
  const polarIceData = {
    labels: yData,
    datasets: [
      {
        label: "Global decrease of Polar Ice (km²)",
        data: xData,
        backgroundColor: "rgba(11,127,171,0.4)",
        borderColor: "rgba(11, 127, 171, 1)",
        borderWidth: 1,
      },
    ],
  };

  // function to handle the settings for each charts
  const chartData = () => {
    switch (chartType) {
      case "co2":
        return co2Data;
      case "methane":
        return methaneData;
      case "no2":
        return no2Data;
      case "polarIce":
        return polarIceData;
      case "temperature":
      default:
        return temperatureData;
    }
  };

  let isLoading = () => {
    if (loading) {
      return <Spinner animation="grow" />;
    }
  };

  return (
    <main>
      <section className="container">
        <div>
          <h1 className="p-5">{title}</h1>
        </div>
        {loading ? (
          <div>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div className="text-start">
            {error !== null ? (
              <div className="errorContainer">
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <Line data={chartData()} />
            )}
            {chartType === "co2" ? (
              <p className="asterisk">*parts per milion</p>
            ) : null}
            {chartType === "no2" ? (
              <p className="asterisk">*parts per bilion</p>
            ) : null}
            {chartType === "methane" ? (
              <p className="asterisk">*parts per bilion</p>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
};

export default Graphic;
