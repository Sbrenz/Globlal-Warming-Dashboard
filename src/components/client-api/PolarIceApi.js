import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Graphic from "../chart/Graphic";

const PolarIceApi = () => {
  const [polarIceYears, setPolarIceYears] = useState([]);
  const [polarIceExtents, setPolarIceExtents] = useState([]);
  const [polarIceError, setPolarIceError] = useState(null);

  useEffect(() => {
    axios
      .get("https://global-warming.org/api/arctic-api")
      .then((res) => {
        const data = res.data.arcticData;
        setPolarIceYears(data.map((obj) => obj.year));
        setPolarIceExtents(data.map((obj) => obj.extent));
      })
      .catch((err) => setPolarIceError(err.message));
  }, []);

  return (
    <section className="polar text-center d-flex justify-content-center">
      {polarIceError !== null ? (
        <div className="errorContainer">
          <Alert variant="danger">
            Sorry but there is an error <br />
            from the server of the polar ice's data.
            <br />
            Please try later.
          </Alert>
          <hr />
        </div>
      ) : (
        <Graphic
          yData={polarIceYears}
          xData={polarIceExtents}
          chartType="polarIce"
          title="Global decrease of polar ice "
        />
      )}
    </section>
  );
};

export default PolarIceApi;
