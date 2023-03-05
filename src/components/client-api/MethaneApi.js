import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const MethaneApi = () => {
  const [methaneDates, setMethaneDates] = useState([]);
  const [methaneAverages, setMethaneAverages] = useState([]);
  const [methaneError, setMethaneError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://global-warming.org/api/methane-api")
      .then((res) => {
        const data = res.data.methane;
        setMethaneDates(data.slice(1).map((obj) => obj.date));
        setMethaneAverages(data.slice(1).map((obj) => obj.average));
        setLoading(false);
      })
      .catch((err) => setMethaneError(err.message));
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      <Graphic
        yData={methaneDates}
        xData={methaneAverages}
        chartType="methane"
        error={methaneError}
        loading={loading}
        title="Global increase of methane"
      />
    </section>
  );
};

export default MethaneApi;
