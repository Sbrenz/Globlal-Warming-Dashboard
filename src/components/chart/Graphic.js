import React from "react";

// import components from boostrap
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

// import linechart from chart.js
import { Line } from "react-chartjs-2";

// style
import style from "./graphic.module.css";

const Graphic = ({
  yDataTemperature,
  xDataTemperature,
  yDataCo2,
  xDataCo2,
  yDataNo2,
  xDataNo2,
  yDataMethane,
  xDataMethane,
  yDataPolarIce,
  xDataPolarIce,
  error,
  loading,
}) => {
  // setting temperature chart

  const temperatureData = {
    id: "temperature",
    labels: yDataTemperature,
    datasets: [
      {
        label: "Global Temperature °C",
        data: xDataTemperature,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting co2 chart
  const co2Data = {
    id: "co2",
    labels: yDataCo2,
    datasets: [
      {
        label: "Global Co2 Increase in PPM*",
        data: xDataCo2,
        backgroundColor: "rgba(25,25,112,0.4)",
        borderColor: "rgba(25,25,112,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting methane chart
  const methaneData = {
    id: "methane",
    labels: yDataMethane,
    datasets: [
      {
        label: "Global methane Increase in PPB*",
        data: xDataMethane,
        backgroundColor: "rgba(255,165,0,0.4)",
        borderColor: "rgba(255,165,0,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting no2chart
  const no2Data = {
    id: "no2",
    labels: yDataNo2,
    datasets: [
      {
        label: "Global No2 emission increase in PPB*",
        data: xDataNo2,
        backgroundColor: "rgba(196,19,192,0.4)",
        borderColor: "rgba(196,19,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // setting polar ice chart
  const polarIceData = {
    id: "polarIce",
    labels: yDataPolarIce,
    datasets: [
      {
        label: "Global decrease of Polar Ice (km²)",
        data: xDataPolarIce,
        backgroundColor: "rgba(11,127,171,0.4)",
        borderColor: "rgba(11, 127, 171, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section>
      <Container>
        {/* temperature chart*/}

        {loading ? (
          <div className={style.spinnerContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            {error != null ? (
              <div className={style.errorContainer}>
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <div className={style.chartContainer}>
                <h1>Global increase of temperature</h1>
                <Line data={temperatureData} />
              </div>
            )}
          </div>
        )}

        {/* co2 chart*/}

        {loading ? (
          <div className={style.spinnerContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            {error != null ? (
              <div className={style.errorContainer}>
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <div className={style.chartContainer}>
                <h1>Global increase of carbon dioxide</h1>
                <div className={style.asterisk}>
                  <Line data={co2Data} />
                  <p>*parts per million</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* no2 chart */}

        {loading ? (
          <div className={style.spinnerContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            {error != null ? (
              <div className={style.errorContainer}>
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <div className={style.chartContainer}>
                <h1>Global increase of nitrogen dioxide</h1>
                <div className={style.asterisk}>
                  <Line data={no2Data} />
                  <p>*parts per billion</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* methane chart */}

        {loading ? (
          <div className={style.spinnerContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            {error != null ? (
              <div className={style.errorContainer}>
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <div className={style.chartContainer}>
                <h1>Global increase of methane</h1>
                <div className={style.asterisk}>
                  <Line data={methaneData} />
                  <p>*parts per billion</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* polar ice chart */}

        {loading ? (
          <div className={style.spinnerContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            {error != null ? (
              <div className={style.errorContainer}>
                <Alert variant="danger">
                  Sorry but there is an error <br />
                  from the server.
                  <br />
                  Please try later.
                </Alert>
                <hr />
              </div>
            ) : (
              <div className={style.chartContainer}>
                <h1>Global decrease of polar ice</h1>
                <Line data={polarIceData} />
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Graphic;
