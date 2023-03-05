import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const TemperatureApi = () => {
  const [temperatureTimes, setTemperatureTimes] = useState([]);
  const [temperatureLands, setTemperatureLands] = useState([]);
  const [temperatureError, setTemperatureError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://global-warming.org/api/temperature-api")
      .then((res) => {
        const data = res.data.result;
        setTemperatureTimes(data.map((obj) => obj.time));
        setTemperatureLands(data.map((obj) => obj.land));
        setLoading(false);
      })
      .catch((err) => setTemperatureError(err.message));
  }, []);

  return (
    <div className="d-flex justify-content-center text-center">
      <Graphic
        yData={temperatureTimes}
        xData={temperatureLands}
        chartType="temperature"
        error={temperatureError}
        loading={loading}
        title="Global increase of temperature"
      />
    </div>
  );
};

export default TemperatureApi;
