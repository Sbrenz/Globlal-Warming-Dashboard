import React, { useState, useEffect } from "react";
import axios from "axios";
import Graphic from "../chart/Graphic";
import Alert from "react-bootstrap/Alert";

const TemperatureApi = () => {
  const [temperatureTimes, setTemperatureTimes] = useState([]);
  const [temperatureLands, setTemperatureLands] = useState([]);
  const [temperatureError, setTemperatureError] = useState(null);

  useEffect(() => {
    axios
      .get("https://global-warming.org/api/temperature-api")
      .then((res) => {
        const data = res.data.result;
        setTemperatureTimes(data.map((obj) => obj.time));
        setTemperatureLands(data.map((obj) => obj.land));
      })
      .catch((err) => setTemperatureError(err.message));
  }, []);

  return (
    <div className="d-flex justify-content-center text-center">
      {temperatureError !== null ? (
        <div className="errorContainer">
          <Alert variant="danger">
            Sorry but there is an error <br />
            from the server of the temperature's data.
            <br />
            Please try later.
          </Alert>
          <hr />
        </div>
      ) : (
        <Graphic
          yData={temperatureTimes}
          xData={temperatureLands}
          chartType="temperature"
          title="Global increase of temperature"
        />
      )}
    </div>
  );
};

export default TemperatureApi;
