import React, { useState, useEffect } from "react";
import axios from "axios";

import Alert from "react-bootstrap/Alert";
import Graphic from "../chart/Graphic";

const Co2Api = () => {
  const [co2Years, setCo2Years] = useState([]);
  const [co2Trends, setCo2Trends] = useState([]);
  const [co2Error, setCo2Error] = useState(null);

  useEffect(() => {
    axios
      .get("https://global-warming.org/api/co2-api")
      .then((res) => {
        const data = res.data.co2;
        setCo2Years(data.map((obj) => obj.year));
        setCo2Trends(data.map((obj) => obj.trend));
      })
      .catch((err) => setCo2Error(err.message));
  }, []);

  return (
    <section className="text-center d-flex justify-content-center">
      {co2Error !== null ? (
        <div className="errorContainer">
          <Alert variant="danger">
            Sorry but there is an error <br />
            from the server of the Co2's data.
            <br />
            Please try later.
          </Alert>
          <hr />
        </div>
      ) : (
        <Graphic
          yData={co2Years}
          xData={co2Trends}
          chartType="co2"
          title="Global increase of carbon dioxide"
        />
      )}
    </section>
  );
};

export default Co2Api;
