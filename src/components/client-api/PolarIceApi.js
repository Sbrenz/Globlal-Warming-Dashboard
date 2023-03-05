import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const PolarIceApi = () => {
  const [polarIceYears, setPolarIceYears] = useState([]);
  const [polarIceExtents, setPolarIceExtents] = useState([]);
  const [polarIceError, setPolarIceError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://global-warming.org/api/arctic-api")
      .then((res) => {
        const data = res.data.arcticData;
        setPolarIceYears(data.map((obj) => obj.year));
        setPolarIceExtents(data.map((obj) => obj.extent));
        setLoading(false);
      })
      .catch((err) => setPolarIceError(err.message));
  }, []);

  return (
    <section className="polar text-center d-flex justify-content-center">
      <Graphic
        yData={polarIceYears}
        xData={polarIceExtents}
        chartType="polarIce"
        error={polarIceError}
        loading={loading}
        title="Global decrease of polar ice "
      />
    </section>
  );
};

export default PolarIceApi;
