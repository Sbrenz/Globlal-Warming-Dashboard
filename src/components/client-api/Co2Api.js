import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const Co2Api = () => {
  const [co2Years, setCo2Years] = useState([]);
  const [co2Trends, setCo2Trends] = useState([]);
  const [co2Error, setCo2Error] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://global-warming.org/api/co2-api")
      .then((res) => {
        const data = res.data.co2;
        setCo2Years(data.map((obj) => obj.year));
        setCo2Trends(data.map((obj) => obj.trend));
        setLoading(false);
      })
      .catch((err) => setCo2Error(err.message));
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      <Graphic
        yData={co2Years}
        xData={co2Trends}
        chartType="co2"
        error={co2Error}
        loading={loading}
        title="Global increase of carbon dioxide"
      />
    </section>
  );
};

export default Co2Api;
