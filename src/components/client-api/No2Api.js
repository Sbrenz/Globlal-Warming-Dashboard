import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import graphic components
import Graphic from "../chart/Graphic";

const No2Api = () => {
  const [no2Dates, setNo2Dates] = useState([]);
  const [no2Averages, setNo2Averages] = useState([]);
  const [no2Error, setNo2Error] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://global-warming.org/api/nitrous-oxide-api")
      .then((res) => {
        const data = res.data.nitrous;
        setNo2Dates(data.slice(1).map((obj) => obj.date));
        setNo2Averages(data.slice(1).map((obj) => obj.average));
        setLoading(false);
      })
      .catch((err) => setNo2Error(err.message));
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      <Graphic
        yData={no2Dates}
        xData={no2Averages}
        chartType="no2"
        error={no2Error}
        loading={loading}
        title="Global increase of nitrogen dioxide"
      />
    </section>
  );
};

export default No2Api;
